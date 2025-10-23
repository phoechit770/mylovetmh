// 1. Home စာမျက်နှာရှိ စာသားကို အလိုအလျောက်ရေးသားခြင်း (Typing Effect)
const textToType = "သဲလေး ထာဝရ ချစ်ကြမယ်။";
const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // စာလုံးတစ်လုံးချင်းစီ ပေါ်လာမယ့်အချိန် (100ms)
    } else {
        // စာဆုံးသွားပါက Heart Icon ကို Fade-in လုပ်ရန်
        document.querySelector('.heart-beat-icon').style.opacity = 1;
    }
}

// 2. အသည်းကလာသော စာ (Special Message)
const loveMessage = "ချစ်ရတဲ့သူ... မင်းက ငါ့ဘဝရဲ့ အလှဆုံးလက်ဆောင်ပါ။ မင်းရဲ့ အပြုံးလေးတွေက ငါ့ကို အသက်ရှင်စေတယ်။ ဒီ website လေးကို မင်းအတွက် အမှတ်တရတွေ၊ ငါ့ရဲ့ အချစ်တွေနဲ့ အတူတူ ဖန်တီးထားတယ်။ ငါတို့ရဲ့ ချစ်ခြင်းမေတ္တာတွေဟာ အချိန်တိုင်း ပိုမိုခိုင်မြဲနေပါစေ။ ငါ မင်းကို အရမ်းချစ်တယ်၊ အမြဲတမ်းချစ်နေမယ်။ မင်းရဲ့ဘေးမှာ အမြဲတမ်းရှိနေခွင့်ပြုပါ အသည်းလေး။";
const messageElement = document.getElementById('special-message');
messageElement.textContent = loveMessage;


// 3. အသည်းပုံများ ပျံဝဲခြင်း (Floating Hearts Effect)
const heartContainer = document.getElementById('heart-container');
const heartsCount = 20; // ပျံဝဲမယ့် အသည်းပုံအရေအတွက်

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '<i class="fas fa-heart"></i>'; // Font Awesome Heart Icon

    // Random Position and Size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 4 + 5 + 's'; // 5s to 9s
    heart.style.animationDelay = Math.random() * 5 + 's';

    heartContainer.appendChild(heart);

    // Animation ပြီးသွားတဲ့အခါ heart ကို ဖျက်ပစ်ပြီး memory မပြည့်အောင်လုပ်ပါ
    heart.addEventListener('animationend', () => {
        heart.remove();
        createHeart(); // အဆက်မပြတ်ပေါ်နေအောင် ပြန်ခေါ်ပါ
    });
}

function startHeartAnimation() {
    for (let i = 0; i < heartsCount; i++) {
        setTimeout(createHeart, i * 500); // 0.5 စက္ကန့်ခြားပြီး heart တွေ စတင်ပေါ်စေ
    }
}

// 4. Image Pop-up Functionality
const modal = document.getElementById("image-popup");
const modalImg = document.getElementById("popup-image");

function showPopup(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closePopup() {
    modal.style.display = "none";
}

// 5. Initialize Functions
window.onload = function() {
    typeText(); // Typing effect စတင်ရန်
    startHeartAnimation(); // Floating Hearts effect စတင်ရန်
};
// 6. Scroll ဖြင့် ပေါ်လာသော Animation (Timeline အတွက်)
const timelineItems = document.querySelectorAll('.fade-in-scroll');

const checkVisibility = () => {
    const windowHeight = window.innerHeight;
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;

        // အရာဝတ္ထု၏ အပေါ်ပိုင်းသည် window အောက်တွင် ရှိနေပြီး
        // အောက်ပိုင်းသည် window အပေါ်တွင် ရှိနေပါက (မြင်နိုင်သော ဧရိယာထဲရောက်ပါက)
        if (itemTop < windowHeight - 100 && itemBottom > 0) {
            item.classList.add('visible');
        } else {
            // နောက်တစ်ကြိမ် မြင်ရဖို့အတွက် ပြန်ဖျောက်ထားပေးနိုင်သည်
            // item.classList.remove('visible'); 
        }
    });
};

// Scroll လုပ်တိုင်း Animation စစ်ဆေးခြင်း
window.addEventListener('scroll', checkVisibility);
// စတင်ဖွင့်ဖွင့်ချင်း တစ်ကြိမ် စစ်ဆေးခြင်း
window.addEventListener('load', checkVisibility);

// 7. Initialize Functions (Update window.onload)
// window.onload ကို အစားထိုးပါ သို့မဟုတ် functions များကို ထပ်ထည့်ပါ
window.onload = function() {
    typeText(); // Typing effect စတင်ရန်
    startHeartAnimation(); // Floating Hearts effect စတင်ရန်
    checkVisibility(); // Scroll Animation စတင်ရန်
};
// 10. Countdown Timer Functionality
// Surprise Date ကို ဒီနေရာမှာ သတ်မှတ်ပါ (ဥပမာ: 2026 ခုနှစ်၊ ဖေဖော်ဝါရီလ 14 ရက်၊ မနက် 10:00 နာရီ)
const targetDate = new Date("Feb 14, 2026 10:00:00").getTime(); 

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // အချိန် ရေတွက်ခြင်း
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML မှာ ပြသခြင်း
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // Countdown ပြီးဆုံးသွားသောအခါ
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("timer").style.display = 'none';
        document.querySelector(".countdown-title").innerHTML = "အချစ်ဆုံးအတွက် Surprise အကြီးကြီး ပေါ်လာပါပြီ!";
        document.getElementById("countdown-finished-message").innerHTML = "💖 Happy Surprise Day! ငါမင်းကို ပေးချင်တဲ့ လက်ဆောင်က... [ဒီနေရာမှာ သင်ပေးမယ့် လက်ဆောင် သို့မဟုတ် Proposal စာသားကို ထည့်ပါ] 💖";
        
        // ပြီးဆုံးချိန်တွင် အသည်းပုံ animation ကို ပိုမြန်အောင် လုပ်ပေးခြင်း
        document.getElementById("countdown-finished-message").style.animation = 'flashHeart 0.5s infinite alternate';
    }
}, 1000);// script.js (သို့) index.html ထဲက <script> tag ရဲ့ အောက်ဆုံးမှာ ထည့်ပါ
// ----------------------------------------------------------------------

// 1. Love Start Day Toggle Functionality
const startDayHeading = document.getElementById('start-day-heading');
const calendarArea = document.getElementById('calendar-area');

if (startDayHeading && calendarArea) {
    startDayHeading.addEventListener('click', () => {
        calendarArea.classList.toggle('hidden');
        
        if (!calendarArea.classList.contains('hidden')) {
            setTimeout(() => {
                calendarArea.classList.add('visible');
            }, 10);
            startDayHeading.classList.remove('shake-flash-effect');
        } else {
            calendarArea.classList.remove('visible');
            startDayHeading.classList.add('shake-flash-effect');
        }
    });
}

// 2. Heart Explosion Animation Function (Syntax Error ပြင်ပြီးသား Code)
function triggerHeartExplosion(event) {
    const explosionArea = document.getElementById('explosion-area');
    const particlesCount = 30; 
    
    const calendarBox = document.getElementById('love-start-calendar');
    const rect = calendarBox.getBoundingClientRect();
    const clickX = rect.left + rect.width / 2;
    const clickY = rect.top + rect.height / 2 + window.scrollY;

    for (let i = 0; i < particlesCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = '💖'; 
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';

        heart.style.left = clickX + 'px';
        heart.style.top = clickY + 'px';

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 150 + 50; 
        const translateX = Math.cos(angle) * distance;
        const translateY = Math.sin(angle) * distance;

        // Syntax မှန်ကန်ရန် ပြင်ဆင်ပြီးသား
        

        explosionArea.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000); 
    }
}

// [အရေးကြီး] Initialization (window.onload/DOMContentLoaded) ကို အပ်ဒိတ်လုပ်ပါ
// သင်၏ မူလ window.onload function ကို ရှာပြီး၊ ၎င်းအတွင်းတွင် ဤ Line ကို ထပ်ထည့်ပါ။

/*
ဥပမာ:
window.onload = function() {
    typeText();
    startHeartAnimation();
    // ... (ရှိပြီးသား Code များ) ... 

    // NEW: Calendar Area ကို စစချင်း ဖျောက်ထားခြင်း
    const calendarArea = document.getElementById('calendar-area');
    if (calendarArea) {
        calendarArea.classList.add('hidden');
    }
};
*/
