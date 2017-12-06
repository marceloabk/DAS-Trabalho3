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
