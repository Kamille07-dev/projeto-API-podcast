import {IncomingMessage, ServerResponse} from 'http'
import { serviceListEpisodes } from '../services/list-episodes-services'
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { ContentType } from '../utils/content-type';
import { FilterPodCastModel as PodcastTransferModel } from '../models/filter-podcast-model.ts';


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: PodcastTransferModel= await serviceListEpisodes();

    res.writeHead(content.statusCode, {'content-type': ContentType.JSON})
    res.write(JSON.stringify(content.body));

    res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    //http://localhost:3333/api/episode?p=flow
   
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode, { "content-type": ContentType.JSON});
    res.write(JSON.stringify(content.body));

    res.end();
}


