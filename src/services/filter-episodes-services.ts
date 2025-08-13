
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { FilterPodCastModel } from "../models/filter-podcast-model.ts";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string  | undefined): Promise<FilterPodCastModel>=> {

    //define a interface de retorno
    let responseFormat: FilterPodCastModel={
        statusCode: 0,
        body: [],
    }

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);


    //verifico se tem conteudo
    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }
    else{
        responseFormat.statusCode = StatusCode.NoContent;
    }
    responseFormat.body = data;
    
    return responseFormat;
};