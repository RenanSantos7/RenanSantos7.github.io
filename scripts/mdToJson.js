import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const filePath = args[0];

if (!filePath) {
	console.error('Use: node mdToJSON.js ./arquivo.md');
	process.exit(1);
}

const originalContent = fs.readFileSync(filePath, 'utf-8');

let yaml = '';
let body = originalContent;

// Extrai frontmatter
if (originalContent.startsWith('---')) {
	const end = originalContent.indexOf('---', 3);
	if (end !== -1) {
		yaml = originalContent.slice(3, end).trim();
		body = originalContent.slice(end + 3).trimStart();
	}
}

// Converte YAML manualmente para objeto simples
const data = {};

yaml.split('\n').forEach(line => {
	const match = line.match(/^(\w+):\s*(.*)$/);
	
	if (match) {
		const key = match[1];
		let value = match[2];

		// Converte listas do tipo [a, b]
		if (value.startsWith('[') && value.endsWith(']')) {
			value = value
				.slice(1, -1)
				.split(',')
				.map(s => s.trim());
		}

		const ignoredProps = ['tags', 'obsidianUIMode'];

		if (!ignoredProps.includes(key)) {
			data[key] = value;
		}
	}
});

// Adiciona o conteúdo formatado
data.content = body
	.replace(/\r?\n/g, '\\n')
	.replace(/\t/g, '\\t')
	.replace(/"/g, '\\"');

fs.writeFileSync('./resultado.local.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('Arquivo salvo como ./resultado.json');
