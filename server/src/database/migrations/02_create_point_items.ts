import Knex from 'knex' // Para habilitar os palpites (crtl+space) para o knex

// Para criar
export async function up (knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        // Criando chave estrangeira de uma tabela na outra (relacao muitos para muitos)
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points')
        
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items')
    })
}

// Para voltar atras
export async function down (knex: Knex) {
    return knex.schema.dropTable('point_items')
}