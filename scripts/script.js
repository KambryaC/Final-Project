/*
  Student Name: Kambrya Carter
	File Name: script.js
	Current Date: 11/17/2023
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}

const questions = document.querySelectorAll('.question')
questions.forEach(question => {
  question.addEventListener('click',() => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});
