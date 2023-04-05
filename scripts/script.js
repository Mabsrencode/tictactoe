// scroll magic
function splitScroll(){
	const controller = new ScrollMagic.Controller();
	new ScrollMagic.Scene({
		duration: '100%',
		triggerElement: '.about-title',
        triggerHook: 0,
	})
    .setPin('.about-title')
	.addTo(controller);
}
splitScroll();


// gsap scrol trigger
gsap.registerPlugin(ScrollTrigger);
gsap.to(".demo-gallery1",{
  x: 3000,
  duration: 8,
  scrollTrigger: {
    trigger: ".demo-gallery1",
	start: "968px 90%",
	end: "+=1500",
    scrub: 0.5,
    toggleActions: "restart none none none"
  }
});
gsap.to(".demo-gallery2",{
  x: -3000,
  duration: 8,
  scrollTrigger: {
    trigger: ".demo-gallery2",
    start: "968px 90%",
    end: "+=2500",
    scrub: 0.5,
    toggleActions: "restart none none none",
  }
});
gsap.to(".demo-gallery3",{
  x: 3000,
  duration: 8,
  scrollTrigger: {
    trigger: ".demo-gallery3",
    start: "968px 90%",
    end: "+=3500",
    scrub: 0.5,
    toggleActions: "restart none none none",
  }
});
gsap.to(".demo-text",{
  x: -4300,
  duration: 8,
  scrollTrigger: {
    trigger: ".demo-text",
    start: "968px 90%",
    end: "968px 0%",
    scrub: 0.5,
    toggleActions: "restart none none none"
  }
});
gsap.registerPlugin(ScrollTrigger);
const scrolldownreveal = gsap.utils.toArray('.let-text, .scroll-down');
scrolldownreveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: "968px 70%",
    end: "+=5800"
  })
});
// gsap.registerPlugin(ScrollTrigger);
// const aboutcontainer = gsap.utils.toArray('.footer-container');
// aboutcontainer.forEach((text, i) => {
//   ScrollTrigger.create({
//     trigger: text,
//     toggleClass: 'active',
//     start: "968px 90%",
//     end: "+=5400"
//   })
// });
// gsap.registerPlugin(ScrollTrigger);
// const aboutme = gsap.utils.toArray('.about .about-me-text-h2,.about .reveal-text-first');
// aboutme.forEach((text, i) => {
//   if(window.matchMedia("min-width: 1600px")){
//     ScrollTrigger.create({
//     trigger: text,
//     toggleClass: 'active',
//     start: "3400px 90%"
//     // end: "+=2400"
//     // return: 0
//   });
//   }
//   // if(window.matchMedia("min-width: 1280px")){
//   //   ScrollTrigger.create({
//   //     trigger: text,
//   //     toggleClass: 'active',
//   //     start: "3400px 90%",
//   //     end: "+=2400",
//   //     markers: true
//   //   });
//   // }
//   // if(window.matchMedia("(max-width: 1280px)")){
//   //   ScrollTrigger.create({
//   //     trigger: text,
//   //     toggleClass: 'active',
//   //     start: "1000px 90%",
//   //     end: "+=1800"
//   //   })
//   // }
//   // if(window.matchMedia("(max-width: 1024px)")){
//   //   ScrollTrigger.create({
//   //     trigger: text,
//   //     toggleClass: 'active',
//   //     start: "800px 90%",
//   //     end: "+=1500"
//   //   })
//   // }
//   // if(window.matchMedia("(max-width: 700px)")){

//   // }
// });
// gsap.registerPlugin(ScrollTrigger);
// const image = gsap.utils.toArray('.ren-image-child');
// image.forEach((img, i) => {
//   if(window.matchMedia("(min-width: 1446px")){
//     ScrollTrigger.create({
//     trigger: img,
//     toggleClass: 'active', // last work
//     start: "3400px 90%",
//     end: "+=2000"
//   });
  
//   }
//   // if(window.matchMedia("(max-width: 1280px)")){
//   //   ScrollTrigger.create({
//   //     trigger: img,
//   //     toggleClass: 'active',
//   //     start: "1000px 90%",
//   //     end: "+=1800"
//   //   });
//   // }
//   // if(window.matchMedia("(max-width: 1024px)")){
//   //   ScrollTrigger.create({
//   //     trigger: img,
//   //     toggleClass: 'active',
//   //     start: "800px 90%",
//   //     end: "+=1800"
//   //   });
//   // }
  
// });

// gsap.registerPlugin(ScrollTrigger);
// const reavelparagraph = gsap.utils.toArray('.about .reveal-text-first-paragraph');
// reavelparagraph.forEach((text, i) => {
//   if(window.matchMedia("(min-width: 1446px)")){
//     ScrollTrigger.create({
//     trigger: text,
//     toggleClass: 'active',
//     start: "3500px 90%",
//     end: "+=1400"
//   });
  
//   }
//   // if(window.matchMedia("(max-width: 1280px)")){
//   //   ScrollTrigger.create({
//   //     trigger: text,
//   //     toggleClass: 'active',
//   //     start: "1000px 90%",
//   //     end: "+=1500"
//   //   });
//   // }
  
// });
// gsap.registerPlugin(ScrollTrigger);
// const abouttextsecond = gsap.utils.toArray('.about .reveal-text-second');
// abouttextsecond.forEach((text, i) => {
//   if(window.matchMedia("(min-width: 1446px)")){
//     ScrollTrigger.create({
//     trigger: text,
//     toggleClass: 'active',
//     start: "3900px 90%",
//     end: "+=1200"
//   })
//   }
//   // if(window.matchMedia("(max-width: 1280px)")){
//   //   ScrollTrigger.create({
//   //     trigger: text,
//   //     toggleClass: 'active',
//   //     start: "1500px 90%",
//   //     end: "+=1200"
//   //   })
//   // }
  
  
// });
// gsap.registerPlugin(ScrollTrigger);
// const abouttextsecondparagraph = gsap.utils.toArray('.about .reveal-text-second-paragraph');
// abouttextsecondparagraph.forEach((text, i) => {
//   if(window.matchMedia("(min-width: 1446px)")){
//     ScrollTrigger.create({
//     trigger: text,
//     toggleClass: 'active',
//     start: "4000px 90%",
//     end: "+=1300"
//   })
//   }
//   // if(window.matchMedia("(max-width: 1280px)")){
//   //   ScrollTrigger.create({
//   //     trigger: text,
//   //     toggleClass: 'active',
//   //     start: "1700px 90%",
//   //     end: "+=1200"
//   //   })
//   // }
  
// });
// gsap.registerPlugin(ScrollTrigger);
// const skillsheader = gsap.utils.toArray('.skills-header');
// skillsheader.forEach((text, i) => {
//   ScrollTrigger.create({
//     trigger: text,
//     toggleClass: 'active',
//     start: "5200px 90%",
//     end: "+=1950"
//   })
// });
//scroll up click
// $(".scroll-up").click(function() {
//   $('html, body').animate({
//       scrollTop: parseInt($("#").offset().top)
//   }, 400);
// });
// about projects
// gsap.registerPlugin(ScrollTrigger);

//         const tl = gsap.timeline({
//             scrollTrigger: {
//             trigger: '.img',
//             start: "1000px 90%",
//             end: "+=1100px",
//             scrub: true
//             }
//         })
//         .to('.img', {
//             stagger: 0.1,
//             y: -800,
//             scrub: true
//         });
//         gsap.registerPlugin(ScrollTrigger);
//         const projectsbanner = gsap.utils.toArray('.projects-banner-header');
//         projectsbanner.forEach((text, i) => {
//           ScrollTrigger.create({
//             smooth: 2,
//             trigger: text,
//             toggleClass: 'active',
//             start: "900px 90%",
//             end: "+=2000"
//           })
//         });

/*$('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });*/













