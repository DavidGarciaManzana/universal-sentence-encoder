import {SentimentAnalysisEntity} from "../../entities/sentiment-analysis.entity";
import {IsentimentAnalysisRepository} from "../../repositories/Isentiment-analysis.repository";
require('@tensorflow/tfjs');
import * as tf from '@tensorflow/tfjs';
const use = require('@tensorflow-models/universal-sentence-encoder');



export interface AnalyseUseCase{
    execute(data:any):Promise<SentimentAnalysisEntity>
}

export class AnalyseWithUniversalSentenceEncoder implements AnalyseUseCase{
    constructor(
        private readonly repository:IsentimentAnalysisRepository
    ) {
    }

    async execute(message: string[]): Promise<SentimentAnalysisEntity> {

            // // Load the model.
            // use.load().then((model: { embed: (arg0: string[]) => Promise<any>; }) => {
            //     // Embed an array of sentences.
            //     const sentences = [
            //         'Hello.',
            //         'How are you?'
            //     ];
            //     model.embed(sentences).then(embeddings => {
            //         // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
            //         // So in this example `embeddings` has the shape [2, 512].
            //         embeddings.print(true /* verbose */);
            //         console.log(embeddings)
            //     });
            // });

            // Load the model.
            use.loadQnA().then((model: { embed: (arg0: { queries: string[]; responses: string[]; }) => any; }) => {
                // Embed a dictionary of a query and responses. The input to the embed method
                // needs to be in following format:
                // {
                //   queries: string[];
                //   responses: Response[];
                // }
                // queries is an array of question strings
                // responses is an array of following structure:
                // {
                //   response: string;
                //   context?: string;
                // }
                // context is optional, it provides the context string of the answer.

                // const input = {
                //     queries: ['How are you feeling today?', 'What is captial of China?'],
                //     responses: [
                //         'I\'m not feeling very well.',
                //         'Beijing is the capital of China.',
                //         'You have five fingers on your hand.'
                //     ]
                // };
                const input = {
                    queries: ['How are you feeling today?', 'What is captial of China?'],
                    responses: [
                        'I\'m not feeling very well.',
                        'Beijing is the capital of China.'
                    ]
                };
                let scores:any = [];
                const embeddings = model.embed(input);
                console.log(embeddings)
                /*
                  * The output of the embed method is an object with two keys:
                  * {
                  *   queryEmbedding: tf.Tensor;
                  *   responseEmbedding: tf.Tensor;
                  * }
                  * queryEmbedding is a tensor containing embeddings for all queries.
                  * responseEmbedding is a tensor containing embeddings for all answers.
                  * You can call `arraySync()` to retrieve the values of the tensor.
                  * In this example, embed_query[0] is the embedding for the query
                  * 'How are you feeling today?'
                  * And embed_responses[0] is the embedding for the answer
                  * 'I\'m not feeling very well.'
                  */

                scores = tf.matMul(embeddings['queryEmbedding'],
                    embeddings['responseEmbedding'], false, true).dataSync();
                console.log(scores)
                //Float32Array(4) [
                //   15.84402084350586,
                //   6.837285041809082,
                //   7.38142204284668,
                //   19.08308219909668
                // ]
            });


        return this.repository.analyse(2)
    }
}