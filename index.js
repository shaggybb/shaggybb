const fs = require('fs');

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date();
const markdownTemplate = fs.readFileSync('./README.md.tpl', {encoding: 'utf-8'})
const newMarkdown = markdownTemplate.replace('{{LAST_UPDATE}}', date.toLocaleDateString("en-UK", options))

fs.writeFileSync('README.md', newMarkdown, 'utf8');
