import { PodcastModel } from "./podcast-transfer-model";

export interface FilterPodCastModel {
  statusCode: number; // Código HTTP de status da resposta
  body: PodcastModel[] // Corpo da resposta contendo array de Podcasts
}
