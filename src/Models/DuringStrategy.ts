import CrawlerResult from "./CrawlerResult";

interface DuringStrategyInterface {
    exec(err, content): CrawlerResult;
}

class printStrategy implements DuringStrategyInterface {
    exec(err, content) {


    }
}


class duringStrategy {
    strategy: DuringStrategyInterface;

    constructor(strategy: DuringStrategyInterface) {
        this.strategy = strategy
    }
}