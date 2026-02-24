console.log("HELLO")

let maths=Number(prompt("Enter marks of maths"))
let science=Number(prompt("Enter marks of science"))
let english=Number(prompt("Enter marks of english"))
let total=maths+science+english
let avg=total*100/300

if(maths>=35 && science>=35 && english>=35){
    alert("congratulation!!You are pass" +"\n Your total is"+total+"\n your avg is"+avg+"%")

    if(avg>=80){
        alert("A+ grade")
    } else if(avg>=60 && avg<80){
        alert("A grade")
    } else if(avg>=40 && avg<60){
        alert("B+ grade")
    }else{
        alert("B grade")
    }
}
else{
    alert("Better luck next time")
}