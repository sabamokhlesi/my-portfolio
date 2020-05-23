// const MoveInRight = document.querySelectorAll('.move-in-right')
// const MoveInUp = document.querySelectorAll('.move-in-up')
// const MoveInLeft = document.querySelectorAll('.move-in-left')
// const FadeIn = document.querySelectorAll('.fade-in')
// const options = {
//     root:null,
//     threshold:0,
//     rootMargin:"-200px 0px -200px 0px",
// }
// const observer = new IntersectionObserver(function(entries,observer){
//     entries.forEach(entry =>{
//         if(!entry.isIntersecting){return}
//         entry.target.classList.add('add-animation');
//         observer.unobserve(entry.target)
//     })
// },options)

// MoveInRight.forEach(item => observer.observe(item))
// MoveInLeft.forEach(item => observer.observe(item))
// MoveInUp.forEach(item => observer.observe(item))
// FadeIn.forEach(item => observer.observe(item))






textAnimate();

function textAnimate(){
    const randomLetters = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    const content = "A Frontend Developer";
    const speed = 25; // ms per frame
    const increment = 3; // frames per step. Must be >2
    
        
    const contentLength = content.length;       
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function rustle (i) {          
    setTimeout(function () {
      if (--i){rustle(i);}
      nextFrame(i);
      si = si + 1;        
    }, speed);
    })(contentLength*increment+1); 
    function nextFrame(pos){
      for (let i=0; i<contentLength-stri; i++) {
        //Random number
        const num = Math.floor(randomLetters.length * Math.random());
        //Get random letter
        let letter = randomLetters.charAt(num);
        block = block + letter;
      }
      if (si == (increment-1)){
        stri++;
      }
      if (si == increment){
        // Add a letter; 
        // every speed*10 ms
        fixed = fixed +  content.charAt(stri - 1);
        si = 0;
      }
      $("#output").html(fixed + block);
      block = "";
    }
    window.setInterval(function () {
        textAnimate();
    }, 4000); // repeat forever, polling every 4 seconds
}