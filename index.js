let display=document.getElementById("display")
let historyList=document.getElementById("historyList")

function appendValue(v){
display.value+=v
}

function clearDisplay(){
display.value=""
}

function deleteLast(){
display.value=display.value.slice(0,-1)
}

function calculate(){
try{
let result=eval(display.value)
addHistory(display.value+" = "+result)
display.value=result
}catch{
display.value="Error"
}
}

function addHistory(t){
let li=document.createElement("li")
li.textContent=t
historyList.prepend(li)
}

function getValue(){
try{
return eval(display.value)
}catch{
return NaN
}
}

function sin(){
display.value=Math.sin(getValue())
}

function cos(){
display.value=Math.cos(getValue())
}

function tan(){
display.value=Math.tan(getValue())
}

function log(){
display.value=Math.log10(getValue())
}

function sqrt(){
display.value=Math.sqrt(getValue())
}

function square(){
let v=getValue()
display.value=v*v
}

document.addEventListener("keydown",e=>{

if(!isNaN(e.key)||"+-*/.".includes(e.key))
display.value+=e.key

if(e.key==="Enter")
calculate()

if(e.key==="Backspace")
deleteLast()

})

function toggleTheme(){
document.body.classList.toggle("light")
}

/* PARTICLE BACKGROUND */

const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<100;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
})
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

p.x+=p.dx
p.y+=p.dy

if(p.x<0||p.x>canvas.width) p.dx*=-1
if(p.y<0||p.y>canvas.height) p.dy*=-1

})

requestAnimationFrame(animate)
}

animate()