import {beforeMethod, onThrowOfMethod, Metadata} from 'aspect.js';

class LoggerAspect {
    @beforeMethod({
        classNamePattern: /^Crawler/,
        methodNamePattern: /[\s\S]*/
    })
    invokeBeforeMethod(meta: Metadata){
        console.log(`[LOGGER] Called ${meta.className}.${meta.method.name}`);
    }

    @onThrowOfMethod({
        classNamePattern: /^Crawler/,
        methodNamePattern: /[\s\S]*/
    })
    invokeThrowMethod(meta) {
        console.log(`[LOGGER] Exeption on ${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
    }
}
