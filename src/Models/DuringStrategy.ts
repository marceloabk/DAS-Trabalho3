import '../Aspects/LoggerAspect'
import {beforeMethod, onThrowOfMethod, Metadata, Wove} from 'aspect.js';
import CrawlerResult from "./CrawlerResult";
import {parse} from 'himalaya';

interface DuringStrategyInterface {
    exec(result: CrawlerResult): CrawlerResult;
}

export class PrintStrategy implements DuringStrategyInterface {
    exec(result: CrawlerResult) {
        console.log(`${result.res.body}`);

        return result
    }
}

export class JsonStrategy implements DuringStrategyInterface {
    exec(result: CrawlerResult) {
        result.res = parse(result.res.body);

        return result
    }
}

@Wove()
export class DuringStrategy {
    private _strategy: DuringStrategyInterface;

    constructor(strategy: DuringStrategyInterface) {
        this._strategy = strategy
    }

    exec(result: CrawlerResult) {
        return this.strategy.exec(result)
    }

    set strategy(value: DuringStrategyInterface) {
        this._strategy = value;
    }

    get strategy(): DuringStrategyInterface {
        return this._strategy;
    }
}
