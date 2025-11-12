#!/usr/bin/env node

/**
 * Brand Partnership Email Generator
 *
 * Usage:
 *   node generate-pitch.js [company-file.json]
 *
 * This script loads brand data and company-specific data, then generates
 * a complete brand partnership pitch email package.
 */

const fs = require('fs');
const path = require('path');

// Helper function to replace tokens in template
function replaceTokens(template, data) {
  let result = template;

  // Replace all {{TokenName}} patterns
  const tokenPattern = /\{\{([^}]+)\}\}/g;
  result = result.replace(tokenPattern, (match, tokenName) => {
    // Navigate nested objects using dot notation
    const value = getNestedValue(data, tokenName);
    return value !== undefined ? value : match; // Keep original if not found
  });

  return result;
}

// Helper to get nested object values
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, prop) =>
    current && current[prop] !== undefined ? current[prop] : undefined, obj);
}

// Load brand data
function loadBrandData() {
  const brandDataPath = path.join(__dirname, '../config/brand-data.json');
  try {
    const data = JSON.parse(fs.readFileSync(brandDataPath, 'utf8'));
    return data;
  } catch (error) {
    console.error(`Error loading brand data: ${error.message}`);
    process.exit(1);
  }
}

// Load company data
function loadCompanyData(companyFile) {
  if (!companyFile) {
    console.error('Please provide a company data file as argument.');
    console.error('Usage: node generate-pitch.js [company-file.json]');
    process.exit(1);
  }

  try {
    const data = JSON.parse(fs.readFileSync(companyFile, 'utf8'));
    return data;
  } catch (error) {
    console.error(`Error loading company data: ${error.message}`);
    process.exit(1);
  }
}

// Generate the complete prompt
function generatePrompt(brandData, companyData) {
  const masterPromptPath = path.join(__dirname, '../templates/master-prompt.md');
  let prompt = fs.readFileSync(masterPromptPath, 'utf8');

  // Merge brand and company data
  const allData = {
    ...flattenObject(brandData),
    ...companyData
  };

  // Replace tokens
  prompt = replaceTokens(prompt, allData);

  return prompt;
}

// Flatten nested objects for easier token replacement
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

// Main execution
function main() {
  const companyFile = process.argv[2];

  console.log('🚀 Brand Partnership Email Generator\n');

  // Load data
  const brandData = loadBrandData();
  const companyData = loadCompanyData(companyFile);

  console.log(`✓ Loaded brand data`);
  console.log(`✓ Loaded company data for: ${companyData.CompanyName || 'Unknown'}\n`);

  // Generate prompt
  const prompt = generatePrompt(brandData, companyData);

  // Create output directory if it doesn't exist
  const outputDir = path.join(__dirname, '../output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save to file
  const outputFile = path.join(
    outputDir,
    `pitch-${companyData.CompanyName?.toLowerCase().replace(/\s+/g, '-') || 'company'}-${Date.now()}.md`
  );
  fs.writeFileSync(outputFile, prompt, 'utf8');

  console.log(`✓ Generated pitch prompt: ${outputFile}\n`);
  console.log('📋 Next steps:');
  console.log('  1. Review the generated prompt file');
  console.log('  2. Copy and paste it into Claude Code');
  console.log('  3. Claude will generate the complete email package\n');

  // Also print to console
  console.log('═'.repeat(80));
  console.log('GENERATED PROMPT (also saved to file):');
  console.log('═'.repeat(80));
  console.log(prompt);
  console.log('═'.repeat(80));
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { replaceTokens, generatePrompt };
