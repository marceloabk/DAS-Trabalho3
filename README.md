# Aspect Crawler

Web crawling, web spiders ou web robots são nomes dados ao processo de visitas automatizadas feitas a websites. Essas visitas podem ter vários propósitos, um bastante utilizado é a de indexação de páginas webs que empresas como google e yahoo fazem. A manutenção de páginas web pela visitação de links e a visitação de páginas para retirada de informações são outros motivos para a criação de web crawlers.

## Funcionamento

O modulo crawler tem um construtor com dois parâmetros obrigatórios e dois opcionais:

    constructor(url: string, during, before = undefined, after = undefined)
    
- url: endereço eletrônico a ser crawleado.
- during: função que será executada junto do crawler.
- before: função que será executado antes do crawler.
- after: função que será executada depois do crawler.

Toda função que é passada para o crawler recebe e retorna um CrawlerResult e é assim que as funções se comunicam.

`````typescript
class CrawlerResult {
    res;
    beforeErr;
    duringErr;
    afterErr;
}
`````

## Exemplo de uso

````typescript
import Crawler from './Models/Crawler'
import {DuringStrategy, PrintStrategy, JsonStrategy} from './Models/DuringStrategy'


function before(result) {
    console.log(`[BEFORE]`);
    result.beforeErr = 'BeforeError';

    return result
}

function during(result) {
    console.log(`[DURING] ${result.beforeErr}`);
    result.duringErr = 'DuringError';

    let strategy = new DuringStrategy(new JsonStrategy());
    result = strategy.exec(result);

    return result;
}

function after(result) {
    console.log(`[AFTER] ${result.beforeErr} ${result.duringErr}`);
    console.log(result.res);

    return result;
}

new Crawler('http://www.engenhandosoftware.com.br', during, before, after);
```` 

