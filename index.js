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
  const getOwnerInfosExplicit = await dbSQL.query('select * from owners inner join users on owners.user_id = users.user_id');
  console.log(getOwnerInfosNatural.rows);
  // console.log(getOwnerInfosExplicit.rows);

  // await dbSQL.query('delete from owners');
  // const getOwnerInfos = await dbSQL.query('select * from ')

  // await dbSQL.query(
  //   'insert into sitters (user_id, description) values ($1,$2)',
  //   [ '19', 'I like to take care of animals' ]
  // )

  // await dbSQL.query(
  //   'insert into owners (user_id, description) values ($1,$2)',
  //   [ '19', 'I have lots of animals' ]
  // )

  const getSitterInfosNatural = await dbSQL.query('select * from sitters natural inner join users');
  console.log(getSitterInfosNatural.rows);

  // await dbSQL.query(
  //   'insert into pets (owner_id) values ($1)',
  //   [ '11' ]
  // )

  const getPets = await dbSQL.query('select * from pets');
  console.log(getPets.rows);

  await dbSQL.query('insert into spaces (name, description, sitter_id) values($1, $2, $3)', ['jardin', '50m2 carre', '1']);
  const allSpaces = await dbSQL.query('select * from spaces');
  console.log(allSpaces.rows);

  // This should work :
  // await dbSQL.query('insert into images(url, user_id) values($1, $2)', ['www.monimage.com', '17']);
  // This shouldn't work :
  // await dbSQL.query('insert into images(url, user_id, space_id) values($1, $2, $3)', ['www.monimage.com', '3', '8']);
  // const getImages =  await dbSQL.query('select * from images');
  // console.log(getImages);
  // const delImages = await dbSQL.query('delete from images');

})();