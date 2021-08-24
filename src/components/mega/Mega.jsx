import React, { useState} from 'react';
import "./Mega.css"

const Mega = (props) => {
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
    /* const qtde = props.qtde || 6 */
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais) 
    
    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{ numeros.join(" ") }</h3>
            <div>
                <label htmlFor="">Qtde. de numeros</label>
                <input type="number" value={qtde} 
                onChange={(evento) => setQtde(+evento.target.value)}/>
            </div>
            <button onClick={ (evento) => setNumeros(gerarNumeros(qtde)) }>
                Gerar Numeros
            </button>
        </div>
    )
}
export default Mega;