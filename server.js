const express = require('express');
const fs = require('fs');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Load brand data
function loadBrandData() {
  const brandDataPath = path.join(__dirname, 'config/brand-data.json');
  return JSON.parse(fs.readFileSync(brandDataPath, 'utf8'));
}

// Load master prompt template
function loadMasterPrompt() {
  const promptPath = path.join(__dirname, 'templates/master-prompt.md');
  return fs.readFileSync(promptPath, 'utf8');
}

// Replace tokens in template
function replaceTokens(template, data) {
  let result = template;
  const tokenPattern = /\{\{([^}]+)\}\}/g;

  result = result.replace(tokenPattern, (match, tokenName) => {
    const value = getNestedValue(data, tokenName);
    return value !== undefined ? value : match;
  });

  return result;
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, prop) =>
    current && current[prop] !== undefined ? current[prop] : undefined, obj);
}

function flattenObject(obj, prefix = '') {
  let flattened = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value, newKey));
    } else if (Array.isArray(value)) {
      flattened[newKey] = value.join(', ');
    } else {
      flattened[newKey] = value;
    }
  }

  return flattened;
}

// API Routes

// Get brand data
app.get('/api/brand-data', (req, res) => {
  try {
    const brandData = loadBrandData();
    res.json(brandData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update brand data
app.post('/api/brand-data', (req, res) => {
  try {
    const brandDataPath = path.join(__dirname, 'config/brand-data.json');
    fs.writeFileSync(brandDataPath, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Generate prompt (without calling Claude)
app.post('/api/generate-prompt', (req, res) => {
  try {
    const brandData = loadBrandData();
    const companyData = req.body;
    const masterPrompt = loadMasterPrompt();

    const allData = {
      ...flattenObject(brandData),
      ...companyData
    };

    const prompt = replaceTokens(masterPrompt, allData);

    res.json({ prompt });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Generate email with Claude API
app.post('/api/generate-email', async (req, res) => {
  try {
    const apiKey = req.body.apiKey || process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return res.status(400).json({
        error: 'API key required. Provide in request or set ANTHROPIC_API_KEY env variable.'
      });
    }

    const brandData = loadBrandData();
    const companyData = req.body.companyData;
    const masterPrompt = loadMasterPrompt();

    const allData = {
      ...flattenObject(brandData),
      ...companyData
    };

    const prompt = replaceTokens(masterPrompt, allData);

    // Call Claude API
    const anthropic = new Anthropic({ apiKey });

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    const emailContent = message.content[0].text;

    res.json({
      email: emailContent,
      usage: message.usage
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save company profile
app.post('/api/companies', (req, res) => {
  try {
    const companiesDir = path.join(__dirname, 'companies');
    if (!fs.existsSync(companiesDir)) {
      fs.mkdirSync(companiesDir, { recursive: true });
    }

    const companyName = req.body.CompanyName.toLowerCase().replace(/\s+/g, '-');
    const filePath = path.join(companiesDir, `${companyName}.json`);

    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));

    res.json({ success: true, filename: `${companyName}.json` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all saved companies
app.get('/api/companies', (req, res) => {
  try {
    const companiesDir = path.join(__dirname, 'companies');

    if (!fs.existsSync(companiesDir)) {
      return res.json([]);
    }

    const files = fs.readdirSync(companiesDir)
      .filter(f => f.endsWith('.json') && f !== '.gitkeep');

    const companies = files.map(file => {
      const data = JSON.parse(fs.readFileSync(path.join(companiesDir, file), 'utf8'));
      return {
        filename: file,
        ...data
      };
    });

    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific company
app.get('/api/companies/:filename', (req, res) => {
  try {
    const filePath = path.join(__dirname, 'companies', req.params.filename);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: 'Company not found' });
  }
});

// Delete company
app.delete('/api/companies/:filename', (req, res) => {
  try {
    const filePath = path.join(__dirname, 'companies', req.params.filename);
    fs.unlinkSync(filePath);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀 ReachOut Email Generator running at http://localhost:${PORT}`);
  console.log(`\n📝 Open your browser and start generating pitches!`);
});
