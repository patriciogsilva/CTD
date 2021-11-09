function podeSubir(altura, acompanhada) {
    let podeSubir = false

    if (altura <= 2.0 && altura >= 1.4) {
        podeSubir = true
        console.log("Acesso Autorizado.")
    }

    if (altura >= 1.2 && acompanhada) {
        podeSubir = true
        console.log("Acesso autorizado somente com acompanhante")
    }

    else {
        console.log("Acesso negado")
    }

    return podeSubir

}

console.log(podeSubir(1.1, true));