const slideWrapper = document.querySelector('.slide-wrapper');
const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slideshow-container');
const slideWidth = 350;
const slideCount = slides.length;
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    slideWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 3000);

function showalert(num) {
    if (num == 1) {
        message = "분류: 문화/예술/공연\n이름: 뭉게구름\n회장: 유의택\n대표연락처:010-0000-0000\n소개:창작음악동아리";
    } else if (num == 2) {
        message = "분류: 체육\n이름: 바람 소리\n회장: 이태준\n대표연락처:010-0000-0000\n소개:패러글래이딩동아리";
    } else if (num == 3) {
        message = "분류: 학술/교양\n이름: 책먹는 고양이\n회장: 홍길동\n대표연락처:010-0000-0000\n소개:독서동아리";
    } else if (num == 4) {
        message = "분류: 문화/예술/공연\n이름: 현여울\n회장: 장태석\n대표연락처:010-0000-0000\n소개:현악기음악동아리";
    } else if (num == 5) {
        message = "분류: 문화/예술/공연\n이름: 모노로그\n회장: 홍길동\n대표연락처:010-0000-0000\n소개:향수동아리";
    } else if (num == 6) {
        message = "분류: 학술/교양\n이름: Farm System\n회장: 서희찬\n대표연락처:010-0000-0000\n소개:IT동아리";
    } else if (num == 7) {
        message = "분류: 체육\n이름: 터스커스\n회장: 최병옥\n대표연락처:010-0000-0000\n소개:미식축구동아리";
    } else if (num == 8) {
        message = "분류: 체육\n이름: 무법\n주장: 홍길동\n대표연락처:010-0000-0000\n소개:공수도동아리";
    }
    alert(message);
}