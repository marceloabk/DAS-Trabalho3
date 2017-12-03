import '../Aspects/LoggerAspect';
import {Wove} from 'aspect.js';
import * as got from 'got';

@Wove()
export default class Crawler {
    constructor(url, current_function = undefined, before_function = undefined, after_function = undefined) {
        if (before_function) {
            before_function();
        }

        const content = this.exec_crawler(url, current_function);

        if (after_function) {
            content.then(x => after_function(x));
        }
    }


    async exec_crawler(url, callback) {
        let response = undefined;
        try {
            response = await got(url);
            if (callback) {
                callback(response)
            }

        } catch (error) {
            console.log(error.response.body);
        }

        return response;
    }
}