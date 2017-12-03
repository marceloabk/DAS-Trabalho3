import '../Aspects/LoggerAspect'
import {Wove} from 'aspect.js'

@Wove()
export default class Crawler {
    getArticleName(name) {
        console.log(name)
    }
    getArticleNumber(number) {
        console.log(number);
        // throw 'myException';
    }
}