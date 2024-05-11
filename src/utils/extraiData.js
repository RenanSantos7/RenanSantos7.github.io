/**
 * Pega uma string conversível em objeto Date e retrna no formato DD/MM/AAAA
 * @param {string} string
 * @returns {string} DD/MM/AAAA
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date}
 */
export default function extraiData(string) {
  const dataUs = new Date(string)
  const dia = dataUs.getDate().toString().padStart(2, '0')
  const mes = dataUs.getMonth().toString().padStart(2, '0')
  const ano = dataUs.getFullYear()

  return `${dia}/${mes}/${ano}`
}
