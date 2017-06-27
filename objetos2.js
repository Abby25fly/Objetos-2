// Ejercicio 1 - Suma de Elementos
var assert = require("assert");
function sumaElemt(numIni,numFin) {
  const objeto = {
      inicio: numIni,
      fin: numFin,
      result: function(){
        var firstNum = (this.inicio * (this.inicio - 1)) / 2;
        var lastNum = (this.fin * (this.fin + 1)) /2;
        return lastNum - firstNum;}
  }
  return objeto.result();
}
console.log(sumaElemt(1,10)); // 55

 // mocha Test
 describe("Suma de Elementos", function (){
 	it("55 es la suma de los numeros entre 1 a 10", function (){
 				assert.equal(55,sumaElemt(1,10));
 	})
 })

// Ejercicio 2 - Súper coder
var assert = require("assert");
function superCoder(nombre, edad, ocupacion, genero) {
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
  this.mensaje = function (){
    if (this.edad > 17 && (this.ocupacion == "Web Developer" || "Estudiante Laboratoria") && this.genero == "Femenino" ) {
      return "you're awesome"; }
      else {
        return "Upsiii";}
  };
}

const friend = new superCoder ("Tamara", 22, "Estudiante Laboratoria", "Femenino")
console.log(friend.mensaje());

  // mocha Test
  describe("Súper Coder", function (){
   it("si es una mujer mayor de 17, Web Developer o Estudiante Laboratoria", function (){
         assert.equal("you're awesome",friend.mensaje());
   })
  })

// Ejercicio 3 - Arreglo y objeto
var assert = require("assert");
function myArray(arreglo) {
  const texto = {
      propiedad1: arreglo[0],
      propiedad2: arreglo[1],
      propiedad3: arreglo[2],
      propiedad4: arreglo[3],
      propiedad5: arreglo[4],
      propiedad6: arreglo[5],
      getString: function (){
        return `propiedad1-->${this.propiedad1}: propiedad2-->${this.propiedad2}: propiedad3-->${this.propiedad3}: propiedad4-->${this.propiedad4}: propiedad5-->${this.propiedad5}: propiedad6-->${this.propiedad6}`;
      }
    }
      return texto.getString();
}
    console.log(myArray([6,5,4,3,2,1])); // propiedad1-->6: propiedad2-->5: propiedad3-->4: propiedad4-->3: propiedad5-->2: propiedad6-->1

    // mocha Test
    describe("Arreglo", function (){
     it("recorriendo arreglos con Objetos", function (){
           assert.equal("propiedad1-->6: propiedad2-->5: propiedad3-->4: propiedad4-->3: propiedad5-->2: propiedad6-->1",myArray([6,5,4,3,2,1]));
     })
    })

// Ejercicio 4 - Clinica Lab
var assert = require("assert");
function clinicaLab(nombre, apellido, edad, genero, ciudad, pais) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.ficha = function (){
    /*
     return `Nombre: ${this.nombre} ${this.apellido} \nEdad:${this.edad}\nPaís: ${this.pais}`;
     */
     return `Nombre: ${this.nombre} ${this.apellido} Edad: ${this.edad}  País: ${this.pais}`;
  };
}
  const paciente = new clinicaLab("Bianca", "Pérez", 19, "Femenino", "santiago", "Chile");
  console.log(paciente.ficha()); // Nombre: Bianca Pérez Edad: 19  País: Chile

    // mocha Test
    describe("Clinica Lab", function (){
     it("Ficha de un paciente", function (){
           assert.equal("Nombre: Bianca Pérez Edad: 19  País: Chile",paciente.ficha());
     })
    })
