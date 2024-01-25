export default function extraiData(string) {
	const dataUs = new Date(string)
	const dia = dataUs.getDate().toString().padStart(2, '0')
	const mes = dataUs.getMonth().toString().padStart(2, '0')
	const ano = dataUs.getFullYear()

	return `${dia}/${mes}/${ano}`
}