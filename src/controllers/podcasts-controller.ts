import {IncomingMessage, ServerResponse} from 'http'; // Importa tipos HTTP
import { serviceListEpisodes } from '../services/list-episodes-services'; // Serviço para listar episódios
import { serviceFilterEpisodes } from '../services/filter-episodes-services'; // Serviço para filtrar episódios
import { ContentType } from '../utils/content-type'; // Enum com tipos de conteúdo para headers HTTP
import { FilterPodCastModel as PodcastTransferModel } from '../models/filter-podcast-model.ts'; // Modelo para transferência de dados do podcast

// Função que responde com a lista completa de episódios
export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    // Chama o serviço para obter os episódios e espera a resposta
    const content: PodcastTransferModel = await serviceListEpisodes();

    // Define o status da resposta e o tipo de conteúdo (JSON)
    res.writeHead(content.statusCode, {'content-type': ContentType.JSON});
    // Escreve o corpo da resposta, convertendo o objeto em JSON
    res.write(JSON.stringify(content.body));

    // Finaliza a resposta HTTP
    res.end();
};

// Função que responde com episódios filtrados conforme query na URL
export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    // Exemplo de URL: http://localhost:3333/api/episode?p=flow

    // Chama o serviço para filtrar episódios usando a URL da requisição
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    // Define status e cabeçalho para JSON
    res.writeHead(content.statusCode, { "content-type": ContentType.JSON});
    // Escreve o corpo com os episódios filtrados em JSON
    res.write(JSON.stringify(content.body));

    // Encerra a resposta
    res.end();
}
