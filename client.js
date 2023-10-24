// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let bonus
  if (employee.reviewRating <= 2){
    bonus = 0;
  }
  if (employee.reviewRating == 3){
    bonus = 0.04;
  }
  if (employee.reviewRating == 4){
    bonus = 0.06;
  }
  if (employee.reviewRating == 5){
    bonus = 0.1;
  }
  if (employee.employeeNumber.length == 4){
    bonus += 0.05;
  }
  if (employee.annualSalary > 65000){
    bonus -= 0.01;
  }
  if (bonus <0){
    bonus = 0;
  }
  if (bonus > 0.13){
    bonus = 0.13;
  }

  return bonus; 
}

function bonusCalculation (employee) {
  let bonusPercentage = calculateIndividualEmployeeBonus(employee);
  let totalBonus =  bonusPercentage * employee.annualSalary;
  let totalCompensation = Number(employee.annualSalary) + totalBonus;
  return {name: employee.name,
  bonusPercentage: bonusPercentage,
  totalCompensation: totalCompensation,
  totalBonus: totalBonus};
}

for(let employee of employees){
  console.log(bonusCalculation(employee));
}
