function gerarTabuada(){
    let num = document.getElementById('textn')
    let n = Number(num.value)

    let ta = document.getElementById('Tabuada')

    if (n == 0) {
        window.alert('[ERRO] Digite algum número')
    } else {
        ta.innerHTML = ''
            for (let t = 1; t <= 10; t++){
                let tab = document.createElement('option')
                tab.text = `${n} x ${t} = ${n*t}`
                tab.value = `tab${t}`
                ta.appendChild(tab)
            } 
    }
}

document.addEventListener("keypress", (event) => {
    if(event.key === 'Enter') 
        gerarTabuada()
})