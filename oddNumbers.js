var values = [21,3,4,6];

function oddNumber(val) {
      //Returns value 1 === true
      return val%2;
}

//I am using ES6 function to filter array values. 
var filterOddNumbers = values.filter(oddNumber)

//Printing odd numbers
console.log(filterOddNumbers);
