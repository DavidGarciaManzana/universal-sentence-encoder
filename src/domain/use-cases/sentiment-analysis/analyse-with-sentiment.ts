import {SentimentAnalysisEntity} from "../../entities/sentiment-analysis.entity";
import {IsentimentAnalysisRepository} from "../../repositories/Isentiment-analysis.repository";
import Sentiment from "sentiment";
export interface AnalyseUseCase{
    execute(data:any):Promise<SentimentAnalysisEntity>
}

export class AnalyseWithSentiment implements AnalyseUseCase{
    constructor(
        private readonly repository:IsentimentAnalysisRepository
    ) {
    }

    async execute(message: string[]): Promise<SentimentAnalysisEntity> {
        const sentiment = new Sentiment();
        try {
            const result = await sentiment.analyze(message.join(' '));
            return this.repository.analyse(result.score)
        } catch (error) {
            console.error(error);
            return this.repository.analyse(-6)
        }
    }

}