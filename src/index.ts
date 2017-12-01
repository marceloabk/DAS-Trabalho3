import {beforeMethod, onThrowOfMethod, Wove, Metadata} from 'aspect.js';

class LoggerAspect {
    @beforeMethod({
        classNamePattern: /^Article/,
        methodNamePattern: /^(get|set)/
    })
    invokeBeforeMethod(meta: Metadata){
        console.log(`[LOGGER] Called ${meta.className}.${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
    }

    @onThrowOfMethod({
        classNamePattern: /^Article/,
        methodNamePattern: /^(get|set)/
    })
    invokeThrowMethod(meta) {
        console.log(`[LOGGER] Exeption on method ${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
    }
}

@Wove()
class ArticleJs {
    getArticleName(name) {
        console.log(name)
    }
    getArticleNumber(number) {
        console.log(number);
        throw 'myException';
    }
}

new ArticleJs().getArticleName('mc');
new ArticleJs().getArticleNumber('0');
