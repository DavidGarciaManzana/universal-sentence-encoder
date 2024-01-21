import {SentimentAnalysisEntity} from "../entities/sentiment-analysis.entity";

export abstract class IsentimentAnalysisDatasource {
    abstract analyse(data: any):Promise<SentimentAnalysisEntity>;
}