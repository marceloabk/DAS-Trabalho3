import {beforeMethod, onThrowOfMethod, Metadata} from 'aspect.js';

class LoggerAspect {
    @beforeMethod({
        classNamePattern: /[\s\S]*/,
        methodNamePattern: /[\s\S]*/
    })
    invokeBeforeMethod(meta: Metadata){
        console.log(`\t[LOGGER] Called ${meta.className}.${meta.method.name}`);
    }

    @onThrowOfMethod({
        classNamePattern: /[\s\S]*/,
        methodNamePattern: /[\s\S]*/
    })
    invokeThrowMethod(meta: Metadata) {
        console.log(`\t[LOGGER][ERROR] Exeption on ${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
    }
}
