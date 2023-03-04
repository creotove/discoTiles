let container = document.querySelector(".container")

let color = ["#539165","#3F497F","#F7C04A","#F8F5E4","#BE6DB7","#FDD36A","#DC8449","#C04A82"]
let n = 5044;
for(let i = 0;i < n ; i++)
{
let square = document.createElement("div")
square.setAttribute("class","squares");
container.append(square)

}
let squares = document.querySelectorAll(".squares")
squares.forEach(e=>{
    e.addEventListener("mousemove",(e)=>{
        e.target.style.backgroundColor = color[Math.floor(Math.random() * color.length)]

        setTimeout(()=>{
            e.target.style.backgroundColor = "black"
        },700)

    })
})