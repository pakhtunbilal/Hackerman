let first= document.getElementById("container");

async function main(){
    async function bilal (){
    
 
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        first.innerHTML="Initailising hacking program..."
    resolve(1)
    },3000)
    
})
}
let x = await bilal();
console.log(x)
}
let z = main().then(
    async function main1(){
        async function pathan (){
        
     
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        first.innerHTML="username found pakhtun.bilal..."
        resolve(2)
        },3000)
        
    })
    }
    let y = await pathan();
    console.log(y)
    }
)
let w= z.then(
    async function main2(){
        async function khan (){
        
     
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        first.innerHTML="hacking pakhtun.bilal username..."
        resolve(3)
        },3000)
        
    })
    }
    let u = await khan();
    console.log(u)
    }
)

let final=w.then(
    async function main3(){
        async function khan (){
        
     
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        first.innerHTML="connecting to facebook..."
        resolve(4)
        },3000)
        
    })
    }
    let v = await khan();
    console.log(v)
    }
)
final.then(
    async function main4(){
        async function khan (){
        
     
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        first.innerHTML="Mission Accomplished!!!"
        resolve(5)
        },3000)
        
    })
    }
    let t = await khan();
    console.log(t)
    }    
)