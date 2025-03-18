const result = document.querySelector('.timer');
let time = 0;
let interval = null;

const handleShowTime = (time)=>{
   let seconds=time%60;
   if(seconds<10){
    seconds="0"+seconds;
   }
   let minutes= Math.floor(time/60);
   if(minutes<10){
    minutes="0"+minutes;
   }
   let hours = Math.floor(time/(60*60));
   if(hours<10){
    hours="0"+hours;
   }
   return `${hours}:${minutes}:${seconds}`
}
const handleStart = () => {
    if(interval) clearInterval(interval);
    interval = setInterval(() => {
        time += 1;
        result.innerHTML = handleShowTime(time);
    }, 1000)
}

const handleStop = ()=>{
    if(interval) clearInterval(interval);
}

const handleReset = ()=>{
    if(interval) clearInterval(interval);
    time=0;
    result.innerHTML="00:00:00"
}