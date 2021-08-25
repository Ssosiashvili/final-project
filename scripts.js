// for slider section one.

let slides = [
    'images/florida/florida-1.png',
    'images/florida/florida-2.png',
    'images/florida/florida-3.png',
];
let slider = document.querySelector('.slides');
let currentSlide = 0;

function changeSlides() {
    if(currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    update();
}

function update () {
    slider.src = slides[currentSlide];
}

update();

setInterval(changeSlides,3000);


//for progress persents section two

let html = document.querySelector('html');
let progress = document.querySelectorAll('.progress');
let currentProgress = 0;

window.addEventListener('scroll', function() {
    for( let i =0; i <progress.length; i++ ){
        if(html.scrollTop + window.innerHeight > progress[i].offsetTop) {
            progress[i].classList.add('visible')
        }else{
            progress[i].classList.remove('visible')
        }
        currentProgress++; 
    }
});


//for slider section 4

let quotImages = [
    'images/iroh.jpeg',
    'images/oberyn.jpeg',
    'images/greg.jpeg',
];

let quotNames = [
    'Uncle Iroh',
    "Oberyn Martell",
    'Gregory (Greg)',
]

let professions = [
    'Fire Bender',
    'Red Viper',
    'otgw character',

]

let bullets = document.querySelectorAll('.button');
let slideImage = document.querySelector('#forImage'); 
let quotes = document.querySelectorAll('.quotes-line');
let personName = document.querySelector('.personName'); 
let profession = document.querySelector('.profession');


for (let i = 0; i < bullets.length; i++){
    bullets[i].addEventListener("click", function(){
        console.log('done'+ i); 
        personName.innerHTML = quotNames[i];
        profession.innerHTML = professions[i];
        removeClass();
        switchContentTo(i);
    })
}

function switchContentTo(newIndex) {
    let currentContent = newIndex;
    slideImage.src = quotImages[currentContent];
    quotes[currentContent].classList.remove('hide')
    quotes[currentContent].classList.add('show')
}

function removeClass () {
    for (let i=0; i < quotes.length; i++){
        quotes[i].classList.remove('show')
        quotes[i].classList.add('hide') 
    }
}

// for filters section 5
let filters = document.querySelectorAll('.projectList');
let projectList = document.querySelectorAll('.projectsImg');
let ClearFilters = document.querySelector('.all_list');


for (let y = 0; y < filters.length; y++){
    filters[y].addEventListener("click", function(){
        console.log('done'+ y); 
        remClass ()
        showOne(y)
    })
}

function remClass () {
    for (let x=0; x < projectList.length; x++){
        projectList[x].classList.remove('show')
        projectList[x].classList.remove('maximize')
        projectList[x].classList.add('hide')
    }
}

function showOne(newIndex) {
    let currentProject = newIndex;
    projectList[currentProject].classList.remove('hide')
    projectList[currentProject].classList.add('show')
    projectList[currentProject].classList.add('maximize')
}
ClearFilters.addEventListener("click", function() {
    for (let i=0; i < projectList.length; i++){
        projectList[i].classList.remove('hide')
        projectList[i].classList.remove('maximize')
    }
})

// for contacts section

document.querySelector('form').addEventListener('submit', function(e) {

  let email = document.getElementById('email').value;
  let website = document.getElementById('website').value;
  let message = document.getElementById('message').value;
  let name = document.getElementById('name1').value;


  sendRequest(name, email, website, message)
  e.preventDefault();
});



function sendRequest(name, email, website, message) {
  return fetch('https://ucha.ge/contact-form/submit.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'action=send&name='+encodeURIComponent(name)+'&email='+encodeURIComponent(email)+
    ' & website='+ encodeURIComponent(website)+'&message=' + encodeURIComponent(message)
  })
 .then(function(r) {
    return r.json();
  });
}
