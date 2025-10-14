// Auto-update the "Dernière MàJ" column for rows with "✅ Complet" in README status table
// Rule: when run on CI, set "Dernière MàJ" to current YYYY-MM for rows marked "✅ Complet"

const fs = require('fs');
const path = require('path');

const readmePath = path.join(process.cwd(), 'README.md');
let md = fs.readFileSync(readmePath, 'utf8');

// Compute current YYYY-MM in UTC
const now = new Date();
const yyyy = now.getUTCFullYear();
const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
const current = `${yyyy}-${mm}`;

// Find the table under the heading "## 📊 Statut des sections"
const heading = '## 📊 Statut des sections';
const idx = md.indexOf(heading);
if (idx === -1) {
  console.log('Status table heading not found, skipping.');
  process.exit(0);
}

// Extract the table block lines
const afterHeading = md.slice(idx + heading.length);
const endIdx = afterHeading.indexOf('\n\n');
const tableBlock = afterHeading.slice(0, endIdx === -1 ? afterHeading.length : endIdx);
const tableLines = tableBlock.split('\n').filter(l => l.trim().length > 0);

// Map over lines that look like table rows (start with | and have at least 4 columns)
const updatedLines = tableLines.map(line => {
  if (!line.trim().startsWith('|') || line.includes('Section') || line.startsWith('|---------')) {
    return line;
  }
  const cols = line.split('|').map(c => c.trim());
  // cols: [ '', Section, Statut, Dernière, Niveau, '' ]
  if (cols.length < 6) return line; // malformed
  const statut = cols[2];
  // Update only rows with ✅ Complet
  if (statut && statut.includes('✅')) {
    cols[3] = current; // Dernière MàJ
    // Rebuild line with padding spaces
    return `| ${cols[1]} | ${cols[2]} | ${cols[3]} | ${cols[4]} |`;
  }
  return line;
});

// Replace the block in the README
const newBlock = '\n' + updatedLines.join('\n') + '\n\n';
const before = md.slice(0, idx + heading.length);
const after = afterHeading.slice(endIdx === -1 ? afterHeading.length : endIdx);
const updated = before + newBlock + after;

if (updated !== md) {
  fs.writeFileSync(readmePath, updated, 'utf8');
  console.log('README status dates updated to', current);
} else {
  console.log('No updates required');
}
