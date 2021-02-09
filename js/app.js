let album = [
    {
        src: 'img/udon/udon_001.jpg',
        msg: '焼うどん　くろ'
    },
    {
        src: 'img/udon/udon_002.jpg',
        msg: 'うどん屋　ぼた山'
    },
    {
        src: 'img/udon/udon_003.jpg',
        msg: '筑後うどん　まる'
    },
    {
        src: 'img/udon/udon_004.jpg',
        msg: '讃岐うどん　博多や'
    },
    {
        src: 'img/udon/udon_005.jpg',
        msg: '花立花うどん'
    },
    {
        src: 'img/udon/udon_006.jpg',
        msg: 'よもぎ家'
    },
    {
        src: 'img/udon/udon_007.jpg',
        msg: '松野'
    },
    {
        src: 'img/udon/udon_008.jpg',
        msg: 'たぬき食堂'
    },
    {
        src: 'img/udon/udon_009.jpg',
        msg: '大黒屋'
    },
    {
        src: 'img/udon/udon_010.jpg',
        msg: 'こいたん'
    }
];

let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

thumbFlame.addEventListener('click', function (event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});
