export default function calculaMinhaIdade() {
    const anoNascimento = 1990
    const agora = new Date()
    const anoAtual = agora.getFullYear()
    const idadeAtual = anoAtual - anoNascimento
    return idadeAtual
}