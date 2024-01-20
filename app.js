const questions=[
    {
    'que' :'What does the acronym HTML stand for?',
    'a':'Hyper Transfer Markup Language',
    'b':'Hyper Text Makeup Language',
    'c':'Hyper Text Markup Language',
    'd':'High-Level Transfer Machine Language',
    'correct':'c'
    },
    {

    'que': 'Which programming language is known for its association with web development and is often used for creating dynamic web pages?',

    'a' :'Python',
    'b' :  'JavaScript',
    'c' : 'C++',
    'd' : 'Java',
    'correct' :  'b'
    },
    {
    'que' : 'In programming, what is the purpose of a "variable"?',
    'a': 'To store and manage data',
    'b' :'To perform mathematical operations',
    'c': 'To control program flow',
    'd' : 'To create loops',
    'correct':  'a'

    }
]
let question = document.getElementById("question")
let options = document.querySelectorAll(".options")
let buttons = document.querySelector(".btn")
let index = 0;
let total = questions.length
let right=0;
let wrong = 0;
const loadQuestion = ()=>{
  if(index == total){
    return endQuiz();
  }
  reset()
  let data = questions[index]
  question.innerText= ` ${index+1}) ${data.que}`
  options[0].nextElementSibling.innerHTML= data.a
  options[1].nextElementSibling.innerHTML= data.b
  options[2].nextElementSibling.innerHTML= data.c
  options[3].nextElementSibling.innerHTML= data.d
 
  }




const getAnswer=()=>{
  let answer 
  options.forEach(
    (input) => {
    if (input.checked){
      answer = input.value
    }
    
  })
  return answer
}
const submitQuiz = ()=>{
  let data = questions[index]
  const ans = getAnswer()
  if (ans==data.correct) {
    right ++;
    }else{
      wrong ++;
    }
    index++;
    loadQuestion();
    return;
 }
 buttons.addEventListener("click",submitQuiz)
 const reset=()=>{
  options.forEach(
    (input)=>{
      input.checked= false;
    }
  )
 }
const endQuiz=()=>{
  document.querySelector(".box").innerHTML= `<div style= "text-align:center"><h2>Thank you for playing , quiz end!</h2>
    <h2>${right}/${total} are correct </h2></div>`
}



 loadQuestion();


