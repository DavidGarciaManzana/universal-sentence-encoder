import {IsentimentAnalysisDatasource} from "../../domain/datasources/Isentiment-analysis.datasource";
import {SentimentAnalysisEntity} from "../../domain/entities/sentiment-analysis.entity";

export class SentimentAnalysisDatasourceImpl implements IsentimentAnalysisDatasource {
    async analyse(data: any): Promise<SentimentAnalysisEntity> {
    return SentimentAnalysisEntity.fromObject({score: data})
    }
}