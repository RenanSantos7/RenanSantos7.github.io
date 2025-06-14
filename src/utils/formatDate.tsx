/**
 * Pega uma string conversível em objeto Date e retrna no formato DD/MM/AAAA
 * @param {string} dateStr
 * @returns {string} DD/MM/AAAA
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date}
 */
export default function formatDate(dateStr: string): string {
	const data = new Date(dateStr);
	const dia = data.getDate().toString().padStart(2, '0');
	const mes = (data.getMonth() + 1).toString().padStart(2, '0');
	const ano = data.getFullYear();

	return `${dia}/${mes}/${ano}`;
}
