// import databases
import floor0 from "../database/floor-0.js";
import floor1 from "../database/floor-1.js";
import floor2 from "../database/floor-2.js";
import floor3 from "../database/floor-3.js";
import floor4 from "../database/floor-4.js";

// import other js files
import { createFloors } from "./utilities/createFloors.js";
import { loadSavedData } from "./utilities/loadSavedData.js";
import { createSideBar } from "../components/sidebar/sidebar.js";
import { utilities } from "./utilities/utilities.js";

// cons & vars
const container = document.querySelector(".container");
const dateEle = document.getElementById("date");
const weekDays = ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"];
const weekDay = document.getElementById("week-day");
console.log(weekDay);
const floors = [floor0, floor1, floor2, floor3, floor4];

// events
window.addEventListener("load", () => {
    const date = new Date().toLocaleDateString("en-UK");
    dateEle.textContent = date;
    weekDay.textContent = weekDays[new Date().getDay()];

    createFloors(container, floors);
    createSideBar(floors);
    loadSavedData();
    utilities();
});