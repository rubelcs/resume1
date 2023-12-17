
const btn= document.getElementsByClassName('btn');
const slide= document.getElementById('slide');

const testimonialSlider=()=>{
  
btn[0].onclick=function(){
  slide.style.transform="translateX(0px)";
  for(i=0;i<3;i++){
    btn[i].classList.remove('active-btn');
  }
  // console.log(this)
  this.classList.add("active-btn")
}
btn[1].onclick=function(){
  slide.style.transform="translateX(-800px)";
  for(i=0;i<3;i++){
    btn[i].classList.remove('active-btn');
  }
  // console.log(this)
  this.classList.add("active-btn")
}
btn[2].onclick=function(){
  slide.style.transform="translateX(-1600px)"

  for(i=0;i<3;i++){
    btn[i].classList.remove('active-btn');
  }
  // console.log(this)
  this.classList.add("active-btn")
}

};
testimonialSlider();
