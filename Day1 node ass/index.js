let arr={
    name:"anni",
    class:"masai",
    age:22,
    result:true
}

const {name,...rest}=arr
console.log(name,rest)
