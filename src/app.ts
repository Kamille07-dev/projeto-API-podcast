import * as http from 'http'; // Importa o módulo HTTP do Node.js para tipos e funções

// Importa funções para listar e filtrar episódios dos controllers
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller';
// Importa rotas da aplicação
import { Routes } from './routes/routes';
// Importa métodos HTTP definidos em utilitários
import { HttpMethod } from './utils/http-methods';

// Exporta a função principal que será usada pelo servidor para tratar requisições
export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // Pega a URL base da requisição (antes do ? na query string)
    const baseUrl= req.url?.split("?")[0];

    // Se o método da requisição for GET e a URL for a rota de listar episódios
    if(req.method=== HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req,res); // Chama a função para listar os episódios
    }

    // Se o método for GET e a URL for a rota para filtrar episódios
    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req,res); // Chama a função para filtrar episódios
    }
}
