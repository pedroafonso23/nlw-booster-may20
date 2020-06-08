import Knex from 'knex' // Para habilitar os palpites (crtl+space) para o knex

// Para criar
export async function up (knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

// Para voltar atras
export async function down (knex: Knex) {
    return knex.schema.dropTable('items')
}