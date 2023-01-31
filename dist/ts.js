"use strict";
const task = document.getElementById('task');
const image = document.getElementById('img');
const date = document.getElementById('date');
const add = document.getElementById('add');
const cancel = document.getElementById('cancel');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const entity = document.getElementById('');
const title = document.getElementById('task');
const images = document.getElementById('img');
const dates = document.getElementById('dates');
const entyties = document.getElementById('entyties');
// event listeners
add.addEventListener('click', (e) => {
    e.preventDefault();
    div1.style.display = 'none';
    div2.style.display = 'block';
    div2.style.display = 'flex';
});
cancel.addEventListener('click', (e) => {
    div1.style.display = 'block';
    div2.style.display = 'none';
});
// this class has all the functions done by this app
class createStreak {
    constructor() {
        this.mystreaks = [];
    }
    createStreak(all) {
        this.mystreaks.push(all);
        this.displayStreak();
    }
    displayStreak() {
        entity.innerHTML = "";
        this.mystreaks.map((item, index) => {
            // creating the tags to hold the info for the streaks
            const majorDiv = document.createElement("div");
            const streakname = document.createElement("p");
            const streakimage = document.createElement("p");
            const streakdate = document.createElement("p");
            // setting them to their recipients
            streakname.innerHTML = item.title;
            streakimage.innerHTML = item.images;
            streakdate.innerHTML = item.dates;
            // adding the created streak objects to the created div
            majorDiv.appendChild(streakname);
            majorDiv.appendChild(streakimage);
            majorDiv.appendChild(streakdate);
            entity.append(majorDiv);
            entity.style.display = 'flex';
            entity.style.gap = "10px";
            majorDiv.className = "streak";
            majorDiv.addEventListener('onclick', (e) => {
                e.preventDefault();
                entyties.style.display = "block";
                this.display(index);
            });
        });
    }
    display(index) {
        entyties.innerHTML = "";
        let singlestreak = this.mystreaks[index];
        const Div = document.createElement('div');
        const streakname = document.createElement('p');
        const streakimage = document.createElement('p');
        const streakdate = document.createElement('p');
        const btn1 = document.createElement("button");
        btn1.textContent = "Delete";
        const btn2 = document.createElement("button");
        btn2.textContent = "update";
        streakname.innerHTML = singlestreak.title;
        streakimage.innerHTML = singlestreak.images;
        streakdate.innerHTML = singlestreak.dates;
        Div.appendChild(streakname);
        Div.appendChild(streakimage);
        Div.appendChild(streakdate);
        Div.appendChild(btn1);
        Div.appendChild(btn2);
        console.log(singlestreak.title);
        entyties.append(Div);
        entity.style.display = 'flex';
        entity.style.gap = '15px';
        Div.className = "streak";
        btn1.addEventListener("onclick", (e) => {
            e.preventDefault();
            // dodelete(index);
            entyties.style.display = 'none';
        });
        btn2.addEventListener('onclick', (e) => {
            e.preventDefault();
            entyties.style.display = 'none';
        });
    }
    deleteStreak(id) {
        this.mystreaks.splice(id, 1);
        this.displayStreak();
    }
}
class TimeDifference {
    static start() {
    }
}
const streaksinstance = new createStreak();
