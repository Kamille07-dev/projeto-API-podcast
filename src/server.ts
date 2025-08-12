import * as http from 'http'
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';


const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        //quaryString
        const [baseUrl,quaryString]= req.url?.split("?") ?? ["", ""];

        //listar podcasts
        if(req.method=== HttpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisodes(req,res);
        }

        if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(req,res);
        }
    }
);

const port = process.env.PORT

server.listen(port,  () => {
    
    console.log(`Servidor rodando na porta: ${port}`);
})