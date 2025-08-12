import {IncomingMessage, ServerResponse} from 'http'
import { serviceListEpisodes } from '../services/list-episodes-services'
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content= await serviceListEpisodes();

    res.writeHead(StatusCode.OK, {'content-type': ContentType.JSON})
    res.end(
        JSON.stringify(content)
    )
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    //http://localhost:3333/api/episode?p=flow
   

    const content = await serviceFilterEpisodes(req.url);
    res.writeHead(StatusCode.OK, { "content-type": ContentType.JSON});
    //res.write(JSON.stringify(content.body))
    res.end(JSON.stringify(content));
}


