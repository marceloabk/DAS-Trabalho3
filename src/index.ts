import Crawler from './Models/Crawler'

function before () {
    console.log('[BEFORE]');
    return 'beore err';
}

function during (err, res) {
    console.log(`[DURING] ${res.requestUrl} and ${err}`);
    return 'during err';
}

function after (err, res) {
    console.log(`[AFTER] ${res.requestUrl} and ${err}`);
}

new Crawler('https://www.google.com.br', during, before, after);
