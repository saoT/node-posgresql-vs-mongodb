const mongoose = require('mongoose');

const dbSQL = require('./psql/connection.js');
const dbNoSQL = require('./mongodb/connection.js');



// ( async () => {

//   await dbSQL.connect();

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
  // const getOwnerInfosNatural = await dbSQL.query('select * from owners natural inner join users');
  // const getOwnerInfosExplicit = await dbSQL.query('select * from owners inner join users on owners.user_id = users.user_id');
  // console.log(getOwnerInfosNatural.rows);
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

  // const getSitterInfosNatural = await dbSQL.query('select * from sitters natural inner join users');
  // console.log(getSitterInfosNatural.rows);

  // await dbSQL.query(
  //   'insert into pets (owner_id) values ($1)',
  //   [ '11' ]
  // )

  // const getPets = await dbSQL.query('select * from pets');
  // console.log(getPets.rows);

  // await dbSQL.query('insert into spaces (name, description, sitter_id) values($1, $2, $3)', ['jardin', '50m2 carre', '1']);
  // const allSpaces = await dbSQL.query('select * from spaces');
  // console.log(allSpaces.rows);

  // This should work :
  // await dbSQL.query('insert into images(url, user_id) values($1, $2)', ['www.monimage.com', '17']);
  // This shouldn't work :
  // await dbSQL.query('insert into images(url, user_id, space_id) values($1, $2, $3)', ['www.monimage.com', '3', '8']);
  // const getImages =  await dbSQL.query('select * from images');
  // console.log(getImages);
  // const delImages = await dbSQL.query('delete from images');

// })();


dbNoSQL.then( (db) => {

  const User = mongoose.model('User', require('./schemas/user.js'));
  const Space = mongoose.model('Space', require('./schemas/space.js'));
  const Sitter = mongoose.model('Sitter', require('./schemas/sitter.js'));
  const Review = mongoose.model('Review', require('./schemas/review.js'));
  const Pet = mongoose.model('Pet', require('./schemas/pet.js'));
  const Owner = mongoose.model('Owner', require('./schemas/owner.js'));
  const Debit = mongoose.model('Debit', require('./schemas/debit_account.js'));
  const Credit = mongoose.model('Credit', require('./schemas/credit_account.js'));


  // POPULATE DATABASE
  // var newUser = new User({user_id: mongoose.Types.ObjectId(), name: 'Maia', credentials: 'password1'});
  // newUser.save()
  // .then( (user) => {
  //   var newSitter = new Sitter({sitter_id: mongoose.Types.ObjectId(), description: 'J\'ai un BTS gardien de Gecko', user_id: user._id});
  //   newSitter.save()
  //   .then( sitter => {
  //     var newCredit = new Credit({credit_id: mongoose.Types.ObjectId(), iban: 'FR34-I3F5-AAP2-1890', swift: 'BK2266-89', sitter_id: sitter._id});
  //     newCredit.save();
  //     var newSpace = new Space({space_id: mongoose.Types.ObjectId(), name: 'Aquarium', description: 'Cet aquarium fait 2m2 et peut recevoir un gecko de taille moyenne', sitter_id: sitter._id});
  //     newSpace.save();
  //     var newReview = new Review({review_id: mongoose.Types.ObjectId(), rating: 4, content: 'Mon Gecko était content',user_id: user.user_id, sitter_id: sitter._id});
  //     newReview.save();
  //   })
  //   .catch(e => console.log('error on sitter 1 save', e))
  // })
  // .catch(e => console.log('error on user 2 save', e));

  // var otherNewUser = new User({user_id: mongoose.Types.ObjectId(), name: 'John', credentials: 'password2'});
  // otherNewUser.save()
  // .then( (user) => {
  //   var newOwner = new Owner({owner_id: mongoose.Types.ObjectId(), description: 'J\'ai 2 chats et 3 chiens', user_id: user._id});
  //   newOwner.save()
  //   .then( owner => {
  //     var newDebit = new Debit({debit_id: mongoose.Types.ObjectId(), card_number: '2435-4576-6730-6736', crypto: '657', owner_id: owner._id});
  //     newDebit.save();
  //     var newPet = new Pet({pet_id: mongoose.Types.ObjectId(), name: 'Coco', owner_id: owner.owner_id});
  //     newPet.save()
  //     .then( (pet) => {
  //       var newReview = new Review({review_id: mongoose.Types.ObjectId(), rating: 4, content: 'Mon Gecko était content',user_id: user._id, pet_id: pet._id});
  //       newReview.save();
  //     })
  //     .catch(e => console.log('error on pet 2 save', e));
  //   })
  //   .catch(e => console.log('error on owner 2 save', e));
  // })
  // .catch(e => console.log('error on user 2 save', e));

  User.aggregate([
    { $limit: 2 },
    { $sort: { name: -1} }
  ]).then(users => {
    console.log(users);
  });

  Owner.find()
  .populate('user_id')
  .exec(function (err, owner) {
    if (!err) console.log(owner[0]);
    else console.log(err);
  });

})
.catch(e => console.log(e));