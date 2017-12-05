import Crawler from './Models/Crawler'

function before(result) {
    console.log(`[BEFORE]`);
    result.beforeErr = 'BeforeError';

    return result
}

function during(result) {
    console.log(`[DURING]`);
    console.log(result.beforeErr);
    console.log(result.res.requestUrl);

    result.duringErr = 'DuringError';
    result.res.requestUrl = 'lolol';

    return result;
}

function after(result) {
    console.log(`[AFTER]`);
    console.log(result.duringErr);
    console.log(result.res.requestUrl);

    return result;
}

new Crawler('https://www.google.com', during, before, after);
