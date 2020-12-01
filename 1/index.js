const fs=require('fs')
// fs.readFile('./input.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     else{
//         data=data.toString()
//         const arr=data.split('\n').map(Number)
//         for(i=0;i<arr.length;i++){
//             for(j=1;j<arr.length;j++){
//                 if((arr[i]+arr[j])===2020){
//                     console.log(`two multiple is ${arr[i]*arr[j]}`)
//                 }
//             }
//         }
//     }
// })
fs.readFile('./input.txt','utf-8',(err,data)=>{
    if(err) throw err
    else{
        data=data.toString()
        const arr=data.split('\n').map(Number)
        for(x=0;x<arr.length;x++){
            for(y=1;y<arr.length;y++){
                for(z=2;z<arr.length;z++){
                    if(arr[x]+arr[y]+arr[z]===2020){
                        console.log(`three multiple is ${arr[x]*arr[y]*arr[z]}`)
                    }
                }
            }
        }
    }
})