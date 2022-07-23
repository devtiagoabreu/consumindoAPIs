import { apikey_openweathermap } from './varApp.js'

window.addEventListener('load', ()=> {  
    
    //#region variaveis HTML
    let dollarValorCompra = document.getElementById('dollarValorCompra')
    let dollarValorVenda = document.getElementById('dollarValorVenda')
    let dollarDescricao = document.getElementById('dollarDescricao')

    let euroValorCompra = document.getElementById('euroValorCompra')
    let euroValorVenda = document.getElementById('euroValorVenda')
    let euroDescricao = document.getElementById('euroDescricao')

    let bitcoinValorCompra = document.getElementById('bitcoinValorCompra')
    let bitcoinValorVenda = document.getElementById('bitcoinValorVenda')
    let bitcoinDescricao = document.getElementById('bitcoinDescricao')

    let horaHtml = document.getElementById('hora')
    let minutoHtml = document.getElementById('minuto')
    let segundoHtml = document.getElementById('segundo')
    //#endregion
    
    //#region relogio
    const mostrarHora = () => {
        let data = new Date()
        horaHtml.textContent = String(data.getHours()).padStart(2, "0")
        minutoHtml.textContent = String(data.getMinutes()).padStart(2, "0")
        segundoHtml.textContent = String(data.getSeconds()).padStart(2, "0")

        setTimeout(mostrarHora, 1000)
    }

    mostrarHora()
    //#endregion 
    
    //#region API parâmetros
    let moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

    //#endregion
    
    //#region API URLs
    const urlMoedas = `http://economia.awesomeapi.com.br/json/last/${moedas}`

    //#endregion

    //#region fetch --> urlMoedas
    fetch(urlMoedas) 
            .then( response => { 
                return response.json() 
            })
            .then(  data => {
                
                dollarValorCompra.textContent = `${parseFloat(data.USDBRL['bid']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | C`
                dollarValorVenda.textContent = `${parseFloat(data.USDBRL['ask']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | V`
                dollarDescricao.textContent = 'Dóllar' //data.USDBRL['name']

                euroValorCompra.textContent = `${parseFloat(data.EURBRL['bid']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | C`
                euroValorVenda.textContent = `${parseFloat(data.EURBRL['ask']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | V`
                euroDescricao.textContent = 'Euro' //data.EURBRL['name']

                bitcoinValorCompra.textContent = `${parseFloat(data.BTCBRL['bid']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | C`
                bitcoinValorVenda.textContent = `${parseFloat(data.BTCBRL['ask']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | V`
                bitcoinDescricao.textContent = 'BitCoin' //data.BTCBRL['name']

                console.log(data)
            } )
            .catch( error => {
                console.log(error)
            } )
    
    setInterval(() => {
        fetch(urlMoedas) 
            .then( response => { 
                return response.json() 
            })
            .then(  data => {
                
                dollarValorCompra.textContent = `${parseFloat(data.USDBRL['bid']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | C`
                dollarValorVenda.textContent = `${parseFloat(data.USDBRL['ask']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | V`
                dollarDescricao.textContent = 'Dóllar' //data.USDBRL['name']

                euroValorCompra.textContent = `${parseFloat(data.EURBRL['bid']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | C`
                euroValorVenda.textContent = `${parseFloat(data.EURBRL['ask']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | V`
                euroDescricao.textContent = 'Euro' //data.EURBRL['name']

                bitcoinValorCompra.textContent = `${parseFloat(data.BTCBRL['bid']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | C`
                bitcoinValorVenda.textContent = `${parseFloat(data.BTCBRL['ask']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | V`
                bitcoinDescricao.textContent = 'BitCoin' //data.BTCBRL['name']

                //console.log(data)
            } )
            .catch( error => {
                console.log(error)
            } )
    }, 60000)
    //#endregion
})