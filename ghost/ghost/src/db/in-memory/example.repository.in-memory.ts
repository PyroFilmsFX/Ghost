import {Inject} from '@nestjs/common';
import {Greeting} from '../../core/example/example.entity';
import {ExampleRepository} from '../../core/example/example.repository';

interface DomainEvents {
    dispatch(event: unknown): void
}

export class ExampleRepositoryInMemory implements ExampleRepository {
    constructor(
        @Inject('DomainEvents') private readonly events: DomainEvents
    ) {}

    async getOne(greeting: string) {
        const entity = new Greeting(greeting.trim(), []);
        return entity;
    }

    async save(entity: Greeting) {
        for (const event of Greeting.getEvents(entity)) {
            this.events.dispatch(event);
        }
        Greeting.clearEvents(entity);
    }
}
