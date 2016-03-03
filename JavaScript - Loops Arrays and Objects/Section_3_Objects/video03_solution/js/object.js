var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};


for (var prop in person) {
    console.log(prop);

}

console.log("  ")

for (var prop in person) {
  console.log(prop, ': ', person[prop]);

}

console.log("  ");

for (var prop in person) {
    console.log(prop + ': ' +  person[prop]);

}


console.log("  ");

console.log("XXX:  ", person.skills);

console.log("YYY:  ", person['skills']);
