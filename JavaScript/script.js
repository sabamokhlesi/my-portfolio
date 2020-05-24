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
}

setInterval(textAnimate, 5000);


const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach(element => {
  let state = {
    mouseX: 0,
    mouseY: 0,
    height: element.clientHeight,
    width: element.clientWidth
  };

  element.addEventListener("mousemove", ele => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    state.mouseX = ele.pageX - element.offsetLeft - state.width ;
    state.mouseY = ele.pageY - element.offsetTop - state.height ;

    // parallax angle in card
    const angleX = (state.mouseX / state.width) * 10;
    const angleY = (state.mouseY / state.height) * -10;
    card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

    // parallax position of background in card
    const posX = (state.mouseX / state.width) * -10;
    const posY = (state.mouseY / state.height) * -10;
    cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
  });

  element.addEventListener("mouseout", () => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    card.style.transform = `rotateY(0deg) rotateX(0deg) `;
    cardBg.style.transform = `translateX(0px) translateY(0px)`;
  });
});