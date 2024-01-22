import {ExampleEvent} from './example.event';

export class Greeting {
    constructor(
        private greeting: string,
        protected events: ExampleEvent[]
    ) {}

    greet(recipient: string) {
        let message;
        if (recipient.trim() === 'world') {
            message = 'Hello, world!';
        } else {
            message = `${this.greeting}, ${recipient.trim()}.`;
        }
        this.events.push(ExampleEvent.create({
            message
        }));
        return message;
    }

    static getEvents(entity: Greeting) {
        return entity.events;
    }

    static clearEvents(entity: Greeting) {
        entity.events = [];
    }
}
