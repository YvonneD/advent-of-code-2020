const fs=require('fs');
const { format } = require('path');
const input=fs.readFileSync('input.txt','utf-8').split('\r\n\r\n')
// const getAgreedAnswersCountByGroup = (groupAnswers) => {
//     let agreedQuestions = "";
//     groupAnswers.forEach((answer) => {
//       const thisPersonAgreedQuestions = answer.split("");
//       thisPersonAgreedQuestions.forEach((ans) => {
//         if (!agreedQuestions.includes(ans)) agreedQuestions += ans;
//       });
//     });
//     return agreedQuestions.length;
//   };

//   const getAgreedAnswersCountByGroupChallenge2 = (groupAnswers) => {
//     let agreedQuestions = groupAnswers[0].split("");
//     groupAnswers.forEach(answer => {
//         agreedQuestions.forEach((ans, index) => {
//             if(!answer.includes(ans)) agreedQuestions[index] = "";
//         })
//     });
//     return agreedQuestions.join("").length;
//   };
  

//   let totalAgreedAnswers = 0;
// let totalAgreedByAllAnswers = 0;
// input.forEach((group) => {
//   totalAgreedAnswers += getAgreedAnswersCountByGroup(group.split(/\r\n/));
//   totalAgreedByAllAnswers += getAgreedAnswersCountByGroupChallenge2(group.split(/\r\n/));
// });
// console.log("Total agreed answers: ", totalAgreedAnswers);
// console.log("Total agreed answers by all (Challenge 2): ", totalAgreedByAllAnswers);

//second way
let total=0
let part2=0
for(const group of input){
    const unique=new Set([...group.replace(/\n/g,'')])
    total+=unique.size

    part2+=[...unique].filter(char=>group.split('\n').filter(x=>x).every(form=>form.includes(char))).length
}
console.log(total)
console.log(part2)