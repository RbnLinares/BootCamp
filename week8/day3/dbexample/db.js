const knex =require ("knex");
// # Do not expose your Neon credentials to the browser

// PGHOST='ep-wandering-base-a2r135in.eu-central-1.aws.neon.tech'
// PGDATABASE='neondb'
// PGUSER='neondb_owner'
// PGPASSWORD='Eu6bBi5SMPfv'

const db = knex({
    client: 'pg',
    connection: {
        host: 'ep-wandering-base-a2r135in.eu-central-1.aws.neon.tech',
        port: 5432,
        user: 'neondb_owner',
        database: 'neondb',
        password: 'Eu6bBi5SMPfv',
        ssl:{ rejectUnauthorized: false },
    }
});

// async function getVersion() {
//     const result = await db.raw(`select id,name,price from products where id = ?`, [params])
//     console.log(result.rows);
// }
// getVersion(4);

async function getVersion() {
    const result = await db.raw(`select version`)
    console.log(result.rows);
}
getVersion();

// select id,name,price from products where id = 5
// select id,name,price from products where id = 6


// db('products')
// .select('id','name')
// .where({ id:3 })

// db('products')
// .insert({name: 'icar', price:1000},['id'])

// db('products')
// // .update ({name: "Iphone15"} , ['id', 'name', 'price'])
// // .where({ id:1 })

// .where({ id:4 })

// .del()
// .returning('*')
// .then((data) => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// });

