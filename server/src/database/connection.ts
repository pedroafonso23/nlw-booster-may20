// File para fazer a conexao com o database

import knex from 'knex'
import path from 'path' // Ajuda a escrever caminhos, independente do SO

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),  // __dirname retorna o caminho do diretorio que esta executando ele
    },
    useNullAsDefault: true
})

export default connection

