console.log("hello");

let dailyPresentWork = 5;
let dailyPrevWork = 7;
let weeklyPresentWork = 32;
let weeklyPrevWork = 36;
let monthlyPresentWork = 103;
let monthlyPrevWork = 128;

let dailyPresentPlay = 1;
let dailyPrevPlay = 2;
let weeklyPresentPlay = 10;
let weeklyPrevPlay = 8;
let monthlyPresentPlay = 23;
let monthlyPrevPlay = 29;

let dailyPresentStudy = 0;
let dailyPrevStudy = 1;
let weeklyPresentStudy = 4;
let weeklyPrevStudy = 7;
let monthlyPresentStudy = 13;
let monthlyPrevStudy = 19;

let dailyPresentExercise = 1;
let dailyPrevExercise = 1;
let weeklyPresentExercise = 4;
let weeklyPrevExercise = 5;
let monthlyPresentExercise = 11;
let monthlyPrevExercise = 18;

let dailyPresentSocial = 1;
let dailyPrevSocial = 3;
let weeklyPresentSocial = 5;
let weeklyPrevSocial = 10;
let monthlyPresentSocial = 21;
let monthlyPrevSocial = 23;

let dailyPresentSelfcare = 0;
let dailyPrevSelfcare = 1;
let weeklyPresentSelfcare = 2;
let weeklyPrevSelfcare = 6;
let monthlyPresentSelfcare = 7;
let monthlyPrevSelfcare = 11;

const presentWork = document.getElementById("presentWork");
const prevWork = document.getElementById("prevWork");

const presentPlay = document.getElementById("presentPlay");
const prevPlay = document.getElementById("prevPlay");

const presentStudy = document.getElementById("presentStudy");
const prevStudy = document.getElementById("prevStudy");

const presentExercise = document.getElementById("presentExercise");
const prevExercise = document.getElementById("prevExercise");

const presentSocial = document.getElementById("presentSocial");
const prevSocial = document.getElementById("prevSocial");

const presentSelfcare = document.getElementById("presentSelfcare");
const prevSelfcare = document.getElementById("prevSelfcare");

let previousHour = "Previous Hour: ";
let lastWeek = "Last Week: ";
let previousMonth = "Last Month: ";
let suffix = "hrs";

let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

function dailFunc(){
    presentWork.innerText = dailyPresentWork + suffix;
    prevWork.innerText = previousHour + dailyPrevWork + suffix;

    presentPlay.innerText = dailyPresentPlay + suffix;
    prevPlay.innerText = previousHour + dailyPrevPlay + suffix;

    presentStudy.innerText = dailyPresentStudy + suffix;
    prevStudy.innerText = previousHour + dailyPrevStudy + suffix;

    presentExercise.innerText = dailyPresentExercise + suffix;
    prevExercise.innerText = previousHour + dailyPrevExercise + suffix;

    presentSocial.innerText = dailyPresentSocial + suffix;
    prevSocial.innerText = previousHour + dailyPrevSocial + suffix;

    presentSelfcare.innerText = dailyPresentSelfcare + suffix;
    prevSelfcare.innerText = previousHour + dailyPrevSelfcare + suffix;

}

function weekFunc(){
    presentWork.innerText = weeklyPresentWork + suffix;
    prevWork.innerText = lastWeek + weeklyPrevWork + suffix;

    presentPlay.innerText = weeklyPresentPlay + suffix;
    prevPlay.innerText = lastWeek + weeklyPrevPlay + suffix;

    presentStudy.innerText = weeklyPresentStudy + suffix;
    prevStudy.innerText = lastWeek + weeklyPrevStudy + suffix;

    presentExercise.innerText = weeklyPresentExercise + suffix;
    prevExercise.innerText = lastWeek + weeklyPrevExercise + suffix;

    presentSocial.innerText = weeklyPresentSocial + suffix;
    prevSocial.innerText = lastWeek + weeklyPrevSocial + suffix;

    presentSelfcare.innerText = weeklyPresentSelfcare + suffix;
    prevSelfcare.innerText = lastWeek + weeklyPrevSelfcare + suffix;
}

function monthFunc(){
    presentWork.innerText = monthlyPresentWork + suffix;
    prevWork.innerText = previousMonth + monthlyPrevWork + suffix;

    presentPlay.innerText = monthlyPresentPlay + suffix;
    prevPlay.innerText = previousMonth + monthlyPrevPlay + suffix;

    presentStudy.innerText = monthlyPresentStudy + suffix;
    prevStudy.innerText = previousMonth + monthlyPrevStudy + suffix;

    presentExercise.innerText = monthlyPresentExercise + suffix;
    prevExercise.innerText = previousMonth + monthlyPrevExercise + suffix;

    presentSocial.innerText = monthlyPresentSocial + suffix;
    prevSocial.innerText = previousMonth + monthlyPrevSocial + suffix;

    presentSelfcare.innerText = monthlyPresentSelfcare + suffix;
    prevSelfcare.innerText = previousMonth + monthlyPrevSelfcare + suffix;
}