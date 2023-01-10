//Object Type
//let employee:object

let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jod: string;
} = {
  firstName: "Mark",
  lastName: "Zuckerberg",
  age: 45,
  jod: "CEO of Fackbook",
};

console.log(`Name: ${employee.firstName} ${employee.lastName}`)
console.log(`Age:${employee.age}`)
console.log(`Jod:${employee.jod}`)
