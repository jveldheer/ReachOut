// State
let currentPrompt = '';
let currentCompanyData = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadBrandData();
});

// Generate Pitch
async function generatePitch(event) {
  event.preventDefault();

  const form = document.getElementById('pitchForm');
  const formData = new FormData(form);
  const companyData = {};

  for (let [key, value] of formData.entries()) {
    companyData[key] = value;
  }

  currentCompanyData = companyData;

  try {
    const response = await fetch('/api/generate-prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(companyData)
    });

    const data = await response.json();

    if (data.error) {
      showToast(data.error, 'error');
      return;
    }

    currentPrompt = data.prompt;

    // Show results
    document.getElementById('companyForm').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    document.getElementById('promptOutput').textContent = currentPrompt;

    showToast('Prompt generated! Copy to Claude or use API.', 'success');

  } catch (error) {
    showToast('Error generating prompt: ' + error.message, 'error');
  }
}

// Generate with Claude API
async function generateWithAPI() {
  const apiKey = document.getElementById('apiKey').value;

  if (!apiKey && !confirm('No API key provided. Will use server environment variable. Continue?')) {
    return;
  }

  document.getElementById('emailLoading').style.display = 'block';
  document.getElementById('emailContent').style.display = 'none';
  showTab('email');

  try {
    const response = await fetch('/api/generate-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiKey: apiKey || undefined,
        companyData: currentCompanyData
      })
    });

    const data = await response.json();

    if (data.error) {
      showToast(data.error, 'error');
      document.getElementById('emailLoading').style.display = 'none';
      return;
    }

    // Display generated email
    document.getElementById('emailLoading').style.display = 'none';
    document.getElementById('emailContent').style.display = 'block';

    // Convert markdown to HTML (basic)
    const htmlContent = markdownToHtml(data.email);
    document.getElementById('emailOutput').innerHTML = htmlContent;

    showToast(`Email generated! (${data.usage.input_tokens} in, ${data.usage.output_tokens} out)`, 'success');

  } catch (error) {
    document.getElementById('emailLoading').style.display = 'none';
    showToast('Error calling Claude API: ' + error.message, 'error');
  }
}

// Save Company
async function saveCompany(event) {
  event.preventDefault();

  const form = document.getElementById('pitchForm');
  const formData = new FormData(form);
  const companyData = {};

  for (let [key, value] of formData.entries()) {
    companyData[key] = value;
  }

  if (!companyData.CompanyName) {
    showToast('Please enter a company name', 'error');
    return;
  }

  try {
    const response = await fetch('/api/companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(companyData)
    });

    const data = await response.json();

    if (data.error) {
      showToast(data.error, 'error');
      return;
    }

    showToast(`Company saved as ${data.filename}`, 'success');

  } catch (error) {
    showToast('Error saving company: ' + error.message, 'error');
  }
}

// Brand Settings
async function showBrandSettings() {
  try {
    const response = await fetch('/api/brand-data');
    const data = await response.json();

    document.getElementById('brandDataEditor').value = JSON.stringify(data, null, 2);
    document.getElementById('brandModal').classList.add('active');
  } catch (error) {
    showToast('Error loading brand data: ' + error.message, 'error');
  }
}

function closeBrandSettings() {
  document.getElementById('brandModal').classList.remove('active');
}

async function saveBrandData() {
  try {
    const jsonText = document.getElementById('brandDataEditor').value;
    const data = JSON.parse(jsonText);

    const response = await fetch('/api/brand-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.error) {
      showToast(result.error, 'error');
      return;
    }

    showToast('Brand data saved successfully!', 'success');
    closeBrandSettings();

  } catch (error) {
    showToast('Error saving brand data: ' + error.message, 'error');
  }
}

// Saved Companies
async function showSavedCompanies() {
  try {
    const response = await fetch('/api/companies');
    const companies = await response.json();

    const listHtml = companies.length === 0
      ? `<div class="empty-state">
          <h3>No saved companies yet</h3>
          <p>Save companies from the form to see them here</p>
        </div>`
      : companies.map(company => `
          <div class="company-card">
            <div class="company-info">
              <h3>${company.CompanyName}</h3>
              <div class="company-meta">
                ${company.RecipientFirst} ${company.RecipientLast} • ${company.Title}
                <br>Category: ${company.Category}
              </div>
            </div>
            <div class="company-actions">
              <button class="btn btn-small btn-secondary" onclick="loadCompany('${company.filename}')">
                Load
              </button>
              <button class="btn btn-small btn-danger" onclick="deleteCompany('${company.filename}')">
                Delete
              </button>
            </div>
          </div>
        `).join('');

    document.getElementById('companiesList').innerHTML = listHtml;
    document.getElementById('companiesModal').classList.add('active');

  } catch (error) {
    showToast('Error loading companies: ' + error.message, 'error');
  }
}

function closeSavedCompanies() {
  document.getElementById('companiesModal').classList.remove('active');
}

async function loadCompany(filename) {
  try {
    const response = await fetch(`/api/companies/${filename}`);
    const company = await response.json();

    // Fill form
    const form = document.getElementById('pitchForm');
    for (let [key, value] of Object.entries(company)) {
      const field = form.elements[key];
      if (field) {
        field.value = value;
      }
    }

    closeSavedCompanies();
    showToast(`Loaded ${company.CompanyName}`, 'success');

  } catch (error) {
    showToast('Error loading company: ' + error.message, 'error');
  }
}

async function deleteCompany(filename) {
  if (!confirm('Delete this company?')) return;

  try {
    const response = await fetch(`/api/companies/${filename}`, {
      method: 'DELETE'
    });

    const data = await response.json();

    if (data.error) {
      showToast(data.error, 'error');
      return;
    }

    showToast('Company deleted', 'success');
    showSavedCompanies(); // Refresh list

  } catch (error) {
    showToast('Error deleting company: ' + error.message, 'error');
  }
}

// UI Helpers
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  // Show selected tab
  const tabButtons = document.querySelectorAll('.tab');
  const tabContents = [document.getElementById('promptTab'), document.getElementById('emailTab')];

  if (tabName === 'prompt') {
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');
  } else if (tabName === 'email') {
    tabButtons[1].classList.add('active');
    tabContents[1].classList.add('active');
  }
}

function backToForm() {
  document.getElementById('companyForm').style.display = 'block';
  document.getElementById('resultsSection').style.display = 'none';
}

function resetForm() {
  if (confirm('Clear all form fields?')) {
    document.getElementById('pitchForm').reset();
  }
}

function copyPrompt() {
  navigator.clipboard.writeText(currentPrompt)
    .then(() => showToast('Prompt copied to clipboard!', 'success'))
    .catch(() => showToast('Failed to copy', 'error'));
}

function copyEmail() {
  const emailHtml = document.getElementById('emailOutput').innerText;
  navigator.clipboard.writeText(emailHtml)
    .then(() => showToast('Email copied to clipboard!', 'success'))
    .catch(() => showToast('Failed to copy', 'error'));
}

async function loadBrandData() {
  // Preload brand data for validation
  try {
    await fetch('/api/brand-data');
  } catch (error) {
    console.error('Could not load brand data:', error);
  }
}

// Toast notifications
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Basic markdown to HTML converter
function markdownToHtml(markdown) {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');

  // Wrap in paragraphs
  html = '<p>' + html + '</p>';

  // Lists (basic)
  html = html.replace(/<p>[-•] (.*?)<br>/g, '<ul><li>$1</li>');
  html = html.replace(/<\/li><br>/g, '</li></ul>');

  return html;
}

// Close modals on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('active');
  }
});
