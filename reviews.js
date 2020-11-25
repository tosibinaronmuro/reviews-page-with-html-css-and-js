const reviews = [

    {
        id:1,
        name:'susan smith',
        job:'web developer',
        image:'profile.jpg',
        text:'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should.',
    },
    {
        id:2,
        name:'doww yongs',
        job:'software engineer',
        image:'profile,jpg.jpg',
        text:'Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. ',
    },
    {
        id:3,
        name:'anne fletcher',
        job:'devops manager',
        image:'annne.jpg',
        text:  'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an.',
    },
    {
        id:4,
        name:'claire randall',
        job:'devops manager',
        image:'last.jpg',
        text:'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far.'
    }
] ;

let image=document.getElementById('person-img');
let author=document.getElementById('author');
let job=document.getElementById('job');
let info=document.getElementById('info');
let prevbtn=document.querySelector('#previous');
let nextbtn=document.querySelector('#next');
let randomBtn=document.querySelector('.random-btn');

//start starting item
let currentItem = 1;
//load initial item
let showPerson= ()=>{
    let item=reviews[currentItem];
    image.src=item.image;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

window.addEventListener('DOMContentLoaded', showPerson);

// nextbtn.addEventListener('click', ()=>{
        // if(currentItem<3){
        // currentItem++;

        // }
        // else{
        //     currentItem=0;
        //     console.log('thats all!!')
        // }
//         console.log(currentItem)
        
// })
nextbtn.addEventListener('click',()=>{
    if(currentItem<3){
        currentItem++;

        }
        else{
            currentItem=0;
            // console.log('thats all!!')
        } 
    showPerson(currentItem)
})
prevbtn.addEventListener('click',()=>{
    if(currentItem>0){
        currentItem--;

        }
        else{
            currentItem=3;
            // console.log('thats all!!')
        } 
    showPerson(currentItem)
})
randomBtn.addEventListener('click',()=>{
   let ran=Math.floor( (Math.random()* 4));
//    console.log(ran)
currentItem=ran;
showPerson(currentItem)
})
