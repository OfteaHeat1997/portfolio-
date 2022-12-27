  setInterval(setClock, 1000)

  const secondHand = document.querySelector('.secondHand')
  const minutesHand = document.querySelector('.minutesHand')
  const hoursHand = document.querySelector('.hoursHand.')
  
   function setClock(){
    const currentDate = new Date()
    const secondShow = currentDate.getSeconds()/ 60
    const minuteShow = (secondShow + currentDate.getMinutes()) / 60
    const hourShow = (minuteShow + secondShow + currentDate.getHours())/ 12
   
    }

    function setRotation(element, rotationClock){
     element.style.setProperty('--rotation', rotationClock * 360)
    }
    
    setClock()


 

// const time ={
//     second:0,minute:0,hours:0
// };
//  let interval = setInterval(setDate, 1000)
//  var d = new Date();


//     function setDate() {
//         d= new Date();
//         second = d.getSecond();
//         const secondsArrow = ((seconds / 60) * 360) + 90;
//         secondHand.style.transform = "rotate(${secondsArrow}deg)";
//         minute = d.getMinutes();
//         const minutesArrow = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
//         minsHand.style.transform = "rotate(${minutesArrow}deg)";
//         hours = d.getHours();
//         document.getElementById("second-hand").style.traform = "rotate(" + second + "deg)";
        
//     }
