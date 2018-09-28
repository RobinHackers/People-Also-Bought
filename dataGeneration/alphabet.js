const range = (startChar, endChar) => {
  const results = [];
  const start = startChar.charCodeAt(0);
  const end = endChar.charCodeAt(0);
  for (let i = start; i <= end; i++) {
    results.push(String.fromCharCode(i));
  }
  return results;
};

module.exports = range('A', 'Z');
