
    //Ge/tting the div for hands 
    const secondHand = document.querySelector('.second-hand')
    const minuteHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')

    function rotation() {
        const now = new Date();         // Before all get the current date by assigning Variable NOW

        //Making the seconds-hand functioning in css
        const seconds = now.getSeconds();   // firstly; get the seconds from the date by assigning variable SECONDS
        const secondsFraction = seconds /60;   // secondly; convert the seconds to fraction by (/60) assigning variable SECONDS
        const secondsDegree = secondsFraction * 360;   // thirdly; conversion of secondsFraction to degree (*360) by assigning variable SECONDSDEGREE
       
        secondHand.style.transform = `rotate(${secondsDegree}deg)`;   // To make it tick 'we equate the secondHand to secondsDegree'
        

        //Making the min-hand functioning in css
        const minutes = now.getMinutes();
        const minutesFraction = (secondsFraction + minutes) / 60; // The seconds makes minutes, therefore the it ought to be added minutesFraction
        const minutesDegree = minutesFraction * 360;

        minuteHand.style.transform = `rotate(${minutesDegree}deg)`;


        //Making the hour-hand functioning in css
        const hour = now.getHours();
        const hourFraction = (minutesFraction + hour) / 12; // 
        const hourDegree = hourFraction * 360;

        hourHand.style.transform = `rotate(${hourDegree}deg)`;
    }

    // To make setDate run at every seconds, we line this code
    setInterval(rotation, 1000);
