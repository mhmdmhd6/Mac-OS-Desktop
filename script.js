/********** ELEMENTS **********/
var adding = document.querySelector('.adding');
var backfull = document.querySelector('.backfull');
var backfullnote = document.querySelector('.backfull-note');
var close = document.querySelector('.close');
var closenote = document.querySelector('.close-note');
var container = document.querySelector('.container__Window');
var deleting = document.querySelector('.deleting');
var full = document.querySelector('.full');
var fullnote = document.querySelector('.full-note');
var launchpad = document.querySelector('.launchpad');
var launchpad_searchbox = document.querySelector('.launchpad .searchbox');
var launchpad_app_container = document.querySelector('.Apps-container');
var navbar = document.querySelector('.navbar');
var note = document.querySelector('.note');
var notes = document.querySelector('.notes');
var opening = document.querySelector('.opening');
var openNote = document.querySelector('.openNote');
var terminal = document.querySelector('.terminal');
var typing = document.querySelector('.typing');
var calculator = document.querySelector('.calculator');
var opencalculator = document.querySelector('.open-cal');
var closecal = document.querySelector('.close-cal');
var opencalculator_lunchpad = document.querySelector('.open-cal-lunching');
var point_terminal = document.querySelector('#point-terminal');
var point_launchpad = document.querySelector('#point-launchpad');
var point_cal = document.querySelector('#point-cal');
var point_note = document.querySelector('#point-note');
var app_name_terminal = document.querySelector('#Terminal');
var app_name_notes = document.querySelector('#notes');
var app_name_calculator = document.querySelector('#calculator');
// change lang
var change_lang = document.querySelector('.change_lang');

function lang_change() {
  if (change_lang.style.display === "none") {
    change_lang.style.display = "flex";
} else {
    change_lang.style.display = "none";
}
}
function handleAdding() {
  notes.style.display = 'flex';
}

function handleBackfull() {
  terminal.style.width = '70%';
  terminal.style.height = '430px';
}

function handleBackfullnote() {
  note.style.width = '70%';
  note.style.height = '430px';
}

function handleClose() {
  terminal.style.display = 'none';
  point_terminal.style.display = 'none';
  app_name_terminal.style.display = 'none';
}

function handleClosenote() {
  note.style.display = 'none';
  point_note.style.display = 'none';
  app_name_notes.style.display = 'none';
}

function handleFullScreen(app) {
  app.style.width = '100%';
  app.style.height = '90%';
}



function handleOpenLaunching() {
  if(launchpad.style.display === 'none') {
    launchpad.style.display = 'block';
    navbar.style.display = 'none';
    point_launchpad.style.display = 'block';
  } else {
    launchpad.style.display = 'none';
    navbar.style.display = 'flex';
    point_launchpad.style.display = 'none';
  }
  container.style.display = 'none';
}


function handleOpening() {
  terminal.style.display = 'block';
  container.style.display = 'flex';
  navbar.style.display = 'flex';
  launchpad.style.display = 'none';
  point_terminal.style.display = 'block';
  point_launchpad.style.display = 'none';
  app_name_terminal.style.display = 'block';
}

function handleOpenNote() {
  note.style.display = 'block';
  container.style.display = 'flex';
  navbar.style.display = 'flex';
  launchpad.style.display = 'none';
  point_note.style.display = 'block';
  point_launchpad.style.display = 'none';
  app_name_notes.style.display = 'block';
}

function handleDeleting() {
  notes.style.display = 'none';
  typing.style.display = 'none';
}

function handleNotes() {
  typing.style.display = 'flex';
}
function handleOpenCal() {
  calculator.style.display = 'block';
  container.style.display = 'flex';
  navbar.style.display = 'flex';
  launchpad.style.display = 'none';
  point_cal.style.display = 'block';
  point_launchpad.style.display = 'none';
  app_name_calculator.style.display = 'block';
}
function handleCloseCal() {
  calculator.style.display = 'none';
  point_cal.style.display = 'none';
  app_name_calculator.style.display = 'none';
}
function handleOpenCal_lunchpad() {
  calculator.style.display = 'block';
  container.style.display = 'flex';
  navbar.style.display = 'flex';
  launchpad.style.display = 'none';
  point_cal.style.display = 'block';
  point_launchpad.style.display = 'none';
}

function handleLaunchpadSearch(e) {
    for (let app of launchpad_app_container.children) {
        if (e.target.value) {
            app.style.display = "none";
            if (app.dataset.keywords.includes(e.target.value)) {
                app.style.display = "flex";
            }
        } else
            app.style.display = "flex";

    }
}
/********** LISTENERS **********/
lang_change();
adding.addEventListener('click', handleAdding);
backfull.addEventListener('click', handleBackfull);
backfullnote.addEventListener('click', handleBackfullnote);
close.addEventListener('click', handleClose);
closenote.addEventListener('click', handleClosenote);
deleting.addEventListener('click', handleDeleting);
full.addEventListener('click', () => handleFullScreen(terminal));
fullnote.addEventListener('click', () => handleFullScreen(note));
handleOpenLaunching();
notes.addEventListener('click', handleNotes);
opening.addEventListener('click', handleOpening);
openNote.addEventListener('click', handleOpenNote);
opencalculator.addEventListener('click', handleOpenCal);
closecal.addEventListener('click', handleCloseCal);
opencalculator_lunchpad.addEventListener('click', handleOpenCal_lunchpad);
launchpad_searchbox.addEventListener('input', handleLaunchpadSearch);

//calculator code
// select all the buttons
const buttons = document.querySelectorAll('.input button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(button => {
  button.addEventListener('click', event => calculate(event.target.value));
});

operators = ['+','-','*','/']
function lastNumber(value){
  var tempChar = operators[0]; // We can use the first token as a temporary join character
  for(var i = 1; i < operators.length; i++){
    value = value.split(operators[i]).join(tempChar);
  }
  value = value.split(tempChar);
  return value[value.length -1]
}


function calculate(value) {
  const latestChar = display.value[display.value.length - 1];

  const isEmpty = display.value === '0';
  const isDecimalLastOperand = lastNumber(display.value).includes(".");
  const isNumber =
    value === '0' ||
    value === '1' ||
    value === '2' ||
    value === '3' ||
    value === '4' ||
    value === '5' ||
    value === '6' ||
    value === '7' ||
    value === '8' ||
    value === '9' ||
    value === '10';

  if (isEmpty && isNumber) {
    return (display.value = value);
  }

  switch (value) {
    case '=':
      if (!isEmpty) display.value = eval(display.value);
      return;
    case '.':
      if (!isDecimalLastOperand) display.value += '.';
      return;
    case 'C':
      return (display.value = '0');
    case '+/-':
      if(!operators.some((operator) => display.value.replace(/^-/, '').includes(operator))) display.value = -1 * (parseFloat(display.value));
      return;
    case '*':
    case '/':
    case '-':
    case '+':
    case '%':
      if (
        latestChar === '/' ||
        latestChar === '*' ||
        latestChar === '-' ||
        latestChar === '+' ||
        latestChar === '%'
      )
        return display.value = display.value.slice(0, -1) + value;
    default:
      display.value += value;
  }
}

//App dragable
$(function () {
  $('.terminal').draggable()
      .click(function(){
        if ( $(this).is('.ui-draggable-dragging') ) {
          return;
        }
        $(this).draggable( "option", "disabled", true );
        $(this).find('.cursor').attr('contenteditable','true');
      })
      .blur(function(){
        $(this).draggable( 'option', 'disabled', false);
        $(this).find('.cursor').attr('contenteditable','false');
      });
  $('.note').draggable();
  $('.calculator').draggable();
});
//date and time
var d = new Date();
document.getElementById('date').innerHTML = d.toDateString();

function digi() {
  var date = new Date(),
    hour = date.getHours(),
    minute = checkTime(date.getMinutes()),
    ss = checkTime(date.getSeconds());

  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  if (hour > 12) {
    hour = hour - 12;
    if (hour == 12) {
      hour = checkTime(hour);
      document.getElementById('clock').innerHTML = hour + ':' + minute + ' AM';
    } else {
      hour = checkTime(hour);
      document.getElementById('clock').innerHTML = hour + ':' + minute + ' PM';
    }
  } else {
    document.getElementById('clock').innerHTML = hour + ':' + minute + ' AM';
  }
  var time = setTimeout(digi, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
}
let terminal_line_html = $('.terminal_line').html();
let path = "~";
function init_terminal_line(){
  $('.cursor').keydown(function(e) {

    // trap the return key being pressed
    if (e.keyCode === 13) {
      e.preventDefault()
      let command = $(this).html()
      if(!command)
        return;
      let command_output = "zsh: command not found: " + command  + "<br>";

      if(command.startsWith("cd ")){
        path = command.substring(3)
        command_output = "";
      } else if(command === "ls"){
        dirs = [
            "Desktop",
            "Downloads",
            "Music",
            "Documents",
        ]
        command_output = dirs.join("\t");
      } else
      $(this).removeAttr('contenteditable');
      $(this).removeClass('cursor');
      $('.terminal_content').append(command_output).append(terminal_line_html.replace("~",path));
      placeCaretAtEnd( document.querySelector('.cursor') );
      init_terminal_line();
    }
  });
}

init_terminal_line();
$('.terminal_content').click(function (){
  placeCaretAtEnd( document.querySelector('.cursor') );
})

function placeCaretAtEnd(el) {
  el.focus();
  var range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

