const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hidden_items=document.querySelectorAll('.WordSection1')
hidden_items.forEach((el)=>observer.observe(el))


// //mouseenter
// let javscr=document.getElementById("Javascript_intro")
// let javscrside=document.getElementById("intr")
// javscr.addEventListener("mouseenter",()=>{
//     javscrside.style.backgroundColor="#555";
// })
// javscr.addEventListener("mouseleave",()=>{
//     javscrside.style.backgroundColor=" #333";
// })