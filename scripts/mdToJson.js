import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const caminhoArquivo = args[0];

if (!caminhoArquivo) {
	console.error('Use: node mdToJSON.js ./arquivo.md');
	process.exit(1);
}

const conteudoOriginal = fs.readFileSync(caminhoArquivo, 'utf-8');

let yaml = '';
let corpo = conteudoOriginal;

// Extrai frontmatter
if (conteudoOriginal.startsWith('---')) {
	const fim = conteudoOriginal.indexOf('---', 3);
	if (fim !== -1) {
		yaml = conteudoOriginal.slice(3, fim).trim();
		corpo = conteudoOriginal.slice(fim + 3).trimStart();
	}
}

// Converte YAML manualmente para objeto simples
const objeto = {};

yaml.split('\n').forEach(linha => {
	const match = linha.match(/^(\w+):\s*(.*)$/);
	if (match) {
		const chave = match[1];
		let valor = match[2];

		// Converte listas do tipo [a, b]
		if (valor.startsWith('[') && valor.endsWith(']')) {
			valor = valor
				.slice(1, -1)
				.split(',')
				.map(s => s.trim());
		}

		objeto[chave] = valor;
	}
});

// Adiciona o conteúdo formatado
objeto.content = corpo
	.replace(/\r?\n/g, '\n')
	.replace(/\t/g, '\t')
	.replace(/"/g, '\"');

fs.writeFileSync('./resultado.json', JSON.stringify(objeto, null, 2), 'utf-8');

console.log('Arquivo salvo como ./resultado.json');
