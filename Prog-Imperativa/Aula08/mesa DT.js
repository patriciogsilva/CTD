function podeSubir(altura, acompanhada) {
    let podeSubir = false

    if (altura >= 1.4 && altura <= 2.0) {
        podeSubir = true
        console.log("Acesso Autorizado, pode subir.")
    }

    else if (altura >= 1.2 && acompanhada) {
        podeSubir = true
        console.log("Acesso autorizado com o acompanhante.")
    }

    else {
        console.log("Acesso negado, não poderá subir, nem acompanhada.")
    }

    return podeSubir

}

console.log(podeSubir(1, true));