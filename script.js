const w_key = document.querySelector(`meta[name="W-API-KEY"`).content;
document.querySelector(`meta[name="W-API-KEY"`).remove()
const t_key = document.querySelector(`meta[name="T-API-KEY"]`).content;
document.querySelector(`meta[name="T-API-KEY"`).remove()

const inp = document.getElementById("inp");
const subm = document.querySelector(".search");
const temps = document.querySelector(".temp");
const citis = document.querySelector(".city");
const timesis = document.querySelector(".time");
const cloud = document.querySelector(".clod");
const humidity = document.querySelector(".hum");
const wind = document.querySelector(".win");
const opvl = document.querySelector(".opvl");
const op = document.querySelector(".op");
const kolkata = document.querySelector(".Kolkata");
const tokyo = document.querySelector(".Tokyo");
const condition = document.querySelector(".cond");
const Manchester = document.querySelector(".Manchester");
const california = document.querySelector(".California");
const icon = document.querySelector(".im");
const rel = document.querySelector(".h");
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const body = document.body;
let query = "";
let report;
let types = {
    Clouds:"Cloudy",
    Rain : "Rainy",
    Clear :"Sunny",
    Dizzle:"Light rain",
    Thunderstorm:"Stormy",
    Snow:"Snowy",
    Mist :"Misty",
    Fog :"Foggy",
    Tornado :"Tornado",
    Squall : "Windy",
    Smoke:"Smokey",
    Haze:"Hazy"
}
let icons={
    Clouds:"assets/cloudy.svg",
    Dizzle:"assets/dizzle.svg",
    Clear:"assets/sunny.svg",
    Tornado:"assets/tornado.svg",
    Mist:"assets/mist.svg",
    Fog:"assets/foggy.svg",
    Smoke:"assets/foggy.svg",
    Squall:"assets/windy.svg",
    Rain:"assets/rainy.svg",
    Thunderstorm:"assets/stormy.svg",
    Snow:"assets/snowy.svg",
    Haze:"assets/hazy.svg"
}
let back={
    Clouds:"assets/cloudy.webp",
    Clear:"assets/sunny-back.avif",
    Mist:"assets/mist-foggy.jpeg",
    Fog:"assets/mist-foggy.jpeg",
    Rain:"assets/rainy-back.avif",
    Dizzle:"assets/rainy-back.avif",
    Thunderstorm:"assets/storm-back.webp",
    Tornado:"assets/storm-backy.webp",
    Snow:"assets/cold.jpeg",
    Smoke:"assets/smokey.avif",
    Squall:"assets/squall.webp",
    Haze:"assets/hazy-back.jpg"
}
function def(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${w_key}`;
     (async function main(){
         let response =  await fetch(url);
         report =await response.json();
        
        if(report.clouds.all>50){
            back={
                Clouds:"assets/cloudy.webp",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            icons={
                Clouds:"assets/full-cloud.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Snow:"assets/snowy.svg",
                Smoke:"assets/foggy.svg",
                Haze:"assets/hazy.svg"

            }
            types = {
                Clouds:"Cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"
            }
        }
        else{
            types = {
                Clouds:"Partly cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"
            }
            icons={
                Clouds:"assets/cloudy.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Snow:"assets/snowy.svg",
                Smoke:"assets/foggy.svg",
                Haze:"assets/hazy.svg"

            }
            back={
                Clouds:"assets/partly-cloudy.jpeg",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
        }
        temps.innerText = `${Math.floor(report.main.temp)}°c`;
        citis.innerText=`${report.name}`;
        cloud.innerText=`${report.clouds.all}%`
        humidity.innerText=`${report.main.humidity}%`;
        wind.innerText=`${report.wind.speed} km/h`;
        let x = report.weather[0].main;
        condition.innerText=`${types[x]}`
        body.style.backgroundImage=`url(${back[x]})`;
        icon.src= `${icons[x]}`;
        if("rain" in report){
            opvl.innerText=`${report.rain["1h"]} mm`;
        }
        else if("snow" in report){
            op.innerText=`Snow`;
            opvl.innerText=`${report.snow["1h"]} mm`
        }
        else{
            op.innerText=`Rain`;
            opvl.innerText="00 mm";
        }
        const url2 =`https://api-bdc.net/data/timezone-by-location?latitude=${report.coord.lat}&longitude=${report.coord.lon}&key=${t_key}`;
        (async function time(){
            let r = await fetch(url2);
            let times =await r.json();
            let timess = new Date(`${times.localTime}`);
            if(timess.getMinutes().toString().length==1&&timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getMinutes().toString().length==1){
                timesis.innerText=`${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else{
                timesis.innerText=`${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
           
        })();
    })();
}
inp.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        subm.click();
    }
})
subm.addEventListener("click",()=>{
    query = inp.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${w_key}`;
    (async function main(){
        let response =  await fetch(url);
        report =await response.json(); 
        if(report.cod==="404"){
            citis.innerText="City not found";
            temps.innerText="--°c"
            citis.style.color="#ffa500";
            cloud.innerText=`-- %`
            humidity.innerText=`-- %`;
            wind.innerText=`-- km/h`
            opvl.innerText="-- mm"
            timesis.innerText="--:--"
            icon.style.display="none"
            condition.innerText="--"
        }
        else{
            icon.style.display="inline"
            citis.style.color="white";
            if(report.clouds.all>50){
                back={
                    Clouds:"assets/cloudy.webp",
                    Clear:"assets/sunny-back.avif",
                    Mist:"assets/mist-foggy.jpeg",
                    Fog:"assets/mist-foggy.jpeg",
                    Rain:"assets/rainy-back.avif",
                    Dizzle:"assets/rainy-back.avif",
                    Thunderstorm:"assets/storm-back.webp",
                    Tornado:"assets/storm-backy.webp",
                    Snow:"assets/cold.jpeg",
                    Smoke:"assets/smokey.avif",
                    Squall:"assets/squall.webp",
                    Haze:"assets/hazy-back.jpg"
                }
                icons={
                    Clouds:"assets/full-cloud.svg",
                    Dizzle:"assets/dizzle.svg",
                    Clear:"assets/sunny.svg",
                    Tornado:"assets/tornado.svg",
                    Mist:"assets/mist.svg",
                    Fog:"assets/foggy.svg",
                    Squall:"assets/windy.svg",
                    Rain:"assets/rainy.svg",
                    Thunderstorm:"assets/stormy.svg",
                    Snow:"assets/snowy.svg",
                    Smoke:"assets/foggy.svg",
                    Haze:"assets/hazy.svg"
                    
                }
                types = {
                    Clouds:"Cloudy",
                    Rain : "Rainy",
                    Clear :"Sunny",
                    Dizzle:"Light rain",
                    Thunderstorm:"Stormy",
                    Snow:"Snowy",
                    Mist :"Misty",
                    Fog :"Foggy",
                    Tornado :"Tornado",
                    Squall : "Windy",
                    Smoke:"Smokey",
                    Haze:"Hazy"
                }
            }
            else{
                back={
                    Clouds:"assets/partly-cloudy.jpeg",
                    Clear:"assets/sunny-back.avif",
                    Mist:"assets/mist-foggy.jpeg",
                    Fog:"assets/mist-foggy.jpeg",
                    Rain:"assets/rainy-back.avif",
                    Dizzle:"assets/rainy-back.avif",
                    Thunderstorm:"assets/storm-back.webp",
                    Tornado:"assets/storm-backy.webp",
                    Snow:"assets/cold.jpeg",
                    Smoke:"assets/smokey.avif",
                    Squall:"assets/squall.webp",
                    Haze:"assets/hazy-back.jpg"
                }
                types = {
                    Clouds:"Partly cloudy",
                    Rain : "Rainy",
                    Clear :"Sunny",
                    Dizzle:"Light rain",
                    Thunderstorm:"Stormy",
                    Snow:"Snowy",
                    Mist :"Misty",
                    Fog :"Foggy",
                    Tornado :"Tornado",
                    Squall : "Windy",
                    Smoke:"Smokey",
                    Haze:"Hazy"
                }
                icons={
                    Clouds:"assets/cloudy.svg",
                    Dizzle:"assets/dizzle.svg",
                    Clear:"assets/sunny.svg",
                    Tornado:"assets/tornado.svg",
                    Mist:"assets/mist.svg",
                    Fog:"assets/foggy.svg",
                    Squall:"assets/windy.svg",
                    Rain:"assets/rainy.svg",
                    Thunderstorm:"assets/stormy.svg",
                    Snow:"assets/snowy.svg",
                    Smoke:"assets/foggy.svg",
                    Haze:"assets/hazy.svg"
                    
                }
            }
            temps.innerText = `${Math.floor(report.main.temp)}°c`;
            citis.innerText=`${report.name}`;
            cloud.innerText=`${report.clouds.all}%`
            humidity.innerText=`${report.main.humidity}%`;
            wind.innerText=`${report.wind.speed} km/h`;
            let x = report.weather[0].main;
            condition.innerText=`${types[x]}`
            body.style.backgroundImage=`url(${back[x]})`;
            icon.src= `${icons[x]}`;
            if("rain" in report){
                opvl.innerText=`${report.rain["1h"]} mm`;
            }
            else if("snow" in report){
                op.innerText=`Snow`;
                opvl.innerText=`${report.snow["1h"]} mm`
            }
            else{
                op.innerText=`Rain`;
                opvl.innerText="00 mm";
            }
            const url2 =`https://api-bdc.net/data/timezone-by-location?latitude=${report.coord.lat}&longitude=${report.coord.lon}&key=${t_key}`;
            (async function time(){
                let r = await fetch(url2);
                let times =await r.json();
                let timess = new Date(`${times.localTime}`);
                if(timess.getMinutes().toString().length==1&&timess.getHours().toString().length==1){
                    timesis.innerText=`0${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
                }
                else if(timess.getHours().toString().length==1){
                    timesis.innerText=`0${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
                }
                else if(timess.getMinutes().toString().length==1){
                    timesis.innerText=`${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
                }
                else{
                    timesis.innerText=`${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
                }
            })();
        }
    })();
})

kolkata.addEventListener("click",()=>{
    icon.style.display="inline"
    citis.style.color="white";
     const url = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=${w_key}`;
     (async function main(){
         let response =  await fetch(url);
         report =await response.json();

        
        if(report.clouds.all>50){
            back={
                Clouds:"assets/cloudy.webp",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            types = {
                Clouds:"Cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"

            }
            icons={
                Clouds:"assets/full-cloud.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Smoke:"assets/foggy.svg",
                Snow:"assets/snowy.svg",
                Haze:"assets/hazy.svg"

            }
        }
        else{
            back={
                Clouds:"assets/partly-cloudy.jpeg",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            types = {
                Clouds:"Partly cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"

            }
            icons={
                Clouds:"assets/cloudy.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Smoke:"assets/foggy.svg",
                Snow:"assets/snowy.svg",
                Haze:"assets/hazy.svg"
            }
        }
        temps.innerText = `${Math.floor(report.main.temp)}°c`;
        citis.innerText=`${report.name}`;
        cloud.innerText=`${report.clouds.all}%`
        humidity.innerText=`${report.main.humidity}%`;
        wind.innerText=`${report.wind.speed} km/h`;
        let x = report.weather[0].main;
        body.style.backgroundImage=`url(${back[x]})`;
        condition.innerText=`${types[x]}`
        icon.src= `${icons[x]}`;
        if("rain" in report){
            opvl.innerText=`${report.rain["1h"]} mm`;
        }
        else if("snow" in report){
            op.innerText=`Snow`;
            opvl.innerText=`${report.snow["1h"]} mm`
        }
        else{
            op.innerText=`Rain`;
            opvl.innerText="00 mm";
        }
        const url2 =`https://api-bdc.net/data/timezone-by-location?latitude=${report.coord.lat}&longitude=${report.coord.lon}&key=${t_key}`;
        (async function time(){
            let r = await fetch(url2);
            let times =await r.json();
            let timess = new Date(`${times.localTime}`);
            if(timess.getMinutes().toString().length==1&&timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getMinutes().toString().length==1){
                timesis.innerText=`${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else{
                timesis.innerText=`${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
        })();
    })();
})

Manchester.addEventListener("click",()=>{
    icon.style.display="inline"
    citis.style.color="white";
     const url = `https://api.openweathermap.org/data/2.5/weather?q=Manchester&units=metric&appid=${w_key}`;
     (async function main(){
         let response =  await fetch(url);
         report =await response.json();

        if(report.clouds.all>50){
            back={
                Clouds:"assets/cloudy.webp",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            types = {
                Clouds:"Cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"
            }
            icons={
                Clouds:"assets/full-cloud.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Smoke:"assets/foggy.svg",
                Snow:"assets/snowy.svg",
                Haze:"assets/hazy.svg"
            }
        }
        else{
            back={
                Clouds:"assets/partly-cloudy.jpeg",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            types = {
                Clouds:"Partly cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"

            }
            icons={
                Clouds:"assets/cloudy.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Smoke:"assets/foggy.svg",
                Snow:"assets/snowy.svg",
                Haze:"assets/hazy.svg"
            }
        }
        temps.innerText = `${Math.floor(report.main.temp)}°c`;
        citis.innerText=`${report.name}`;
        cloud.innerText=`${report.clouds.all}%`
        humidity.innerText=`${report.main.humidity}%`;
        wind.innerText=`${report.wind.speed} km/h`;
        let x = report.weather[0].main;
        body.style.backgroundImage=`url(${back[x]})`;
        condition.innerText=`${types[x]}`
        icon.src= `${icons[x]}`;
        if("rain" in report){
            opvl.innerText=`${report.rain["1h"]}mm`;
        }
        else if("snow" in report){
            op.innerText=`Snow`;
            opvl.innerText=`${report.snow["1h"]} mm`
        }
        else{
            op.innerText=`Rain`;
            opvl.innerText="00 mm";
        }
        const url2 =`https://api-bdc.net/data/timezone-by-location?latitude=${report.coord.lat}&longitude=${report.coord.lon}&key=${t_key}`;
        (async function time(){
            let r = await fetch(url2);
            let times =await r.json();
            let timess = new Date(`${times.localTime}`);
            if(timess.getMinutes().toString().length==1&&timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getMinutes().toString().length==1){
                timesis.innerText=`${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else{
                timesis.innerText=`${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
           
        })();
    })();
})

california.addEventListener("click",()=>{
    icon.style.display="inline"
    citis.style.color="white";
     const url = `https://api.openweathermap.org/data/2.5/weather?q=California&units=metric&appid=${w_key}`;
     (async function main(){
         let response =  await fetch(url);
         report =await response.json();

        
        if(report.clouds.all>50){
            back={
                Clouds:"assets/cloudy.webp",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            types = {
                Clouds:"Cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"
            }
            icons={
                Clouds:"assets/full-cloud.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Smoke:"assets/foggy.svg",
                Snow:"assets/snowy.svg",
                Haze:"assets/hazy.svg"
            }
        }
        else{
            back={
                Clouds:"assets/partly-cloudy.jpeg",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            types = {
                Clouds:"Partly cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"
            }
            icons={
                Clouds:"assets/cloudy.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Smoke:"assets/foggy.svg",
                Snow:"assets/snowy.svg",
                Haze:"assets/hazy.svg"
            }
        }
        temps.innerText = `${Math.floor(report.main.temp)}°c`;
        citis.innerText=`${report.name}`;
        cloud.innerText=`${report.clouds.all}%`
        humidity.innerText=`${report.main.humidity}%`;
        wind.innerText=`${report.wind.speed} km/h`;
        let x = report.weather[0].main;
        body.style.backgroundImage=`url(${back[x]})`;
        condition.innerText=`${types[x]}`
        icon.src= `${icons[x]}`;
        if("rain" in report){
            opvl.innerText=`${report.rain["1h"]}mm`;
        }
        else if("snow" in report){
            op.innerText=`Snow`;
            opvl.innerText=`${report.snow["1h"]} mm`
        }
        else{
            opvl.innerText="00 mm";
        }
        const url2 =`https://api-bdc.net/data/timezone-by-location?latitude=${report.coord.lat}&longitude=${report.coord.lon}&key=${t_key}`;
        (async function time(){
            let r = await fetch(url2);
            let times =await r.json();
            let timess = new Date(`${times.localTime}`);
            if(timess.getMinutes().toString().length==1&&timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getMinutes().toString().length==1){
                timesis.innerText=`${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else{
                timesis.innerText=`${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
           
        })();
    })();
})

tokyo.addEventListener("click",()=>{
    icon.style.display="inline"
    citis.style.color="white";
     const url = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=${w_key}`;
     (async function main(){
         let response =  await fetch(url);
         report =await response.json();
        if(report.clouds.all>50){
            back={
                Clouds:"assets/cloudy.webp",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            types = {
                Clouds:"Cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"
            }
            icons={
                Clouds:"assets/full-cloud.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Smoke:"assets/foggy.svg",
                Snow:"assets/snowy.svg",
                Haze:"assets/hazy.svg"
            }
        }
        else{
            back={
                Clouds:"assets/partly-cloudy.jpeg",
                Clear:"assets/sunny-back.avif",
                Mist:"assets/mist-foggy.jpeg",
                Fog:"assets/mist-foggy.jpeg",
                Rain:"assets/rainy-back.avif",
                Dizzle:"assets/rainy-back.avif",
                Thunderstorm:"assets/storm-back.webp",
                Tornado:"assets/storm-backy.webp",
                Snow:"assets/cold.jpeg",
                Smoke:"assets/smokey.avif",
                Squall:"assets/squall.webp",
                Haze:"assets/hazy-back.jpg"
            }
            types = {
                Clouds:"Partly cloudy",
                Rain : "Rainy",
                Clear :"Sunny",
                Dizzle:"Light rain",
                Thunderstorm:"Stormy",
                Snow:"Snowy",
                Mist :"Misty",
                Fog :"Foggy",
                Tornado :"Tornado",
                Squall : "Windy",
                Smoke:"Smokey",
                Haze:"Hazy"

            }
            icons={
                Clouds:"assets/cloudy.svg",
                Dizzle:"assets/dizzle.svg",
                Clear:"assets/sunny.svg",
                Tornado:"assets/tornado.svg",
                Mist:"assets/mist.svg",
                Fog:"assets/foggy.svg",
                Squall:"assets/windy.svg",
                Rain:"assets/rainy.svg",
                Thunderstorm:"assets/stormy.svg",
                Smoke:"assets/foggy.svg",
                Snow:"assets/snowy.svg",
                Haze:"assets/hazy.svg"

            }
        }
        temps.innerText = `${Math.floor(report.main.temp)}°c`;
        citis.innerText=`${report.name}`;
        cloud.innerText=`${report.clouds.all}%`
        humidity.innerText=`${report.main.humidity}%`;
        wind.innerText=`${report.wind.speed}km/h`;
        let x = report.weather[0].main;
        body.style.backgroundImage=`url(${back[x]})`;
        condition.innerText=`${types[x]}`
        icon.src= `${icons[x]}`;
        if("rain" in report){
            opvl.innerText=`${report.rain["1h"]}mm`;
        }
        else if("snow" in report){
            op.innerText=`Snow`;
            opvl.innerText=`${report.snow["1h"]} mm`;
        }
        else{
            op.innerText=`Rain`;
            opvl.innerText="00 mm";
        }
        const url2 =`https://api-bdc.net/data/timezone-by-location?latitude=${report.coord.lat}&longitude=${report.coord.lon}&key=${t_key}`;
        (async function time(){
            let r = await fetch(url2);
            let times =await r.json();
            let timess = new Date(`${times.localTime}`);
            if(timess.getMinutes().toString().length==1&&timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getHours().toString().length==1){
                timesis.innerText=`0${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else if(timess.getMinutes().toString().length==1){
                timesis.innerText=`${timess.getHours()}:0${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
            else{
                timesis.innerText=`${timess.getHours()}:${timess.getMinutes()}-${daysOfWeek[timess.getDay()]}, ${timess.getDate()} ${months[timess.getMonth()]} '${timess.getFullYear()}`;
            }
        })();
    })();
})
rel.addEventListener("click",()=>{
    window.location.reload();
})
def();