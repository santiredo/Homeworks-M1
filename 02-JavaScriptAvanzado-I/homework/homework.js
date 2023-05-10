x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);               // 10  ✔
   console.log(a);               // 8   ✔
   var f = function (a, b, c) {
      b = a;
      console.log(b);            // 8   ✔
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);               // 10  ❌  >>  9
};
c(8, 9, 10);
console.log(b);                  // 10  ✔
console.log(x);                  // 10  ❌  >>  1


console.log(bar);                   // undefined    ✔
console.log(baz);                   // undefined    ❌  >>  'baz is not defined'
foo();
function foo() {
   console.log('Hola!');            // Hola!        ✔
}
var bar = 1;
baz = 2;


var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);                // Tony     ❌  >>  Franco


var instructor = 'Tony';
console.log(instructor);                // Tony     ✔
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);          // Franco   ✔
   }
})();
console.log(instructor);                // Tony     ✔


var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);             // The Flash        ✔
   console.log(pm);                     // Reverse Flash    ✔
}
console.log(instructor);                // Tony             ❌  >>  The Flash
console.log(pm);                        // Franco           ✔


console.log(6 / "3")            // 2                 ✔  
console.log("2" * "3")          // 6                    ✔                    
console.log(4 + 5 + "px")       // 9px                  ✔
console.log("$" + 4 + 5)        // $45                  ✔
console.log("4" - 2)            // 2                    ✔
console.log("4px" - 2)          // NaN                  ✔
console.log(7 / 0)              // 7                    ❌  >>  Infinity
console.log({}[0])              // [Object: object] 0   ❌  >>  undefined: Estoy tratando de acceder al atributo 0 de un objeto vacio
console.log(parseInt("09"))     // 9                    ✔
console.log(5 && 2)             // 5                    ❌  >>  2
console.log(2 && 5)             // 2                    ❌  >>  5
console.log(5 || 0)             // 5                    ✔
console.log(0 || 5)             // 5                    ✔
console.log([3]+[3]-[10])       // -2                   ❌  >>  23
console.log(3>2>1)              // true                 ❌  >>  false
console.log([] == ![])          // false                ❌  >>  true


function test() {
    console.log(a);             // undefined: para las expression es necesario declarar
                                // la variable antes que solicitar el dato,                 ✔
                                // la variable tiene un espacio guardado en memoria
                                // (por eso undefined), pero no su valor

    console.log(foo());         // 2: para las funciones declaradas como objectos no
                                // es obligatorio invocarlas despues de declararlas         ✔
                                // ya que el lector de codigo apilo todos los
                                // contextos en una prelectura del codigo
 
    var a = 1;
    function foo() {
       return 2;
    }
}
 
test();


var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';             // la funcion retorna 'Meow Mix' pero por consola no se
                                          // muestra nada ya que no hay un console.log()
      return snack;
   }
   return snack;                          // ❌ >> la funcion retornaria undefined porque food = false
}
getFood(false);                     

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());   // Aurelio De Rosa            ✔

var test = obj.prop.getFullname;

console.log(test());                   // [ Function: getFullname ]  ❌  >>  undefined


function printing() {
    console.log(1);                     // 1        ✔
    setTimeout(function () {                
       console.log(2);                  // 4        ✔
    }, 1000);
    setTimeout(function () {
       console.log(3);                  // 3        ✔
    }, 0);
    console.log(4);                     // 2        ✔
 }
 
 printing();