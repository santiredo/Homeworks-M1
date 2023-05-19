// Closures


// Crear una funcion que retorne un objeto con 2 metodos
//  1- getName > retorna el nombre del empleado;
//  2- getPay > retorna el salario del empleado;
//  3- increasePay(%) > incrementa el salario en un porcentaje dado


function employeeManagment(name, salary){

    let employee = {
        name: name,
        salary: salary,

        getName(){
            return this.name;
        },

        getPay(){
            return this.salary;

        },

        increasePay(percentage){
            this.salary =  this.salary + (this.salary*(percentage/100));
            return this.salary;
        }
    }

    return employee;
}

let firstEmployee = employeeManagment('santi', 25000);

console.log(firstEmployee.getName());
console.log(firstEmployee.getPay());
console.log(firstEmployee.increasePay(10));




// Callbacks + Closures

// Crear una funcion que retorne un objeto con los siguientes metodos
//  1- getText > retorna el texto de la nota
//  2- changeText(newText) > modificar el texto con el nuevo texto
//  3- countWords > retorna la cantidad de palabras del texto
//  4- search(word, callback) > buscar una palabra y si la encuentro 
//     llamar al callback con el indice de la primera aparicion

function students(text){

    let note = {
        text: text,

        getText(){
            return this.text;
        },

        changeText(newText){
            this.text = newText;
            return newText;
        },

        countWords(){
            let textArray = this.text.split(' ');
            return textArray.length;
        },

        search(word, cb){

            let textArray = this.text.split(' ');

            for(let i = 0; i < textArray.length; i++){
                if(word === textArray[i]){
                    return cb(word, i);
                }
            }
            i = -1
            return cb(word, i);
        }
    }

    return note;
}

function cb(word, i){
    if(i === -1) return `"${word}" is not in the text`;

    return `"${word}" is in the position number ${i}`;
}

let firstStudent = students('Mi primer nota');

console.log(firstStudent.getText());
console.log(firstStudent.changeText('Mi segunda nota'));
console.log(firstStudent.countWords());
console.log(firstStudent.search('primer', cb));


// Crear una funcion que retorne un objeto con los siguientes metodos:
//  1- getTitle > retorna el titulo de la tarea;
//  2- completedHW > marca la tarea como completada;
//  3- incompletedHW > marca la tarea como incompleta
//  4- showStatus > muestra el estado acutal de la tarea;

function homework(title, completed){

    let homeworkData = {
        title: title,
        status: completed || false,

        getTitle(){
            return this.title;
        },

        showStatus(){
            return `Status: ${this.status ? "Completed" : "Incompleted"}`;
        },

        panel(completeHW){

            if(this.status){
                return completeHW;
            }

            
        }
    }

    return homeworkData;
}

function completeHW(homework){

    return `La tarea '${homework.getTitle()}' ha sido completada.
            ${homework.showStatus()}
    `

    return hola
}

let hw = homework("Do exercise", true);

let hola = 'hola';

console.log(hw.panel(completeHW(hw)))

console.log(hw.getTitle());
console.log(hw.showStatus());
console.log(hw.showStatus());

let firstHomework = homework("Completar informe");
