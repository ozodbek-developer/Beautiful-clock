    let deg = 6;
    let hr = document.querySelector('.hr');
    let mn = document.querySelector('.mn');
    let sc = document.querySelector('.sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
    let ms = day.getMilliseconds();

    hr.style.transform = `rotateZ(${(hh*30)+(mm/2)}deg`;
    mn.style.transform = `rotateZ(${(mm*6)+(ss/10)}deg`;
    sc.style.transform = `rotateZ(${(ss*6)+(ms/1000*6)}deg`;
})