//  1

let usersName = ['Mike', 'Bob', 'Nikola'];
let [x, y, z] = usersName; 
let users = {};
users = {
    mike: x,
    bob: y,
    nikola: z,
};
console.log(users);



//  2

let salaries = {
    "Mike": 1500,
    "Bob": 1800,
    "Nikola": 1700,
}

function maxSalary(salaries) {   
    const arrSalaries = Object.entries(salaries);
    let  sal = arrSalaries.map(([name, salary]) => salary);  
    let maxSal = 0;
    let maxIndex = -1;
    for (let i = 0; i < sal.length; i++) {
        if (sal[i] > maxSal) {
            maxSal = sal[i];
            maxIndex = i;
        }
    }
    return arrSalaries[maxIndex][0];
}

console.log(maxSalary(salaries));



//   3
users = {mike: 'Mike', bob: 'Bob', nikola: 'Nikola'}
let  {mike: userMike, bob: userBob, nikola: userNikola} = users;
console.log(userMike);
console.log(userBob);
console.log(userNikola);

