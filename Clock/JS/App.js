let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getClock() {
     let getTimeObject = new Date();

     let setTime = document.getElementsByTagName('span');
     let hrs = Number(getTimeObject.getHours()) - 12;
     if(getTimeObject.getHours()<=12) {
          setTime[0].innerText = `${getTimeObject.getHours()} : `;
     } else {
          setTime[0].innerText = `${hrs} : `;
     }
     setTime[1].innerText = `${getTimeObject.getMinutes()} : `;
     setTime[2].innerText = `${getTimeObject.getSeconds()} `;
     setTime[3].innerText = (getTimeObject.getHours()<12) ? "AM" : "PM";

     let setDay = document.getElementsByClassName('day')[0];
     setDay.innerText = day[getTimeObject.getDay()];
     
     let setD = document.getElementsByTagName('p');
     setD[0].innerText = getTimeObject.getDate();
     setD[1].innerText = month[getTimeObject.getMonth()];
     setD[2].innerText = getTimeObject.getFullYear();
}