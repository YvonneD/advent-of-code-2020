const fs=require('fs');
const data=fs.readFileSync('input.txt','utf-8').split('\r\n')
const check = (stack, min, max) => {
    const letter = stack.slice(0, 1);
    stack = stack.slice(1,stack.length)
  
    if(stack.length === 0 || min === max ){
      if(letter === "F" || letter === "L"){ return min; } 
      else if(letter === "B" || letter === "R"){ return max; }
    }
    if(letter === "F" || letter === "L"){
      max = parseInt((max+min)/2)
      return(check(stack, min, max))
    } 
    if(letter === "B" || letter === "R"){
      min = parseInt(Math.ceil((max+min)/2))
      return(check(stack, min, max ))
    }
  }

const solve=(data)=>{
    const list=data.map(seat=>{
        const row=seat.slice(0,7)
        const col=seat.slice(-3)
        const rowID=check(row,0,127)
        const colID=check(col,0,7)
        const seatID=rowID*8+colID 
        return seatID
    })
    console.log(Math.max(...list))
    //part2
    let sortedlist = list.sort((a, b) => a - b);
	let myID = 0;

	for (let i = 1; i < sortedlist.length - 1; i++) {
		const mySeat = Number(sortedlist[i]) + 1;
		if (mySeat !== sortedlist[i + 1]) {
			myID = mySeat;
		}
	}
    console.log(myID)
}


solve(data)


//second way
function stringToInt(str){
    return parseInt([...str].map(x=>x==='B'||x==='R'?1:0).join(''),2)
}
class Seat{
    constructor(string){
        this.row=stringToInt(string.slice(0,7))
        this.column=stringToInt(string.slice(7))
        this.id=this.row*+this.column
    }
}
const seats=[]
for(const line of data){
    const s=new Seat(line)
    seats.push(s)
}
const ids=seats.map(s=>s.id)
console.log(Math.max(ids))
//part2
ids.sort((a,b)=>a-b)
for(let i=0;i<ids.length-1;i++){
    if(ids[i+1]-ids[i]>1){
        console.log(ids[i]+1)
        break
    }
}