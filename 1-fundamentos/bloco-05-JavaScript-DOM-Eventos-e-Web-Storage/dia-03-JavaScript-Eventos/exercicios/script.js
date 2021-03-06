function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Exercício 1
  function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDaysHTML = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i +=1) {
      const days = dezDaysList[i];
      const daysContainer = document.createElement('li');

      daysContainer.innerText = days;
      daysContainer.className = 'day';

      if ((days === 24) || (days == 25) || (days == 31)){
        daysContainer.className += ' holiday';
      }

      if ((days === 4) || (days == 11) || (days == 18) || (days == 25)){
        daysContainer.className += ' friday';
      }


      dezDaysHTML.appendChild(daysContainer);
    }
  }

  createDays();

  // Exercicio 2
  const feriados = 'Feriados';

  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = feriados;
  button.style.padding = '5px 20px';
  button.style.backgroundColor = 'rgb(200,152,148)'
  button.style.fontSize = '20px'
  
  
  const localBotao = document.querySelector('.buttons-container');

  localBotao.appendChild(button);

  // Exercício 3

  function changeColorHolidays() {
    const holidays = document.getElementsByClassName('holiday');

    for (let i = 0; i <holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === 'rgb(238, 238, 238)') {
    
        holidays[i].style.backgroundColor = 'rgb(0, 204, 0)';
    
      } else if (holidays[i].style.backgroundColor === 'rgb(0, 204, 0)') {
    
        holidays[i].style.backgroundColor = 'rgb(238, 238, 238)';
    
      }
    }
    

    
  }
  const holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = 'rgb(238,238,238)';
  }
  button.addEventListener('click', changeColorHolidays);

// Exercício 4 
const sexta = 'Sexta-Feira';

  const button2 = document.createElement('button');
  button2.id = 'btn-friday';
  button2.innerText = 'Sexta-Feira';
  button2.style.padding = '5px 20px';
  button2.style.backgroundColor = 'rgb(200,152,148)'
  button2.style.fontSize = '20px'
  
  localBotao.appendChild(button2);

  // Exercício 5
var originalFridayDays = ['4','11', '18', '25' ];
  function changeTextFriday() {
    const sexta = document.getElementsByClassName('friday');
    
    for (let i = 0; i < sexta.length; i += 1) {
      
      if (sexta[i].innerText === 'Sextou!!!') {
        sexta[i].innerText = originalFridayDays[i];
      } else {
        sexta[i].innerText = 'Sextou!!!'
      }
    }
    
  }
  
  button2.addEventListener('click', changeTextFriday);

  // Exercicio 6

const dayClass = document.getElementById('days');

function mouseOver(event) {
  event.target.style.fontSize = '25px';
}

function mouseLeave(event) {
  event.target.style.fontSize = '20px';
}

dayClass.addEventListener('mouseover', mouseOver);
dayClass.addEventListener('mouseout', mouseLeave);

// Exercício 7 e 8 refatorado
const addButton = document.getElementById('btn-add');
function randomRgb() {
  const o = Math.round;
  const r = Math.random;
  const s = 255;

  let cor1 = o(r() * s) + 1;
  let cor2 = o(r() * s) + 1;
  let cor3 = o(r() * s) + 1;

  if ((cor1 === 255) && (cor2 === 255) && (cor3 === 255)) {
    cor1 = o(r() * (s - 1));
    cor2 = o(r() * (s - 1));
    cor3 = o(r() * (s - 1));
  }

  return `rgb(${cor1},${cor2},${cor3})`;
}

function addTaskLegend() {
  const mytasks  = document.querySelector('.my-tasks');
  const taskColor = randomRgb();

  taskColorLegend = document.createElement('div')
  taskColorLegend.style.backgroundColor = taskColor;
  taskColorLegend.className = 'task';

  mytasks.appendChild(taskColorLegend);
  const space = document.createElement('br');
  mytasks.appendChild(space);
}
function addTask() {

  const taskText = document.getElementById('task-input');
  const mytasks  = document.querySelector('.my-tasks');
  const task = taskText.value;
  console.log(taskText.value)
  if (task === '') {
    alert('Insira Uma tarefa válida!')
  } else {
  
  taskText.value = '';

  taskList = document.createElement('span')
  taskList.innerText = task;
//  taskList.style.display = 'inline-block'

  mytasks.appendChild(taskList);
  addTaskLegend()
  }
}


addButton.addEventListener('click', addTask);

// Exercício 9
function changeTaskSelected(evento) {

  if (evento.path[0].classList.length === 1) {
    evento.path[0].classList.add('selected');
  } else {
    evento.path[0].classList.remove('selected');
  }

  const allTasks = document.getElementsByClassName('task');
  
  
  for (let i = 0; i < allTasks.length; i += 1) {
    if (allTasks[i] !== evento.path[0]) {
      allTasks[i].classList.remove('selected');
    }
    
  }
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    var color = selected.style.backgroundColor;
  }
}
const mytasks  = document.querySelectorAll('.my-tasks');

for (let j = 0; j < mytasks.length; j += 1) {
  mytasks[j].addEventListener('click', changeTaskSelected);
}

// Exercício 10 
//const initialFontColor =

function selectChangeDayColor(evento) {
  const selectedTask = document.querySelector('.selected');
  
  console.log(evento.path[0].style.color);
  console.log(selectedTask.style.backgroundColor);
  const taskBC = selectedTask.style.backgroundColor;
  const eventColor = evento.path[0].style.color;
  if (taskBC === eventColor){
    evento.path[0].style.color = 'rgb(119, 119, 119)';
  } else {
    evento.path[0].style.color = selectedTask.style.backgroundColor;
  }
}

const daysColor = document.querySelector('.days-container');
daysColor.addEventListener('click', selectChangeDayColor);

// BÔNUS

function enterKey(event) {
  var keyCode = event.which || event.keyCode;
  
  if (keyCode === 13) {
    addTask();
  };
}
const input = document.getElementById('task-input');
input.addEventListener('keydown', enterKey)
