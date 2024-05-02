const Person = require('./models/Person'); 

// a new Person  instance
const newPerson = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Sushi']
});

// Save the document instance
newPerson.save(function(err, savedPerson) {
  if (err) {
    console.error('Error saving person:', err);
  } else {
    console.log('Person saved successfully:', savedPerson);
  }
});
                              //   Create Many Records with model.create()
// Array of people objects
const arrayOfPeople = [
  { name: 'John', age: 30, favoriteFoods: ['Pizza', 'Sushi'] },
  { name: 'Alice', age: 25, favoriteFoods: ['Burger', 'Pasta'] },
  { name: 'Bob', age: 35, favoriteFoods: ['Steak', 'Salad'] }
  // Add more people objects as needed
];
// Create multiple people records
Person.create(arrayOfPeople, function(err, savedPeople) {
  if (err) {
    console.error('Error creating people:', err);
  } else {
    console.log('People created successfully:', savedPeople);
  }
});
                                        // Use model.find() to Search Your Database

// the name to search for
const nameToSearch = 'John'; 

// to Find all people with the given name
Person.find({ name: nameToSearch }, function(err, people) {
  if (err) {
    console.error('Error finding people:', err);
  } else {
    console.log(`People with the name "${nameToSearch}":`, people);
  }
});
                                    //    Use model.findOne()
// Define the food 

const foodToSearch = 'Pizza'; 

// Find one person with the given food in favorites
Person.findOne({ favoriteFoods: foodToSearch }, function(err, person) {
  if (err) {
    console.error('Error finding person:', err);
  } else {
    if (person) {
      console.log(`Person who likes ${foodToSearch}:`, person);
    } else {
      console.log(`No person found who likes ${foodToSearch}.`);
    }
  }
});

                                    // seach by id
// Define the _id 
const personIdToSearch = '66335798e17298e59cc63cd0'; 

// Find the person by _id
Person.findById(personIdToSearch, function(err, person) {
  if (err) {
    console.error('Error finding person by ID:', err);
  } else {
    if (person) {
      console.log('Person found:', person);
    } else {
      console.log('No person found with the specified ID.');
    }
  }
});
