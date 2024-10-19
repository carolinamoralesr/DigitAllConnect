const fs = require('fs');
const path = require('path');

const testFilePath = path.join(__dirname, 'uploads/avatars/test.txt');

fs.writeFile(testFilePath, 'This is a test file', (err) => {
  if (err) {
    return console.log('Error writing to file:', err);
  }
  console.log('File written successfully');
});
