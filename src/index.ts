import Crawler from './Models/Crawler'

function during(content) {
    console.log(content.body)
}

function before() {
    console.log("verificando banco de dados")
}

function after(content) {
    console.log('Inserindo no banco: ', content.requestUrl)
}

new Crawler('https://www.google.com.br', during, before, after);
