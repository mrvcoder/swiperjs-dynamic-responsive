# swiperjs-dynamic-responsive

with using this function in your code you can make the sliders that created with [swiper.j](https://swiperjs.com/) from this 👇.


https://user-images.githubusercontent.com/49777789/182134303-d517c613-0747-46ac-bede-d0fb615697d0.mp4


to this :) 👇


https://user-images.githubusercontent.com/49777789/182134278-2732dfdb-e7d6-44d1-9422-3a68e19a9193.mp4



## how to use function

lets say that you have this code to create slider 

**html code :**
```
<div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
      </div>
    </div>
```

**JavaScript :**
```
export function MySlider(){

  let swiper = new Swiper(".mySwiper", {
      slidesPerView:'auto',
      spaceBetween: 50,
    });

}
```

to use this code you should first add our function in your project then you should change the previues code to this :

```
export function MySlider(){

  let [space , max] = MakeResponsiveSliders(document.querySelector('.podcasts_foryou_sliders'),
  {
    margin:20
  }
  )

  let swiper = new Swiper(".podcasts_foryou_sliders", {
    slidesPerView:'auto',
    spaceBetween: space,
    centeredSlides: false,
      navigation: {
        nextEl: ".podcasts_foryou_sliders-button-next",
        prevEl: ".podcasts_foryou_sliders-button-prev",
      },
    });

  swiper.snapGrid[swiper.snapGrid.length-1]=swiper.snapGrid[swiper.snapGrid.length-1]+space

}
```
in this code **MakeResponsiveSliders** is our function and you should pass some parameters
- #1 first parameter is your slider container html obj
- #2 second parameter is an object for seting some minimal settings..

for now the minimal setting object only gets **margin** in **px** .

