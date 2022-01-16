const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container")
const optionsList = document.querySelectorAll(".option");
const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2")
const optionsList2 = document.querySelectorAll(".option2");
const searchBox = document.querySelector(".search-box input");


let getCourses = document.getElementById('yourCourses');

let cpsc100 = {
    name: "CPSC 100 - Computational Thinking",
    prereqs: [],
};

let cpsc103 = {
    name: "CPSC 103 - Introduction to Systematic Program Design",
    prereqs: [],

};

let cpsc107 = {
    name: "CPSC 107 - Systematic Program Design",
    prereqs: ["CPSC 103"],

};

let cpsc110 = {
    name: "CPSC 110 - Computation, Programs, and Programming",
    prereqs: [],

};

let cpsc121 = {
    name: "CPSC 121 - Models of Computation",
    prereqs: [],

};

// one of 
let cpsc203 = {
    name: "CPSC 203 - Programming, Problem Solving, and Algorithms",
    prereqs: ["CPSC 103", "CPSC 110"],

};

// one of 
let cpsc210 = {
    name: "CPSC 210 - Software Construction",
    prereqs: ["CPSC 107", "CPSC 110"],

};

let cpsc213 = {
    name: "CPSC 213 - Introduction to Computer Systems",
    prereqs: ["CPSC 121", "CPSC 210"],

};

// one of 
let cpsc221 = {
    name: "CPSC 221 - Basic Algorithms and Data Structures",
    prereqs: ["CPSC 121", "CPSC 210"],

};

let cpsc259 = {
    name: "CPSC 259 - Data Structures and Algorithms for Electrical Engineers",
    prereqs: [],

};

// This course is restricted to students in one of these programs: BSC -OR- in one of these programs: DCSC
let cpsc298 = {
    name: "CPSC 298 - Co-operative Work Placement I",
    prereqs: [],

};

// one of 
let cpsc302 = {
    name: "CPSC 302 - Numerical Computation for Algebraic Problems",
    prereqs: ["CPSC 103", "CPSC 110"],

};

// one of 
let cpsc303 = {
    name: "CPSC 303 - Numerical Approximation and Discretization",
    prereqs: ["CPSC 103", "CPSC 110"],

}

 
let cpsc304 = {
    name: "CPSC 304 - Introduction to Relational Databases",
    prereqs: ["CPSC 221"],

}

let cpsc310 = {
    name: "CPSC 310 - Introduction to Software Engineering",
    prereqs: ["CPSC 213", "CPSC 221"],

}

  
let cpsc311 = {
    name: "CPSC 311 - Definition of Programming Languages",
    prereqs: ["CPSC 210"],

}

let cpsc312 = {
    name: "CPSC 312 - Functional and Logic Programming",
    prereqs: ["CPSC 210"],

}

let cpsc313 = {
    name: "CPSC 313 - Computer Hardware and Operating Systems",
    prereqs: ["CPSC 213", "CPSC 221"],

}

  
let cpsc314 = {
    name: "CPSC 314 - Computer Graphics",
    prereqs: ["CPSC 221"],

}

let cpsc317 = {
    name: "CPSC 317 - Internet Computing",
    prereqs: ["CPSC 213", "CPSC 221"],

}

let cpsc319 = {
    name: "CPSC 319 - Software Engineering Project",
    prereqs: ["CPSC 310"],

}

let cpsc322 = {
    name: "CPSC 322 - Introduction to Artificial Intelligence",
    prereqs: ["CPSC 221"],

}

let cpsc344 = {
    name: "CPSC 344 - Introduction to Human Computer Interaction Methods",
    prereqs: ["CPSC 210"],

}

let cpsc349 = {
    name: "CPSC 349 - Honours Research Seminar",
    prereqs: [],

}

// one of
let cpsc368 = {
    name: "CPSC 368 - Databases in Data Science",
    prereqs: ["CPSC 203", "CPSC 210"],

}

// CPSC 304 and one of CPSC 213, CPSC 261.
let cpsc404 = {
    name: "CPSC 404 - Advanced Relational Databases",
    prereqs: ["CPSC 304", "CPSC 213", "CPSC 261"],

}

// one of
let cpsc406 = {
    name: "CPSC 406 - Computational Optimization",
    prereqs: ["CPSC 302", "CPSC 303"],

}

let cpsc410 = {
    name: "CPSC 410 - Advanced Software Engineering",
    prereqs: ["CPSC 310"],

}

 
let cpsc411 = {
    name: "CPSC 411 - Introduction to Compiler Construction",
    prereqs: ["CPSC 213", "CPSC 221", "CPSC 311"],

}

let cpsc416 = {
    name: "CPSC 416 - Distributed Systems",
    prereqs: ["CPSC 313", "CPSC 317"],

}

let cpsc420 = {
    name: "CPSC 420 - Advanced Algorithms Design and Analysis",
    prereqs: ["CPSC 320"],

}

// one of
let cpsc421 = {
    name: "CPSC 421 - Introduction to Theory of Computing",
    prereqs: ["CPSC 221"],

}

let cpsc422 = {
    name: "CPSC 422 - Intelligent Systems",
    prereqs: ["CPSC 322"],

}

let cpsc426 = {
    name: "CPSC 426 - Computer Animation",
    prereqs: ["CPSC 314"],

}

// 3 credits of Computer Science and at least third-year standing
let cpsc430 = {
    name: "CPSC 430 - Computers and Society",
    prereqs: [],

}

let cpsc440 = {
    name: "CPSC 440 - Advanced Machine Learning",
    prereqs: ["CPSC 320", "CPSC 340"],

}

let cpsc449 = {
    name: "CPSC 449 - Honours Thesis",
    prereqs: ["CPSC 349"],

}

// third year standing
let cpsc491 = {
    name: "CPSC 491 - Interactive Digital Media Practicum",
    prereqs: ["CPSC 221", "CPSC 310", "CPSC 344"],

}

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
        };
        

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


function addCourse(course) {
    yourCourses.push(course);
}
















