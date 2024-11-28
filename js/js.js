const $body = document.querySelector('body')
const menu_btn = document.querySelector('.menu_btn')


/* 햄버거버튼 클릭 시*/
menu_btn.addEventListener('click', (e)=>{
  e.preventDefault()
  $body.classList.toggle('mOpen')
})


/* 검색창 */

const menus = document.querySelectorAll('.tab li')
const bodies = document.querySelectorAll('.tabBody > fieldset')

let num = 0
menus[num].classList.add('active') // 화면 열리자 마자 실행됨
bodies[num].style.display = 'block'

menus.forEach(function(item,index){  // index - 클릭한 li의 숫자
  item.onclick = function(){
    menus[num].classList.remove('active')
    bodies[num].style.display = 'none'

    this.classList.add('active')
    bodies[index].style.display = 'block'

    num = index
  }
})


/* sec01 ranking tab */

const menus2 = document.querySelectorAll('.tabMenu2 li')
const bodies2 = document.querySelectorAll('.tabBody2 > div')


let num2 = 0
menus2[num2].classList.add('active')
bodies2[num2].style.display = 'block'

menus2.forEach(function(itm,idx){
  itm.onclick=function(e){
    e.preventDefault()
    menus2[num2].classList.remove('active')
    bodies2[num2].style.display = 'none'

    this.classList.add('active')
    bodies2[idx].style.display = 'block'

    num2=idx
  }
})







/* sec01 slider */

const lookCarousel = new Swiper('.look_carousel', {


  slidesPerView: 1,   // 제일 작은 화면 기준
  spaceBetween: 30,
  loop: true,
  
  breakpoints:{
    550: { slidesPerView: 2 },
    845: { slidesPerView: 3 },
    1400: { slidesPerView: 4 },

  },

  grabCursor: true,
  pagination:{
    el:'.swiper-pagination',
  }
})


/* sec02 swiper */

var sec02Swiper = new Swiper('.sec02Swiper',{
  effect:'coverflow',
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate:0,
    stretch:80,
    depth:350,
    modifier:1,
  }, 
  on:{
    click(event){
      swier.slideTo(this.clickedIndex)
    }
  },
  pagination:{
    el:'.swiper-pagination',
  }
})