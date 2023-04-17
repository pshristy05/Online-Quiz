const askquestions = [

    {
        imgsrc : 'Q1. Alisha is 34 years off turning 98. How old she is??',
        a: "19",
        b: "20",
        c: "21",
        d: "22",
        answer: "ans2"
    },



    {
        imgsrc : 'Q2. Is it cold in here, or is it just me? Leave me open, and things will go sour really fast.',
        a: "Ice",
        b: "Snow bowl",
        c: "Cooler",
        d: "Fridge",
        answer: "ans4"
    },



    {
        // question: "What is the capital of Maharashtara ?",
        imgsrc : 'Q3. Seeing double? Check me to spot your doppelganger.',
        a: "Glass",
        b: "Mirror",
        c: "Lens",
        d: "Plastic",
        answer: "ans2"
    },



    {
        // question: "What is the capital of Madhya Pradesh ?",
        imgsrc : 'Q4. The building that has the most stories.',
        a: "Administration Block",
        b: "Placement Cell",
        c: "Campus",
        d: "Library",
        answer: "ans4"
    }
];

var question = document.getElementById("question")
var optionA = document.getElementById("optionA")
var optionB = document.getElementById("optionB")
var optionC = document.getElementById("optionC")
var optionD = document.getElementById("optionD")
var submitanswers = document.getElementById("submit")
var answers = document.querySelectorAll('.answer')
var showscores=document.getElementById("scores")

let count=0;
var score=0;
const execute = () =>{

   question.innerHTML=askquestions[count].imgsrc;
   optionA.innerHTML=askquestions[count].a;
   optionB.innerHTML=askquestions[count].b;
   optionC.innerHTML=askquestions[count].c;
   optionD.innerHTML=askquestions[count].d;

}

execute();

const getcheckedanswer = () =>{

    let answer;
    answers.forEach((currentelem)=>{
 
        if(currentelem.checked){
            answer=currentelem.id
        }
    });
    return answer;
}

submitanswers.addEventListener('click',()=>{
var checkedanswer=getcheckedanswer();
// console.log(checkedanswer);

if(checkedanswer==askquestions[count].answer){
         score++;
}


var deselect = ()=>{
    answers.forEach((currelem)=>currelem.checked=false)
}


count++;


deselect();
if(count<askquestions.length){
    execute();
}

else{
    showscores.innerHTML=`
    <h3 style="padding-top:20px;"> Your Score ${score}/${askquestions.length}</h3>
    <button class="btnclass" style="margin-bottom:20px; padding:8px; font-size:22px; cursor:pointer; 
    background-color:#3d0c02; color:orange;"
     onclick="location.reload()">Start Again</button>
    `
    showscores.style.display = "block";
}

})

