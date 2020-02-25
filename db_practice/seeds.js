use zoo;

db.dropDatabase();

db.animals.insertMany([
  {
    name: "Janet",
    type: "Polar Bear"
  },
  {
    name: "Gary",
    type: "Penguin",
    age: 5
  }
])
