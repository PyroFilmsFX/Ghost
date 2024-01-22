import {Inject} from '@nestjs/common';
import {ExampleRepository} from './example.repository';

export class ExampleService {
    constructor(
        @Inject('ExampleRepository') private readonly repository: ExampleRepository
    ) {}

    async greet(recipient: string): Promise<string> {
        const greeting = await this.repository.getOne('Greetings');

        const message = greeting.greet(recipient);

        await this.repository.save(greeting);

        return message;
    }
}
