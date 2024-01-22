import {Greeting} from './example.entity';

export interface ExampleRepository {
    getOne(recipient: string): Promise<Greeting>
    save(entity: Greeting): Promise<void>
}
