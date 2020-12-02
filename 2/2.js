const fs = require('fs')
fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) console.error(err)
  else {  
       data.split("\n").map(line => {
           dataArray.push({
               minCount: line.split(" ")[0].split('-')[0],
               maxCount: line.split(" ")[0].split('-')[1],
               char: line.split(" ")[1].replace(":", ""),
               pass: line.split(" ")[2]
           })
       })  
       dataArray.map(el => {
           partOneTest(el)
           partTwoTest(el)
        })  
       logResults()
  }
});


const dataArray = [];
const results = {
    partOne_validPasswordCount: 0,
    partOne_invalidPasswordCount: 0,
    partTwo_validPasswordCount: 0,
    partTwo_invalidPasswordCount: 0
};


const partOneTest = ({minCount, maxCount, char, pass}) => {
    const charToTest = new RegExp(char,"g");
    const count = (pass.match(charToTest)||[]).length;
    if((count >= minCount) && (count <= maxCount)) results.partOne_validPasswordCount++;
    else  results.partOne_invalidPasswordCount++;
};

const partTwoTest = ({minCount: pos1, maxCount: pos2, char, pass}) => {
    let test1, test2;
  
    pass[parseInt(pos1) - 1] === char ? test1 = true : test1 = false;
    pass[parseInt(pos2) - 1] === char ? test2 = true : test2 = false;

    if(test1 != test2) results.partTwo_validPasswordCount++;
    else results.partTwo_invalidPasswordCount++;
};


const logResults = () => {
  console.log("\n", `========| RESULTS: |======== `, "\n", 
  `Part One - Valid Passwords: ${results.partOne_validPasswordCount}`, "\n", 
  `Part One - Invalid Passwords: ${results.partOne_invalidPasswordCount}`, "\n\n",
  `Part Two - Valid Passwords: ${results.partTwo_validPasswordCount}`, "\n", 
  `Part Two - Invalid Passwords: ${results.partTwo_invalidPasswordCount}`, "\n",
  )  
};