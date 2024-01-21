import {IsentimentAnalysisRepository} from "../../domain/repositories/Isentiment-analysis.repository";
import {SentimentAnalysisEntity} from "../../domain/entities/sentiment-analysis.entity";
import {IsentimentAnalysisDatasource} from "../../domain/datasources/Isentiment-analysis.datasource";

export class SentimentAnalysisRepositoryImpl implements IsentimentAnalysisRepository{
    constructor(
        private readonly datasource:IsentimentAnalysisDatasource
    ) {
    }
    async analyse(data: any): Promise<SentimentAnalysisEntity> {
        return this.datasource.analyse(data)
    }
}