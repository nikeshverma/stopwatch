let count =0;
let minute=0;
let seconds=0;
let milliseconds=0;
let timeRunning=false;

let startTimer=()=>
{
	count++;
	minute = Math.floor((count/100)/60);
	seconds = Math.floor((count/100)-(minute*60));
	milliseconds = Math.floor(count-(seconds*100)-(minute*6000));
	document.querySelector('#min').innerText=addingZero(minute);
	document.querySelector('#sec').innerText=addingZero(seconds);
	document.querySelector('#m-sec').innerText=addingZero(milliseconds);
};

//start button
interval =null;
let startButton = document.querySelector('#st-btn');
startButton.addEventListener('click',function(){
	startTimer();
	if(!timeRunning){
		interval = setInterval(startTimer,10);
		timeRunning=true;
	}
});
//adding zero from number

addingZero=(time)=>
{
	if(time<=9){
		return '0'+ time;
	}
	else {
		return time;
	}
}

//stop button

stopButton=document.querySelector('#sp-btn');
stopButton.addEventListener('click',function()
{
	if(timeRunning){
		clearInterval(interval);
		timeRunning=false;
	}
});

//reset button

resetButton=document.querySelector('#rs-btn');
resetButton.addEventListener('click',function()
{
	clearInterval(interval);
	minute=0;
	seconds=0;
	milliseconds=0;
	document.querySelector('#min').innerText='00';
	document.querySelector('#sec').innerText='00';
	document.querySelector('#m-sec').innerText='00';
	timeRunning=false;
})

