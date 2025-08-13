import { FilterPodCastModel } from "../models/filter-podcast-model.ts";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code.js";

export const serviceListEpisodes = async (): Promise<FilterPodCastModel> => {

    // cria um objeto para guardar a resposta
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: [],
    }

    // pega os episódios do repositório
    const data = await repositoryPodcast();

    // verifica se tem algum episódio
    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK; // tem episódios
    } else {
        responseFormat.statusCode = StatusCode.NoContent; // não tem episódios
    }

    // coloca os episódios na resposta
    responseFormat.body = data;

    // devolve a resposta pronta
    return responseFormat;
};
