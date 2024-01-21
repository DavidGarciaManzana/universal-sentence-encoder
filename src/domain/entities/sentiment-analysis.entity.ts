export class SentimentAnalysisEntity {
    constructor(
        public score: number
    ) {}

    static fromObject(object: { [key: string]: any }): SentimentAnalysisEntity {
        const {  score } = object;

        if (score === undefined) {
            throw new Error("Score is required");
        }
        return  new SentimentAnalysisEntity( score);
    }
}
