import '../Aspects/LoggerAspect';
import {Wove} from 'aspect.js';
import * as got from 'got';

@Wove()
export default class Crawler {
    constructor(url, duringFunction = undefined, beforeFunction = undefined, afterFunction = undefined) {
        this.templateCrawler(url, duringFunction, beforeFunction, afterFunction);
    }

    templateCrawler(url, duringFunction, beforeFunction, afterFunction) {
        let beforeErr = null;

        if (beforeFunction) {
            beforeErr = beforeFunction();
        }

        const crawlerExection = this.execCrawler(beforeErr, url, duringFunction);

        if (afterFunction) {
            crawlerExection.then(x => afterFunction(x.err, x.response));
        }
    }


    async execCrawler(beforeErr, url, callback) {
        let response = undefined;
        let duringErr = null;
        try {
            response = await got(url);
            if (callback) {
                duringErr = callback(beforeErr, response)
            }

        } catch (error) {
            console.log(error.response.body);
        }

        return {err: duringErr, response: response};
    }
}