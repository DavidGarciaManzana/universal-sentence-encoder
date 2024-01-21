import {SentimentAnalysisEntity} from "../../entities/sentiment-analysis.entity";
import {IsentimentAnalysisRepository} from "../../repositories/Isentiment-analysis.repository";
import { SentimentAnalyzer, PorterStemmer } from 'natural';

export interface AnalyseUseCase{
    execute(data:any):Promise<SentimentAnalysisEntity>
}

export class AnalyseWithNatural implements AnalyseUseCase{
    constructor(
        private readonly repository:IsentimentAnalysisRepository
    ) {
    }

    execute(message: string[]): Promise<SentimentAnalysisEntity> {
        const analyzer = new SentimentAnalyzer("Spanish", PorterStemmer, "afinn");
        const score =analyzer.getSentiment(message)
        return this.repository.analyse(score)
    }

}