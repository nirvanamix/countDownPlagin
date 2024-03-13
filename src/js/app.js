class Countdown{
    constructor(selector, options){
        const defaultOptions = {
            timeEnd: 'Mar 13 2024 20:35:00', // when the countdown ends
            format: 'day/hours/minutes/seconds', //  year month day hours minutes seconds
            nameTime: [ 'Днів', 'Години', 'Хвилини', 'Секунд'], // name
            conjugationWords: { // conjugation of words
                visible: true,
                nameTime: ['День', 'Година', 'Хвилина', 'Секунда'], // name
            },
            startCount: 'http://worldtimeapi.org/api/timezone/Etc/UTC', // settings: "local" (machine time) or get the time from "http://worldtimeapi.org/api/timezone/Etc/UTC"
            timeZone: 2, // time zone, work only if you use the time from the site
            hiddenBefoStart: false, // hide timer before load
            svgParameters: {
                visible: true,
                clockwise: false, // the direction of movement of the arrow is clockwise
                strokeLinecap: true, // border radius for circle
                transitionAnimation: 500, //  animation in milisecond
                smoothTransition: false,// Smooth transition from zero 59 to 0
                strokeColor: ['rgba(0,0,0, 0.1', 'rgba(255,0,0, 0.9'], // first color for background, second color for porgress circle,
                sizeSvg: { width: [200, 200], stroke: [14, 14] }, // the first parameter is the background circle, the second parameter is the progress circle
                dayStart: 100, // the day from which the countdown should start, if there is such a parameter
                mediaWidth: [
                    { size: 992, sizeSvg: { width: [120, 120], stroke: [4, 4] } },
                    { size: 720, sizeSvg: { width: [100, 100], stroke: [2, 2] } },
                    { size: 480, sizeSvg: { width: [70, 70], stroke: [2, 2] } }
                ]
            }
        }
        this.options = Object.assign(defaultOptions, options);
        this.$selector = document.querySelectorAll(selector);
        this.selecrotName = selector;
        this.#renderHtml();
        this.#getTime().then((timeNow) => {
            this.#coundDown(timeNow);
        });
    }
    async  #getTime(){
        if (this.options.startCount.trim()  != "local"){
            const response = await fetch(this.options.startCount);
            const timeNow = await response.json();
            return timeNow
        } else{
            return new Date();
        }
    }
    #coundDown(timeNow){
        const getNow = (this.options.startCount.trim() != "local") ? new Date(timeNow.datetime.split(".")[0]).getTime() + (this.options.timeZone * 60 * 60 * 1000)  :  new Date(timeNow).getTime();
        const getEnd = new Date(this.options.timeEnd).getTime();
        let timeLeft = getEnd - getNow;
        const refreshIntervalId = setInterval(() => {
            timeLeft = timeLeft - 1000;
            if (timeLeft < 0){
                clearInterval(refreshIntervalId);
                this.timerFinishedCallback(); // викликати колбек, коли таймер стане нульовим
                this.$selector.forEach((el) => {
                    
                    (this.options.hiddenBefoStart == true) && (el.style.opacity = 1);
                });
                return false;
            }
            const seconds = Math.floor(timeLeft / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            let remainingDays = days % 365;
                (remainingDays < 10) && (remainingDays = '0' + remainingDays);
            let remainingHours = hours % 24;
                (remainingHours < 10) && (remainingHours = '0' + remainingHours);
            let remainingMinutes = minutes % 60;
                (remainingMinutes < 10) && (remainingMinutes = '0' + remainingMinutes);
            let remainingSeconds = seconds % 60;
                (remainingSeconds < 10) && (remainingSeconds = '0' + remainingSeconds);
            this.$selector.forEach((el) => {
                (this.options.hiddenBefoStart == true) && (el.style.opacity = 1);
                (el.querySelector('.seconds .time') != null) && (el.querySelector('.seconds .time').innerHTML = remainingSeconds); // add seconds
                (el.querySelector('.minutes .time') != null) && (el.querySelector('.minutes .time').innerHTML = remainingMinutes); // add seconds
                (el.querySelector('.hours .time') != null) && (el.querySelector('.hours .time').innerHTML = remainingHours); // add seconds
                (el.querySelector('.day .time') != null) && (el.querySelector('.day .time').innerHTML = remainingDays); // add seconds
            });
            // svg progress
            (this.options.svgParameters.visible == true) && (this.#svgProgressTime({ remainingSeconds, remainingMinutes, remainingHours, remainingDays }));
            // conjugation of words
            (this.options.conjugationWords.visible == true) && (this.#conjugationWords());
        }, 1000);
    }
    #renderHtml(){
        const getFormat = this.options.format.split("/"); 
        let html = '';
        getFormat.forEach((el) => {
            let nameTime = ''; 
            switch(el){
                case 'day': nameTime = this.options.nameTime[0];
                    break;
                case 'hours': nameTime = this.options.nameTime[1];
                    break;
                case 'minutes': nameTime = this.options.nameTime[2];
                    break;
                case 'seconds': nameTime = this.options.nameTime[3];
                    break;
                default: console.error(`No search ${el}`);
                    break;
            }
            const svgHtml = (this.options.svgParameters.visible == true) ? this.#rendersvg(el) : '';
            window.addEventListener('resize', () => {
                (this.options.svgParameters.visible == true) && (this.#rendersvg(el))
            });
            html = html + `<div class='block-time ${el} '> ${svgHtml} <div class='wr-time'><div class='time'>00</div><div class='name-time'>${nameTime}</div></div></div>`;
        })
        this.$selector.forEach((elm) => {
            (this.options.hiddenBefoStart == true) && (elm.style.opacity = 0);
            elm.insertAdjacentHTML("afterbegin", html);
            (this.options.svgParameters.visible == true) && (elm.classList.add('hasSvg'));
        });
        // svg Circle
        if (this.options.svgParameters.visible == false) return false;
        this.#parametersSvg();
        window.addEventListener('resize', () => {
            this.#parametersSvg();
        });
    }
    #rendersvg(nametime){
        return `<svg class="progres-svg-plagin"><circle class="background-ring" stroke="${this.options.svgParameters.strokeColor[0]}"  fill="transparent"  /> <circle style="transform-origin: 50% 50%; transform: rotate(-90deg); stroke-linecap: ${(this.options.svgParameters.strokeLinecap == true) && 'round'}  ; transition: stroke-dashoffset ${this.options.svgParameters.transitionAnimation}ms;" class="progres-ring progress-${nametime}" stroke="${this.options.svgParameters.strokeColor[1]}"  fill="transparent"  /></svg>`
    }
    #parametersSvg(){
        // ring circle
        let getMediaWidth = this.options.svgParameters.sizeSvg;
        const getSizeWindow = window.innerWidth;
        for (let i = 0;  i < this.options.svgParameters.mediaWidth.length; i++) {
            if (getSizeWindow <= this.options.svgParameters.mediaWidth[i].size){
                getMediaWidth = this.options.svgParameters.mediaWidth[i].sizeSvg;
            } else{
                break;
            }
        }
        const widthMax = Math.max(...getMediaWidth.width),
            widthSvg = (indexWidth) => getMediaWidth.width[indexWidth],
            cx_cy = widthMax / 2,
            width_stroke = (indexStroke) => getMediaWidth.stroke[indexStroke],
            radius = (indexWidth, indexStroke) => (widthSvg(indexWidth) / 2) - (width_stroke(indexStroke) / 2);
        const general_attributes = {
            'cx': cx_cy,
            'cy': cx_cy
        }
        const attributesBackgroundAdd = {
            'r': radius(0, 0),
            'stroke-width': width_stroke(0)
        }
        const attributesProgressAdd = {
            'r': radius(1, 1),
            'stroke-width': width_stroke(1)
        }
        const attributesBackground = { ...general_attributes, ...attributesBackgroundAdd };
        const attributesProgress = { ...general_attributes, ...attributesProgressAdd };
        // add parameters in progres-svg-plagin
        document.querySelectorAll('.progres-svg-plagin').forEach((el) => {
            el.setAttribute('width', widthMax);
            el.setAttribute('height', widthMax);
            for (let key in attributesBackground) {
                el.querySelector('.background-ring').setAttribute(key, attributesBackground[key]);
            }
            for (let key in attributesProgress) {
                el.querySelector('.progres-ring').setAttribute(key, attributesProgress[key]);
            }
        });
    }
    #svgProgressTime(time){
        let second = parseInt(time.remainingSeconds);
        const percentSecond = (this.options.svgParameters.clockwise == true) ? 100 - second / 60 * 100 :  second / 60 * 100;
        let minute = parseInt(time.remainingMinutes);
        const percentMinute = (this.options.svgParameters.clockwise == true) ? 100 - minute / 60 * 100 : minute / 60 * 100;
        let hours = parseInt(time.remainingHours);
        const percentHours = (this.options.svgParameters.clockwise == true) ? 100 - hours / 60 * 100 : hours / 60 * 100;
        const day = this.options.svgParameters.dayStart;
        const percentDay = time.remainingDays /  day * 100;
        document.querySelectorAll('.progres-svg-plagin .progres-ring').forEach((el) => {
            if (el.classList.contains('progress-seconds') == true)  this.#percentForProgress(el, percentSecond);
            if (el.classList.contains('progress-minutes') == true)  this.#percentForProgress(el, percentMinute);
            if (el.classList.contains('progress-hours') == true) this.#percentForProgress(el, percentHours);
            if (el.classList.contains('progress-day') == true) this.#percentForProgress(el, percentDay);
        });
    }
    #percentForProgress(el, percent){
        const radius = el.r.baseVal.value
        const circumference = 2 * Math.PI * radius;
        el.style.strokeDasharray = circumference;
        const offset = circumference - percent / 100 * circumference;
        el.style.strokeDashoffset = offset;
        // smoothTransitionFromZero59To0
        (this.options.svgParameters.smoothTransition == false) && ((percent == 0 || percent == 100) ? el.style.transition = ' stroke-dashoffset 0ms' : el.style.transition = `stroke-dashoffset ${this.options.svgParameters.transitionAnimation}ms`);
    }
    #conjugationWords(){
        document.querySelectorAll(`.${this.$selector[0].className.split(' ')[0]} .block-time`).forEach((el) => {
            const time = parseInt(el.querySelector('.time').textContent);
            const funCojugarion = i => this.options.conjugationWords.nameTime[i];
            const funNameTime = i => this.options.nameTime[i];
            (el.classList.contains('seconds') == true) && ((time == 1) ? el.querySelector('.name-time').innerHTML = funCojugarion(3) : el.querySelector('.name-time').innerHTML = funNameTime(3));
            (el.classList.contains('minutes') == true) && ((time == 1) ? el.querySelector('.name-time').innerHTML = funCojugarion(2) : el.querySelector('.name-time').innerHTML = funNameTime(2));
            (el.classList.contains('hours') == true) && ((time == 1) ? el.querySelector('.name-time').innerHTML = funCojugarion(1) : el.querySelector('.name-time').innerHTML = funNameTime(1));
            (el.classList.contains('day') == true) && ((time == 1) ? el.querySelector('.name-time').innerHTML = funCojugarion(0) : el.querySelector('.name-time').innerHTML = funNameTime(0));
        });
    }

    // Events to call from outside
    timerFinished(callback) {
        this.timerFinishedCallback = callback; // встановлюємо колбек, який буде викликаний, коли таймер досягне нуля
    }
}


const plaginCall = new Countdown('.countDonw', {});

plaginCall.timerFinished(() => {
    console.log("Таймер досяг нуля!");
});








// stroke-dasharray="235" stroke-dashoffset="63.25"


