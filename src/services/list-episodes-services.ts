import { FilterPodCastModel } from "../models/filter-podcast-model.ts";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code.js";

export const serviceListEpisodes = async (): Promise<FilterPodCastModel> => {

    let responseFormat: FilterPodCastModel={
        statusCode: 0,
        body: [],
    }

    const data = await repositoryPodcast();

    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }
    else{
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;
    return responseFormat;
};