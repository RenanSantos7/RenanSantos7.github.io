import fs from 'fs';

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
	const indexEnd = originalContent.indexOf('---', 3);
	if (indexEnd !== -1) {
		yaml = originalContent.slice(3, indexEnd).trim();
		body = originalContent.slice(indexEnd + 3).trim();
	}
}

// Converte YAML manualmente para objeto simples
const obj = {};

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

		if (key === 'publicated') {
			value = new Date(value);
		}

		obj[key] = value;
	}
});

// Adiciona o conteúdo formatado
obj.content = body
	.replace(/\r?\n/g, '\n')
	.replace(/\t/g, '\t')
	.replace(/"/g, '\"');

fs.writeFileSync('./resultado.json', JSON.stringify(obj, null, 2), 'utf-8');

console.log('Arquivo salvo como ./resultado.json');
