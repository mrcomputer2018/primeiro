function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * ((max + 1) - min)) + min
    return array.includes(aleatorio) ?  gerarNumeroNaoContido(min, max, array) : aleatorio
}

function gerarNumeros(qtde) {
    /** Fill para encher o array coom zeros */
    const numeros = Array(qtde).fill(0).reduce((nums) => {
        const novoNumero =  gerarNumeroNaoContido(1, 60, nums)
        /* console.log([...nums, novoNumero]); */
        return [...nums, novoNumero]
    }, []).sort((n1, n2) => n1 - n2)

    return numeros
}

console.log(gerarNumeros(7));


/* console.log(gerarNumeroNaoContido(1, 60, [0, 0 , 0, 0, 0, 0])); */