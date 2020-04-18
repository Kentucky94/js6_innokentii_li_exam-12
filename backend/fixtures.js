const mongoose = require('mongoose');
const {nanoid} = require('nanoid');

const config = require('./config');
const User = require('./models/User');
const Picture = require('./models/Picture');

const run = async () => {
  await mongoose.connect(config.database, config.databaseOptions);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for(let coll of collections){
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [user1, user2, user3] = await User.create({
    username: 'user1',
    password: 'password1',
    token: nanoid(),
    displayName: 'Albert Wesker',
  }, {
    username: 'user2',
    password: 'password2',
    token: nanoid(),
    displayName: 'William Birkin',
  }, {
    username: 'user3',
    password: 'password3',
    token: nanoid(),
    displayName: 'Jill Valentine',
  });

  await Picture.create({
    author: user1,
    name: 'Falling Anton',
    image: '/fixtures/image1.jpg'
  }, {
    author: user1,
    name: 'Magma',
    image: '/fixtures/image2.jpg'
  }, {
    author: user2,
    name: 'In Utero',
    image: '/fixtures/image3.jpg'
  }, {
    author: user2,
    name: 'Unicorn',
    image: '/fixtures/image4.jpg'
  }, {
    author: user3,
    name: 'Morning Glory',
    image: '/fixtures/image5.jpg'
  }, {
    author: user3,
    name: 'Sparkle, Sparkle',
    image: '/fixtures/image6.jpg'
  });

  mongoose.connection.close();
};

run().catch(error => {
  mongoose.connection.close();
  throw error;
});