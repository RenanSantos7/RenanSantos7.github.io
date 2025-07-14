/* eslint-disable no-undef */
import fs from 'fs';

// Função para gerar ID alfanumérico único
function generateUniqueId(existingIds) {
	const chars =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let id;

	do {
		id = '';
		for (let i = 0; i < 6; i++) {
			id += chars.charAt(Math.floor(Math.random() * chars.length));
		}
	} while (existingIds.includes(id));

	return id;
}

// Função para converter valores YAML simples
function parseYamlValue(value) {
	// Remove aspas se existirem
	if (
		(value.startsWith('"') && value.endsWith('"')) ||
		(value.startsWith("'") && value.endsWith("'"))
	) {
		return value.slice(1, -1);
	}

	// Converte arrays no formato [a, b, c]
	if (value.startsWith('[') && value.endsWith(']')) {
		return value
			.slice(1, -1)
			.split(',')
			.map(s => s.trim().replace(/^['"]|['"]$/g, ''));
	}

	// Converte booleanos
	if (value === 'true') return true;
	if (value === 'false') return false;

	// Converte números
	if (!isNaN(value) && !isNaN(parseFloat(value))) {
		return parseFloat(value);
	}

	return value;
}

// Função para processar arrays YAML com hífens
function parseYamlArray(lines, startIndex) {
	const array = [];
	let currentIndex = startIndex + 1;

	while (currentIndex < lines.length) {
		const line = lines[currentIndex].trim();

		if (line.startsWith('- ')) {
			const item = line.substring(2).trim();
			array.push(item.replace(/^['"]|['"]$/g, ''));
			currentIndex++;
		} else if (line && !line.startsWith(' ') && !line.startsWith('-')) {
			break;
		} else {
			currentIndex++;
		}
	}

	return { array, nextIndex: currentIndex };
}

// Obtém argumentos da linha de comando
const args = process.argv.slice(2);
const filePath = args[0];

// Valida se o caminho do arquivo foi fornecido
if (!filePath) {
	console.error('Use: node mdToJSON.js ./arquivo.md');
	process.exit(1);
}

// Lê o conteúdo do arquivo markdown
const originalContent = fs.readFileSync(filePath, 'utf-8');

let yaml = '';
let body = originalContent;

// Extrai frontmatter YAML
if (originalContent.startsWith('---')) {
	const end = originalContent.indexOf('---', 3);
	if (end !== -1) {
		yaml = originalContent.slice(3, end).trim();
		body = originalContent.slice(end + 3).trimStart();
	}
}

const data = {};
const lines = yaml.split('\n');

// Processa o YAML linha por linha
for (let i = 0; i < lines.length; i++) {
	const line = lines[i].trim();

	// Verifica se é uma propriedade (chave:)
	const match = line.match(/^(\w+):\s*(.*)$/);

	if (match) {
		const key = match[1];
		const value = match[2];

		const ignoredProps = ['tags', 'obsidianUIMode'];

		if (!ignoredProps.includes(key)) {
			// Se o valor está vazio, pode ser um array nas próximas linhas
			if (value === '' || value === null) {
				// Verifica se a próxima linha é um array
				if (
					i + 1 < lines.length &&
					lines[i + 1].trim().startsWith('- ')
				) {
					const result = parseYamlArray(lines, i);
					data[key] = result.array;
					i = result.nextIndex - 1; // Ajusta o índice do loop
				} else {
					data[key] = '';
				}
			} else {
				data[key] = parseYamlValue(value);
			}
		}
	}
}

// Adiciona o conteúdo com escape adequado
data.content = body
	.replace(/\\/g, '\\')
	// eslint-disable-next-line no-useless-escape
	.replace(/"/g, '\"')
	.replace(/\r?\n/g, '\n')
	.replace(/\t/g, '\t');

// Caminho do arquivo blogposts.json
const blogpostsPath = './src/data/blogposts.json';

// Lê o arquivo blogposts.json existente
let blogposts = [];
if (fs.existsSync(blogpostsPath)) {
	const blogpostsContent = fs.readFileSync(blogpostsPath, 'utf-8');
	blogposts = JSON.parse(blogpostsContent);
}

// Extrai IDs existentes para garantir unicidade
const existingIds = blogposts.map(post => post.id).filter(Boolean);

// Gera ID único para o novo post
const dataWithId = { id: generateUniqueId(existingIds), ...data };

// Adiciona o novo post ao array
blogposts.push(dataWithId);

// Salva o arquivo atualizado
fs.writeFileSync(blogpostsPath, JSON.stringify(blogposts, null, 2), 'utf-8');

console.log(`Post adicionado ao blogposts.json com ID: ${data.id}`);
