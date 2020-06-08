import Knex from 'knex' // Para habilitar os palpites (crtl+space) para o knex

// Para criar
export async function up (knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // Segundo parametro eh o tamanho maximo de caracteres no campo
    })
}

// Para voltar atras
export async function down (knex: Knex) {
    return knex.schema.dropTable('point')
}