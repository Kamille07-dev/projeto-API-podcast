import * as http from 'http'; // Importa o módulo HTTP nativo do Node.js para criar o servidor
import { app } from './app'; // Importa o app que contém a lógica da aplicação (requisições/respostas)

// Cria o servidor HTTP usando o app para tratar as requisições
const server = http.createServer(app);

// Pega a porta a partir da variável de ambiente (configuração externa)
const port = process.env.PORT

// Inicia o servidor e fica escutando na porta definida
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`); // Log para indicar que o servidor iniciou
});
