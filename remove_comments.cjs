const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  const ext = path.extname(filePath);
  if (ext === '.css') {
    // Remove block comments in CSS
    // This regex looks for /* followed by anything until */
    // It's a simple regex that might fail on strings, but CSS rarely has /* inside strings.
    // However, to be safe, we can use a slightly more complex approach, but this standard one usually suffices for simple CSS.
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  } else if (ext === '.ts' || ext === '.tsx') {
    // A more robust approach for JS/TS to handle strings vs comments
    // We use a state machine or regex that avoids strings.
    // Instead of writing a full parser, let's use a regex that matches strings OR comments, and replaces comments with nothing, while preserving strings.

    // Pattern matches:
    // 1. Double quoted strings: /"([^"\\]|\\.)*"/
    // 2. Single quoted strings: /'([^'\\]|\\.)*'/
    // 3. Template literals: /`([^`\\]|\\.)*`/
    // 4. Block comments: /\/\*[\s\S]*?\*\//
    // 5. Line comments: /\/\/.*$/m

    // Note: this simple regex doesn't handle regex literals correctly, but it should be fine for this codebase based on what we've seen.
    const regex = /("([^"\\]|\\.)*")|('([^'\\]|\\.)*')|(`([^`\\]|\\.)*`)|(\/\*[\s\S]*?\*\/)|(\/\/.*$)/gm;

    content = content.replace(regex, (match, p1, p2, p3, p4, p5, p6, p7, p8) => {
      // If it's a string or template literal (p1, p3, p5), keep it
      if (p1 || p3 || p5) {
        return match;
      }
      // If it's a comment (p7 or p8), remove it
      return '';
    });
  }

  // Optional: remove empty lines left by deleted comments (if they only had whitespace)
  // content = content.replace(/^\s*[\r\n]/gm, '');

  fs.writeFileSync(filePath, content, 'utf8');
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else {
      const ext = path.extname(fullPath);
      if (ext === '.ts' || ext === '.tsx' || ext === '.css') {
        processFile(fullPath);
      }
    }
  }
}

traverseDir(path.join(__dirname, 'src'));
console.log('Done removing comments.');