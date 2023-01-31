const task=document.getElementById('task') as HTMLInputElement
const image=document.getElementById('img')as HTMLInputElement
const date=document.getElementById('date') as HTMLInputElement
const add = document.getElementById('add') as HTMLButtonElement
const cancel=document.getElementById('cancel')as HTMLDivElement
const div1=document.getElementById('div1') as HTMLDivElement
const div2= document.getElementById('div2') as HTMLDivElement
const entity= document.getElementById('') as HTMLDivElement
const title=document.getElementById('task') as HTMLInputElement
const images= document.getElementById('img') as HTMLImageElement
const dates=document.getElementById('dates')as HTMLInputElement
const entyties=document.getElementById('entyties') as HTMLDivElement



// event listeners

add.addEventListener('click',(e)=>{
    e.preventDefault();
    div1.style.display='none'
    div2.style.display='block'
    div2.style.display='flex'

})
cancel.addEventListener('click',(e)=>{
    div1.style.display='block'
    div2.style.display='none'
    
})

interface Streak{
    title:string
    images:string
    dates:string
}
// this class has all the functions done by this app

class createStreak{
private mystreaks: Streak[]=[];
constructor(){

}
createStreak(all:Streak){
    this.mystreaks.push(all)
    this.displayStreak()
}

displayStreak(){
entity.innerHTML=""
this.mystreaks.map((item,index)=>{
    // creating the tags to hold the info for the streaks
const majorDiv = document.createElement("div")
const streakname=document.createElement("p")
const streakimage=document.createElement("p")
const streakdate=document.createElement("p")
// setting them to their recipients
streakname.innerHTML=item.title
streakimage.innerHTML=item.images
streakdate.innerHTML=item.dates

// adding the created streak objects to the created div
majorDiv.appendChild(streakname)
majorDiv.appendChild(streakimage)
majorDiv.appendChild(streakdate)


entity.append(majorDiv)
entity.style.display='flex'
entity.style.gap="10px"
majorDiv.className="streak"

majorDiv.addEventListener('onclick',(e)=>{
    e.preventDefault();
    entyties.style.display="block"
    this.display(index)

});


});
}

display(index: number){
    entyties.innerHTML=""
    let singlestreak= this.mystreaks[index]
    const Div=document.createElement('div')
    const streakname=document.createElement('p')
    const streakimage=document.createElement('p')
    const streakdate=document.createElement('p')
    const btn1=document.createElement("button")
    btn1.textContent="Delete";
    const btn2=document.createElement("button")
    btn2.textContent="update";

    streakname.innerHTML=singlestreak.title
    streakimage.innerHTML=singlestreak.images
    streakdate.innerHTML=singlestreak.dates

    Div.appendChild(streakname)
    Div.appendChild(streakimage)
    Div.appendChild(streakdate)
    Div.appendChild(btn1)
    Div.appendChild(btn2)
    console.log(singlestreak.title);
    
entyties.append(Div)

entity.style.display='flex'
entity.style.gap='15px'
Div.className="streak"
btn1.addEventListener("onclick", (e)=>{
e.preventDefault()
// dodelete(index);
entyties.style.display='none'

})
btn2.addEventListener('onclick', (e)=>{
    e.preventDefault()
    entyties.style.display='none'
})

}
deleteStreak(id:number){
    this.mystreaks.splice(id,1)
    this.displayStreak()
}

}
class TimeDifference{
    static start(){

    }
}

const streaksinstance = new createStreak();



