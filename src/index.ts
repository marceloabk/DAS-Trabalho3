import Crawler from './Models/Crawler'
import {DuringStrategy, PrintStrategy, JsonStrategy} from './Models/DuringStrategy'


function before(result) {
    console.log(`[BEFORE]`);
    result.beforeErr = 'BeforeError';

    return result
}

function during(result) {
    console.log(`[DURING]`);
    let strategy = new DuringStrategy(new JsonStrategy());

    result = strategy.exec(result);

    return result;
}

function after(result) {
    console.log(`[AFTER]`);
    console.log(result.res);

    return result;
}

new Crawler('https://www.google.com', during, before, after);
