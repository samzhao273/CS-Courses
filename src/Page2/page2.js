const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container")
const optionsList = document.querySelectorAll(".option");
const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2")
const optionsList2 = document.querySelectorAll(".option2");
const searchBox = document.querySelector(".search-box input");


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

optionsList2.forEach( o => {
    o.addEventListener("click", () => {
        selected2.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer2.classList.remove("active");
    })
})


searchBox.addEventListener("keyup", function(e) {
    filterList(e.target.value);
});

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


