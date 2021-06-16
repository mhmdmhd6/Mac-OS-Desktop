var terminal = document.querySelectorAll('.terminal')[0];
var close = document.querySelectorAll('.close')[0];
var opening = document.querySelectorAll('.opening')[0];
var full = document.querySelectorAll('.full')[0];
var backfull = document.querySelectorAll('.backfull')[0];

close.onclick = function(){
    terminal.style.display = 'none';
}
opening.onclick = function(){
    terminal.style.display = 'block';
}

full.onclick = function(){
    terminal.style.width = '90%';
    terminal.style.height = '90%';
}

backfull.onclick = function(){
    terminal.style.width = '70%';
    terminal.style.height = '430px';
}