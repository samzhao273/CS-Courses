const kek = document.getElementById("kek");

let getNextCourses = document.getElementById("nextCourses");
let selectedCourses = document.getElementById("selectedCourses");





let cpsc100 = {
    name: "CPSC 100",
    prereqs: [],
};

let cpsc103 = {
    name: "CPSC 103",
    prereqs: [],

};

let cpsc107 = {
    name: "CPSC 107",
    prereqs: ["CPSC 103 "],

};

let cpsc110 = {
    name: "CPSC 110",
    prereqs: [],

};

let cpsc121 = {
    name: "CPSC 121",
    prereqs: [],

};

// one of 
let cpsc203 = {
    name: "CPSC 203",
    prereqs: ["CPSC 103 ", "CPSC 110 "],

};

// one of 
let cpsc210 = {
    name: "CPSC 210",
    prereqs: ["CPSC 110 "],
};

let cpsc213 = {
    name: "CPSC 213",
    prereqs: ["CPSC 121 ", "CPSC 210 "],

};

// one of 
let cpsc221 = {
    name: "CPSC 221",
    prereqs: ["CPSC 121 ", "CPSC 210 "],

};

let cpsc259 = {
    name: "CPSC 259",
    prereqs: [],

};

// This course is restricted to students in one of these programs: BSC -OR- in one of these programs: DCSC
let cpsc298 = {
    name: "CPSC 298",
    prereqs: [],

};

// one of 
let cpsc302 = {
    name: "CPSC 302",
    prereqs: ["CPSC 103 ", "CPSC 110 "],

};

// one of 
let cpsc303 = {
    name: "CPSC 303",
    prereqs: ["CPSC 103 ", "CPSC 110 "],

}

 
let cpsc304 = {
    name: "CPSC 304",
    prereqs: ["CPSC 221 "],

}

let cpsc310 = {
    name: "CPSC 310",
    prereqs: ["CPSC 213 ", "CPSC 221 "],

}

  
let cpsc311 = {
    name: "CPSC 311",
    prereqs: ["CPSC 210 "],

}

let cpsc312 = {
    name: "CPSC 312",
    prereqs: ["CPSC 210 "],

}

let cpsc313 = {
    name: "CPSC 313",
    prereqs: ["CPSC 213 ", "CPSC 221 "],

}

  
let cpsc314 = {
    name: "CPSC 314",
    prereqs: ["CPSC 221 "],

}

let cpsc317 = {
    name: "CPSC 317",
    prereqs: ["CPSC 213 ", "CPSC 221 "],

}

let cpsc319 = {
    name: "CPSC 319",
    prereqs: ["CPSC 310 "],

}

let cpsc320 = {
    name: "CPSC 320",
    prereqs: ["CPSC 221 "],
}

let cpsc322 = {
    name: "CPSC 322",
    prereqs: ["CPSC 221 "],

}

let cpsc330 = {
    name: "CPSC 330",
    prereqs: ["CPSC 210 ", "CPSC 210 "],

}

let cpsc340 = {
    name: "CPSC 340",
    prereqs: ["CPSC 221 "],
    
}


let cpsc344 = {
    name: "CPSC 344",
    prereqs: ["CPSC 210 "],

}

let cpsc349 = {
    name: "CPSC 349",
    prereqs: [],

}

// one of
let cpsc368 = {
    name: "CPSC 368",
    prereqs: ["CPSC 203 ", "CPSC 210 "],

}

// CPSC 304 and one of CPSC 213, CPSC 261.
let cpsc404 = {
    name: "CPSC 404",
    prereqs: ["CPSC 304 ", "CPSC 213 ", "CPSC 261 "],

}

// one of
let cpsc406 = {
    name: "CPSC 406",
    prereqs: ["CPSC 302 ", "CPSC 303 "],

}

let cpsc410 = {
    name: "CPSC 410",
    prereqs: ["CPSC 310 "],

}

 
let cpsc411 = {
    name: "CPSC 411",
    prereqs: ["CPSC 213 ", "CPSC 221 ", "CPSC 311 "],

}

let cpsc416 = {
    name: "CPSC 416",
    prereqs: ["CPSC 313 ", "CPSC 317 "],

}

let cpsc417 = {
    name: "CPSC 417",
    prereqs: ["CPSC 313 ", "CPSC 317 "],

}

let cpsc420 = {
    name: "CPSC 420",
    prereqs: ["CPSC 320 "],

}

// one of
let cpsc421 = {
    name: "CPSC 421",
    prereqs: ["CPSC 221 "],

}

let cpsc422 = {
    name: "CPSC 422",
    prereqs: ["CPSC 322 "],

}

let cpsc425 = {
    name: "CPSC 425",
    prereqs: ["CPSC 221 "],

}



let cpsc426 = {
    name: "CPSC 426",
    prereqs: ["CPSC 314 "],

}

let cpsc427 = {
    name: "CPSC 427",
    prereqs: ["CPSC 221 "],
}

// 3 credits of Computer Science and at least third-year standing
let cpsc430 = {
    name: "CPSC 430",
    prereqs: [],

}

let cpsc440 = {
    name: "CPSC 440",
    prereqs: ["CPSC 320 ", "CPSC 340 "],

}

let cpsc444 = {
    name: "CPSC 444",
    prereqs: ["CPSC 344 "],

}
let cpsc445 = {
    name: "CPSC 445",
    prereqs: ["CPSC 320 "],

}


// third year standing
let cpsc491 = {
    name: "CPSC 491",
    prereqs: ["CPSC 221 ", "CPSC 310 ", "CPSC 344 "],
}




let allCpscCourses = [cpsc100, cpsc103, cpsc107, cpsc110, cpsc121, cpsc203, 
    cpsc210,cpsc213, cpsc221, cpsc259, cpsc298, cpsc302, cpsc303, cpsc304, cpsc310,
    cpsc311, cpsc312, cpsc313, cpsc314, cpsc317, cpsc319, cpsc320, cpsc330, cpsc340,
    cpsc322, cpsc344, cpsc349,cpsc368, cpsc404, cpsc406, cpsc410, cpsc411, cpsc416, 
    cpsc417, cpsc420, cpsc421, cpsc422, cpsc425, cpsc426,  cpsc427, 
    cpsc430, cpsc440, cpsc444, cpsc445, cpsc491
];



var kekeke = JSON.parse(localStorage.getItem('kek'));


function loadFutureCourses() {
    for (var i = 0; i < allCpscCourses.length; i++) {
        let prereqs = allCpscCourses[i].prereqs;
        if (containsAll(prereqs,kekeke)) {
            var paragraph = document.createElement('p');
            paragraph.innerText = allCpscCourses[i].name;
            getNextCourses.appendChild(paragraph)
        }

        // for (let j = 0; j < allCpscCourses.length; j++) {
        //     if (allCpscCourses[j].prereqs.includes(kekeke[i])) {
        //             var paragraph = document.createElement('p');
        //             paragraph.innerText = allCpscCourses[i].name;
        //             getNextCourses.appendChild(paragraph);

        //     }     
        // } 
    }

        // for (let i = 0; i < yourCourses.length; i++) {
        //     if (yourCourses[i] 
        // }
}



function containsAll(arr1, arr2) {
    return arr1.every(element => arr2.includes(element))
}



window.onload = function displayYourCourses() {
    showYourCourses();
    loadFutureCourses();

}




function showYourCourses() {
    
    for (var i = 0; i < kekeke.length; i++) {
        var paragraph = document.createElement('p');
        paragraph.innerText = kekeke[i];
        selectedCourses.appendChild(paragraph);
    }
}