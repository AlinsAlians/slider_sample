const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container-1');
const slides = document.querySelectorAll('.slider-color')



counter = 0
slider()

function slider(){
   right.addEventListener("click", ()=>{
        if (counter <= 0){
           counter--
        }
        if (counter <1-slides.length){
            counter = 0
        }
        slides.forEach(((e)=>{
            e.style.transform = `translateX(${counter*100}%)`
            e.style.transition = "transform 2s ease-in-out"
            console.log(e)
        }))
        console.log("button clicked")
   })

   left.addEventListener("click", ()=>{
      
        if(counter>=0){
            counter = 1-slides.length
        }

        if(counter!=0){
            counter++
            
        }
        
        
        console.log(counter)
        slides.forEach(((e)=>{
            e.style.transform = `translateX(${counter*100}%)`
            e.style.transition = "transform 2s ease-in-out"
            console.log(e)
        }))

     
   })

}



