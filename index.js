const dbSQL = require('./psql/connection.js');

( async () => {

  await dbSQL.connect();

  // USERS crud operation
  // Create a user
  // await dbSQL.query('insert into users(name, credentials) values ($1, $2)', ['malik', 'root92']);

  // Select users
  // const getUsers = await dbSQL.query('select * from users');
  // console.log(getUsers);

  // Update users
  // await dbSQL.query('update users set credentials=$1 where name=$2', ['root91', 'malik']);

  // Delete users
  // await dbSQL.query('delete from users where name=$1',['pedro']);

  // await dbSQL.query('insert into owners (user_id, description) values ($1, $2)', ['18', 'I love cats']);

  // Select owners
  const getOwnerInfosNatural = await dbSQL.query('select * from owners natural inner join users');
  const getOwnerInfosExplicit = await dbSQL.query('select * from owners natural inner join users on owners.user_id = users.user_id');
  console.log(getOwnerInfosNatural);
  console.log(getOwnerInfosExplicit);

  // await dbSQL.query('delete from owners');
  // const getOwnerInfos = await dbSQL.query('select * from ')

})();