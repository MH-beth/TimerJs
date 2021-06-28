    const currentTime = () =>{
        let d = new Date();
    	    // setting the current time !
   	 	let h = d.getHours();
    	let m = d.getMinutes();
    	let s = d.getSeconds();
    	if(h <10){
    		h = '0' + h;
    	}
    	if(m<10){
    		m = '0'+m;
    	}
    	if(s <10){
    		s = '0'+s;
    	}
    // setting the time shower and all stuff
    	let curentTime = `${h}:${m}:${s}`;
        console.log(curentTime);
        () => {
            let up = document.getElementById("timeShow");
            up.textContent = curentTime;
        }

    }
    currentTime();

const timer = () =>{
    let d = new Date();
    let time = document.userTime.timerFinish.value; 
    // setting the date event
    let dEvent = new Date(`${time}`);
    let totalSeconds = (dEvent - d)/1000;

    if(totalSeconds <=0){
        document.getElementById('statue').textContent = `You can\'t chose this past time`;
    }
    else if(time == 0){
        document.getElementById('statue').textContent = `Fill the timer's end value`;
    }
    else {
        const Show = (totalSeconds) =>{
            let days = Math.trunc(totalSeconds /(3600*24));
            let hours = Math.trunc((totalSeconds - (days*(3600*24)))/3600);
            let minutes = Math.trunc((totalSeconds - (days*(3600*24)+hours*(3600)))/60);
            let seconds = Math.trunc((totalSeconds - (days*(3600*24)+hours*(3600)+minutes*(60))));
            if(days < 10){
                days = '0'+days
            }
            if(hours < 10){
                minutes  = '0'+minutes;
            }
            if(seconds < 10){
                seconds = '0'+seconds
            };
            let time = `${days} J ${hours} H ${minutes}M ${seconds}S`;
            document.getElementById('timer').textContent = `${time}`;
            if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
            	document.getElementById('statue').textContent = 'Time Out !';
            }
        }
        document.getElementById('statue').style='display:none';
        Show(totalSeconds);
        setTimeout(timer, 100);
    }
}
const reset = () =>{
    window.location.reload();
}
