use zoo;

const id = ObjectId("5e53f85685eadf3b496c2ebb");

db.animals.findOne({_id: id});


db.animals.updateOne({_id: ObjectId("5e53f85685eadf3b496c2ebb")}, {$set: {name: "Peter"}});

db.animals.deleteOne({_id: id});
