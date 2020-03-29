
const MENU = document.getElementById('menu');
const CLOSE_BUTTON = document.getElementById('close-btn');


//активное меню -------------------------------------------------------
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active-menu'));
    event.target.classList.add('active-menu'); //получаем эл-т по нажатию на которы была вызвана функция
})

//event.target; - получаем эл-т по нажатию на который была вызвана функция


//черный экран---------------------------------------------------------
const SCREEN_VERT = document.getElementById('screen-black-vertical');
const SCREEN_GOR = document.getElementById('screen-black-gorizontal');
const PHON_V = document.getElementById('phone-v');
const PHON_G = document.getElementById('phone-g');

PHON_V.addEventListener('click', () => {
    SCREEN_VERT.classList.remove('hidden-screen');
})

SCREEN_VERT.addEventListener('click', () => {
    SCREEN_VERT.classList.add('hidden-screen');
})

PHON_G.addEventListener('click', () => {
    SCREEN_GOR.classList.remove('hidden-screen');
})

SCREEN_GOR.addEventListener('click', () => {
    SCREEN_GOR.classList.add('hidden-screen');
})

//slider--------------------------------------------------------------

let items = document.querySelectorAll('.itemm');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.arrow-left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.arrow-right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

//работа с блоком партфолио -------------------------------------------

const FILTER_BUTTON = document.getElementById('filter-button'); //контейнер с кнопками
const PARTFOLIO = document.getElementById('image-portfolio'); // div в котором лежат картинки
//let IMG_PARTFOLIO = PARTFOLIO.querySelectorAll('img'); //массив из картинок


FILTER_BUTTON.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName === 'A') {

            let IMG_PARTFOLIO = PARTFOLIO.querySelectorAll('img');
            let NEW_IMG_PARTFOLIO = [];
            let fragment = null;
            for (let j=0; j < IMG_PARTFOLIO.length; j++) {
                NEW_IMG_PARTFOLIO.push(IMG_PARTFOLIO[j]);
                console.log();
            }
            MixImgPartfolio(NEW_IMG_PARTFOLIO);     
    }
   
})


const MixImgPartfolio = (NEW_IMG_PARTFOLIO) => {

    let MIX_NEW_PARTFOLIO = [];
    //let Element_MIX_NEW_PARTFOLIO = NEW_IMG_PARTFOLIO[0];
    for (let t=0; t < NEW_IMG_PARTFOLIO.length-1; t++) {
        MIX_NEW_PARTFOLIO[t] = NEW_IMG_PARTFOLIO[t+1];
    }
    MIX_NEW_PARTFOLIO[NEW_IMG_PARTFOLIO.length-1] = NEW_IMG_PARTFOLIO[0];
    fragment = document.createDocumentFragment();  
    for (let i=0; i < NEW_IMG_PARTFOLIO.length; i++) {
        fragment.appendChild(MIX_NEW_PARTFOLIO[i]); 
        console.log(MIX_NEW_PARTFOLIO[i]);
      }
     PARTFOLIO.appendChild(fragment);
     console.log(fragment);
}

//добавление бордера выбранной картинке ---------------------------

PARTFOLIO.addEventListener('click', (event) => {
    PARTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('active-img-partfolio'));
    event.target.classList.add('active-img-partfolio'); //получаем эл-т по нажатию на которы была вызвана функция
})

//активация кнопок в партфолио ----------------------------------

FILTER_BUTTON.addEventListener('click', (event) => {
    FILTER_BUTTON.querySelectorAll('a').forEach(el => el.classList.remove('active-button'));
    event.target.classList.add('active-button');
})

// форма - всплывающее окно --------------------------------------------
const BUTTON = document.getElementById('btn');

BUTTON.addEventListener('click', (e) => {
    // e.preventDefault();
    
    const subject = document.getElementById('subject').value.toString();
    const describe = document.getElementById('describe').value.toString();
    if (document.getElementById('input-name').checkValidity() && document.getElementById('input-email').checkValidity()) {
        e.preventDefault();
        if (subject === '') {
            document.getElementById('result-subject').innerText = 'Без темы';
        } else {
            document.getElementById('result-subject').innerText = 'Тема: '+ subject;
        }
        if (describe === '') {
            document.getElementById('result-describe').innerText = 'Без описания';
        } else {
            document.getElementById('result-describe').innerText = 'Описание: ' + describe;
        }
          
        document.getElementById('message-block').classList.remove('hidden');
    }
    

})

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result-subject').innerText = '';
    document.getElementById('result-describe').innerText = '';
    document.getElementById('subject').value = '';
    document.getElementById('describe').value = '';
    document.getElementById('input-name').value = '';
    document.getElementById('input-email').value = '';
    document.getElementById('message-block').classList.add('hidden');
})


// document.addEventListener('scroll', (event) => {
//     console.log(event);
// });

// document.addEventListener('', (event) => {
//     console.log(event.target);
//     if (event.target.className === 'hash') {
//         console.log(event.target);
//     }
// })

