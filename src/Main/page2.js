const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container")
const optionsList = document.querySelectorAll(".option");
const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2")
const optionsList2 = document.querySelectorAll(".option2");
const startOver = document.getElementById("startOverButton");





let getCourses = document.getElementById("yourCourses");



 

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
})

optionsList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    })
})


selected2.addEventListener("click", () => {
    optionsContainer2.classList.toggle("active");
})

let course = "";
let yourCourses = [];

optionsList2.forEach( o => {
    o.addEventListener("click", () => {
        course = o.querySelector("label").textContent;
        optionsContainer2.classList.remove("active");
        if (!yourCourses.includes(course)) {
            addCourse(course);
            console.log(yourCourses);
            var paragraph = document.createElement('p');
            paragraph.innerText = course;
            getCourses.appendChild(paragraph);
            localStorage.setItem('kek', JSON.stringify(yourCourses));
        };
    })
})









const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach( option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";   
        } else {
            option.style.display = "none";
        }
    });
};


function addCourse(course) {
    yourCourses.push(course);
}


startOver.addEventListener("click", function() {
    localStorage.clear();
    location.reload();


})































