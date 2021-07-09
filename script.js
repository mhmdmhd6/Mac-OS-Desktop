//terminal app
var container = document.querySelectorAll('.container')[0];
var terminal = document.querySelectorAll('.terminal')[0];
var close = document.querySelectorAll('.close')[0];
var opening = document.querySelectorAll('.opening')[0];
var full = document.querySelectorAll('.full')[0];
var backfull = document.querySelectorAll('.backfull')[0];
//note app
var note = document.querySelectorAll('.note')[0];
var opennote = document.querySelectorAll('.opennote')[0];
var closenote = document.querySelectorAll('.close-note')[0];
var fullnote = document.querySelectorAll('.full-note')[0];
var backfullnote = document.querySelectorAll('.backfull-note')[0];
var deleting = document.querySelectorAll('.deleting')[0];
var typing = document.querySelectorAll('.typing')[0];
var notes = document.querySelectorAll('.notes')[0];
var adding = document.querySelectorAll('.adding')[0];
//launchpad app 
var launching = document.querySelectorAll('.launching')[0];
var launchpad = document.querySelectorAll('.launchpad')[0];
var navbar = document.querySelectorAll('.navbar')[0];


launching.onclick = function(){
    launchpad.style.display = 'block';
    navbar.style.display = 'none';
    container.style.display = 'none';
}

close.onclick = function(){
    terminal.style.display = 'none';
}
opening.onclick = function(){
    terminal.style.display = 'block';
    container.style.display = 'flex';
    navbar.style.display = 'flex';
    launchpad.style.display = 'none';
}

full.onclick = function(){
    terminal.style.width = '90%';
    terminal.style.height = '90%';
}

backfull.onclick = function(){
    terminal.style.width = '70%';
    terminal.style.height = '430px';
}
opennote.onclick = function(){
    note.style.display = 'block';
    container.style.display = 'flex';
    navbar.style.display = 'flex';
    launchpad.style.display = 'none';
}
closenote.onclick = function(){
    note.style.display = 'none';
}
fullnote.onclick = function(){
    note.style.width = '90%';
    note.style.height = '90%';
}
backfullnote.onclick = function(){
    note.style.width = '70%';
    note.style.height = '430px';
}
adding.onclick = function(){
    notes.style.display = 'flex';
}
deleting.onclick = function(){
    notes.style.display = 'none';
    typing.style.display = 'none';
}
notes.onclick = function(){
    typing.style.display = 'block';
}