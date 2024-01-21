import {SentimentAnalysisEntity} from "../../entities/sentiment-analysis.entity";
import {IsentimentAnalysisRepository} from "../../repositories/Isentiment-analysis.repository";
const { SentimentManager } = require('node-nlp');


export interface AnalyseUseCase{
    execute(data:any):Promise<SentimentAnalysisEntity>
}

export class AnalyseWithNlp implements AnalyseUseCase{
    constructor(
        private readonly repository:IsentimentAnalysisRepository
    ) {
    }

    async execute(message: string[]): Promise<SentimentAnalysisEntity> {
        const sentiment = new SentimentManager();

        try {
            const result = await sentiment.process('es', message.join(' '));
            return this.repository.analyse(result.score);
        } catch (error) {
            console.error('Error analyzing sentiment:', error);
            return this.repository.analyse(0);
        }
    }

}