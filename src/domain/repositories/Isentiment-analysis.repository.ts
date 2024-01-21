import {SentimentAnalysisEntity} from "../entities/sentiment-analysis.entity";

export abstract class IsentimentAnalysisRepository {
    abstract analyse(data: any):Promise<SentimentAnalysisEntity>;
}