
console.clear()

function storeAndPrintArray(arr1,arr2){
      let array3=[true,false]
    console.log(arr1)
    let newArray=arr1.concat(arr2,array3)
    console.log(newArray)

    let length=arr1.push(arr2,array3)
    console.log(length)
    console.log(arr1)
 for(i=0;i<arr1.length;i++){
    console.log(arr1[i])    

 }
}
function reversed(arr1){
    let newArray=[]
     for(i=arr1.length-1;i>-1;i--){
        console.log(arr1[i])
        newArray.push(arr1[i])
    
     }

     let index = arr1.length - 1
    //  while(true){
    //     if(arr1[index] == undefined){
    //         return newArray
    //     }
    //     newArray.push(arr1[index])
    //     index--
    //  }

    return newArray 
}
const sumOftheArray  = (arr) =>{
    let sum=0
    for(i=0;i<arr.length;i++){
        if(typeof(arr[i])=="number"){

            sum=sum+arr[i]
        }
        
    }
    return sum
}    



const countingValues = (arr=['a','a','b'])=>{
    let A=0,B=0
    let out = {
        a:0,
        b:0
    }

    for(i=0;i<arr.length;i++){
        if(arr[i]=="a"){
            out.a++            
        }
        else if (arr[i]=="b"){
            out.b++
        }
        else
            console.log("this is unexpected")
        
    }
    return JSON.stringify(out)
}


const minmumOfArray=(arr=[10,3,6,7,-800,90])=>{
    let temp=0
    let result= arr[0]
    for (i=0;i<arr.length-1;i++){
        // temp =0 
        if(arr[i]<arr[i+1]){
            temp=arr[i]
        }
        else{
            temp=arr[i+1]
        }
        console.log(`fist value ${arr[i]}  second value ${arr[i+1]}   temp ${temp}`)

        console.log(`temp ${temp} result ${result}`)
        if(temp<result){
            console.log(temp)
            result=temp
        }
        
    }
}



const countOddOrEven=(num=[1,7,8,4,6])=>{
    let even=[]
    let odd=[]
    
    // num.forEach( e => e%2==0 ? even.push(e) : odd.push(e) )
    num.forEach((e,i,a)=>{
        if(e%2==0){
            even.push(e)
        }
        else{
            odd.push(e)
        }
    });
    console.log(`odd ${odd} even ${even}`)
}
countOddOrEven()

console.clear()

                 
let printNumbers=[3,5,6,78,8,9]
let newArray=[]
  for(i=0;i<printNumbers.length;i++){
    newArray.push(printNumbers[i]+2)  
  }
// console.log(newArray)



//console.log(printNumbers)

let arr = [2,4,6,7,9]

function add2(value,index){
    if (index == 2){
        return value + 2
    }
    return value
}

let stu = [
    {
        name:"varun",
        age:2
    },
    {
        name:"surya",
        age:6
    },
    {
        name:"suresh",
        age:5
    },
    {
        name:"lucy",
        age:7
    }
]
let output = arr.map((value)=>value+2)
let output2 = arr.filter((value)=>  value%2==0 )
let output3=stu.filter((value)=>value.age>2).map((value)=>value.name)








function callback(element,index,arr){
    // console.log(element)
    if(element > 2){
        return true
    }

    return false
}

function eAdichanCopyForEach(arr,callback){
    for(index = 0; index < arr.length ;index++){
        callback(arr[index],index,arr)
    }
}

function eAdichanCopyMap(arr,callback){
    let newArray = []
    for(index = 0; index < arr.length ;index++){
        returnValue =  callback(arr[index],index,arr)
        newArray.push(returnValue)
    }
    return newArray
}

function eAdichanCopyFilter(arr,callback){
    let newArray = []
    for(index = 0; index < arr.length ;index++){
        returnValue =  callback(arr[index],index,arr)
        if (returnValue == true){
            newArray.push(arr[index])
        }
    }
    return newArray
}                  
arr1  =  [1,5,7,9,0]


output = eAdichanCopyFilter(arr1,callback)
console.log(output)







function eAdichanCopyfor(index,stop,arr){
    if(index == stop){
        return  
    }
    return  eAdichanCopyfor(index++,stop,arr)
}

console.log(
    eAdichanCopyfor(1,10,[])

)























