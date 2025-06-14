export default function defineSaudacao(): string {
    const agora = new Date()
    const hora = agora.getHours()
    let saudacao = ''

    if (hora < 12) {
        saudacao = 'Bom dia'
    }
    if (hora >= 12 && hora < 18) {
        saudacao = 'Boa tarde'
    }
    if (hora >= 18) {
        saudacao = 'Boa noite'
    }

    return saudacao
}