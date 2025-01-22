import { TriviaTopic } from './TriviaTopic';
import { TriviaPrize } from './TriviaPrize';
export class TriviaGame {
    public topic: TriviaTopic;
    public triviaPrizes: TriviaPrize[];
    public description: string;
    public constructor(topic: TriviaTopic,
                       triviaPrizes: TriviaPrize[],
                       description: string) {
        this.topic = topic;
        this.triviaPrizes = triviaPrizes;
        this.description = description;
    }
}