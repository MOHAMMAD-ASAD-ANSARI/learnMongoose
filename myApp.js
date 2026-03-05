require('dotenv').config();
const mongoose = require('mongoose');

console.log('All env vars:', Object.keys(process.env));
console.log('MONGO_URI exists:', !!process.env.MONGO_URI);
console.log('MONGO_URI first few chars:', process.env.MONGO_URI ? process.env.MONGO_URI.substring(0, 20) + '...' : 'undefined');


mongoose.connect(process.env.MONGO_URI);

let PersonSchema = new mongoose.Schema({
  name :{
    type : String,
    required: true
  },
  age : Number,
  favoriteFoods:[String]
});
let Person = mongoose.model('Person',PersonSchema);

let person = new Person({
  name: "Asad",
  age:20,
  favoriteFoods: ["Mango"]
});
const createAndSavePerson = function(done){
  console.log("entered the create save person fucntion------------------");
  person.save(function(err,data){
    if(err){
      console.log("Save error:", err);
      return done(err);
    }
    console.log("Saved successfully:", data);
    done(null,data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
