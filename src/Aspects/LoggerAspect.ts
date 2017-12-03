import {beforeMethod, onThrowOfMethod, Metadata} from 'aspect.js';

class LoggerAspect {
    @beforeMethod({
        classNamePattern: /^Crawler/,
        methodNamePattern: /^(get|set)/
    })
    invokeBeforeMethod(meta: Metadata){
        console.log(`[LOGGER] Called ${meta.className}.${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
    }

    @onThrowOfMethod({
        classNamePattern: /^Crawler/,
        methodNamePattern: /^(get|set)/
    })
    invokeThrowMethod(meta) {
        console.log(`[LOGGER] Exeption on method ${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
    }
}
