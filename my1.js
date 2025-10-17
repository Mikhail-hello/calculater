function calculate(){
    let a=document.getElementById("a").value
    let b=document.getElementById("b").value
    let c=document.getElementById("c").value
alert(a)
let d=  b*b-4*a*c;
let result
if (d<0)
    result="Вещественных корней нет"
else if (d==0){
    let k1=-b/(2*a)
     result = "Один вещественный корень" +k1
}
else{
let k1=(-b+Math.sqrt(d))/(2*a)
let k2=(-b-Math.sqrt(d))/(2*a)
result = "Два вещественных корня x<sub>1</sub>=" +k1+"<br> x<sub>2</sub>="+k2
} 
let answer=document.getElementById("answer")
answer.innerHTML=result
}