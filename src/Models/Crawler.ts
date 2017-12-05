import CrawlerResult from "./CrawlerResult";
import * as got from 'got';


export default class Crawler {
    private result: CrawlerResult = new CrawlerResult();
    private url: string;

    constructor(url: string, during, before = undefined, after = undefined) {
        this.url = url;
        this.templateMethod(during, before, after)
    }

    templateMethod(during, before, after) {
        if (before) {
            this.result = before(this.result);
        }

        this.execCrawler().then((res) => {
            this.result.res = res;
            this.result = during(this.result);

            return this.result;
        }).then((res) => {
            if (after) {
                this.result = after(this.result)
            }
        });
    }

    async execCrawler() {
        let res = undefined;
        try {
            res = await got(this.url);
        } catch (err) {
            console.log(err);
        }

        return res;
    }
}