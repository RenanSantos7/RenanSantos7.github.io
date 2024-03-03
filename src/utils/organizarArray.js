export function organizar(arr, prop) {
    const arrayOrganizado = arr.toSorted((a, b) => {
        const dateA = new Date(`${a[prop]}`)
        const dateB = new Date(`${b[prop]}`)
        return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
    })
    /* const arrayFinal = arrayOrganizado.slice(0, 12)
    return arrayFinal */
    return arrayOrganizado
}