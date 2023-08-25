const hourEle = document.getElementById('hour');
const minEle = document.getElementById('minute');
const secEle = document.getElementById('second');
const ampmEle = document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours();    console.log(h);
    let m = new Date().getMinutes();  console.log(m);
    let s = new Date().getSeconds();  console.log(s);
    let amOrPm;
    amOrPm = h >= 12 ? 'PM' : 'AM';   console.log(amOrPm);

    hourEle.innerText= h;
    minEle.innerText = m;
    secEle.innerText = s;
    ampmEle.innerText = amOrPm;

    setTimeout(updateClock,1000);
}
updateClock();