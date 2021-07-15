/********** ELEMENTS **********/
var adding = document.querySelector('.adding')
var backfull = document.querySelector('.backfull')
var backfullnote = document.querySelector('.backfull-note')
var close = document.querySelector('.close')
var closenote = document.querySelector('.close-note')
var container = document.querySelector('.container')
var deleting = document.querySelector('.deleting')
var full = document.querySelector('.full')
var fullnote = document.querySelector('.full-note')
var launching = document.querySelector('.launching')
var launchpad = document.querySelector('.launchpad')
var navbar = document.querySelector('.navbar')
var note = document.querySelector('.note')
var notes = document.querySelector('.notes')
var opening = document.querySelector('.opening')
var openNote = document.querySelector('#openNote')
var terminal = document.querySelector('.terminal')
var typing = document.querySelector('.typing')

/********** HANDLERS **********/
function handleAdding() {
  notes.style.display = 'flex'
}

function handleBackfull() {
  terminal.style.width = '70%'
  terminal.style.height = '430px'
}

function handleBackfullnote() {
  note.style.width = '70%'
  note.style.height = '430px'
}

function handleClose() {
  terminal.style.display = 'none'
}

function handleClosenote() {
  note.style.display = 'none'
}

function handleFull() {
  terminal.style.width = '90%'
  terminal.style.height = '90%'
}

function handleFullnote() {
  note.style.width = '90%'
  note.style.height = '90%'
}

function handleOpenLaunching() {
  launchpad.style.display = 'block'
  navbar.style.display = 'none'
  container.style.display = 'none'
}

function handleOpening() {
  terminal.style.display = 'block'
  container.style.display = 'flex'
  navbar.style.display = 'flex'
  launchpad.style.display = 'none'
}

function handleOpenNote() {
  note.style.display = 'block'
  container.style.display = 'flex'
  navbar.style.display = 'flex'
  launchpad.style.display = 'none'
}

function handleDeleting() {
  notes.style.display = 'none'
  typing.style.display = 'none'
}

function handleNotes() {
  typing.style.display = 'block'
}

/********** LISTENERS **********/
adding.addEventListener('click', handleAdding)
backfull.addEventListener('click', handleBackfull)
backfullnote.addEventListener('click', handleBackfullnote)
close.addEventListener('click', handleClose)
closenote.addEventListener('click', handleClosenote)
deleting.addEventListener('click', handleDeleting)
full.addEventListener('click', handleFull)
fullnote.addEventListener('click', handleFullnote)
launching.addEventListener('click', handleOpenLaunching)
notes.addEventListener('click', handleNotes)
opening.addEventListener('click', handleOpening)
openNote.addEventListener('click', handleOpenNote)
