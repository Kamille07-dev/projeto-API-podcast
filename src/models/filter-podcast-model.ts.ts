import { PodcastModel } from "./podcast-transfer-model";

export interface FilterPodCastModel {
    statusCode: number;
    body: PodcastModel[]
}