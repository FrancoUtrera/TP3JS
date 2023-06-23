
//1 tp 3

// let autito = {
//     color: "Rojo",
//     marca: "Volkswagen",
//     modelo: "Bora",
//     estado: "Apagado"
// }
// function encender() {
//     autito.estado = "Encendido";
//     console.log(autito.estado);
// }
// function apagar() {
//     autito.estado = "Apagado";
//     console.log(autito.estado);
// }
// 
// apagar();

// 2 tp 3

//    let usuario = {
//        nombre: "Alejandro", 
//        saldo: 0,
//    }
//    
//    function ingresar(monto) {
//        usuario.saldo = parseInt(usuario.saldo + monto);
//    }
//    function extraer(monto) {
//        usuario.saldo = parseInt(usuario.saldo - monto);
//    }
//    function informar() {
//        console.log(usuario.saldo);
//    }
//    
//    function operacion() {
//        let opera = 2;
//        opera = prompt("Quiere ingresar dinero (1/0)")
//        if (opera === "y") {
//            let monto = 0;
//            monto = prompt("Cual es el monto?");
//            ingresar(monto);
//        } if (opera === "n"){
//            opera = prompt("Quiere retirar dinero (Y/N)")
//            if (opera === "y") {
//            let monto = 0;
//            monto = prompt("Cual es el monto?");
//            extraer(monto);
//            } else{
//                opera = prompt("Quiere ver su saldo (Y/N)")
//                if (opera === "y") {
//                    informar();
//                }
//            }
//        }
//    }
//
//    operacion();


// 3 tp 3

// class Rectangulo {
//     
//     constructor(){
//         this.alto = Math.floor(Math.random() * 100) + 1;
//         this.ancho = Math.floor(Math.random() * 100);
//     }
//     
//     mostrarPropiedades(){
//         console.log("Alto: " + this.alto);
//         console.log("Ancho: " + this.ancho);
//     }
//     modificarPropiedades(){
//         this.alto = Math.floor(Math.random() * 100);
//         this.ancho = Math.floor(Math.random() * 100) + 1;
//     }
//     calArea(){
//         return this.alto * this.ancho;
//     }
//     calPerimetro(){
//         return 2*(this.alto + this.ancho); 
//     }
// }
// 
// let rectangulo = new Rectangulo();
// rectangulo.mostrarPropiedades();
// rectangulo.modificarPropiedades();
// rectangulo.mostrarPropiedades();
// 
// let area = rectangulo.calArea();
// console.log("Area " + area);
// 
// let perimetro = rectangulo.calPerimetro();
// console.log("Perimetro " + perimetro);

// 4 Tp3

// class Objetos{
//         constructor(codigo, nombre, precio){
//             this.codigo = codigo;
//             this.nombre = nombre;
//             this.precio = precio;
//         }
//         MostrarPropiedades(){
//             console.log("Codigo: ",this.codigo,"Nombre: ", this.nombre,"Precio: ", this.precio);
//         }
// }
// 
// let producto1 = new Objetos("1","Leche","200");
// let producto2 = new Objetos("2","Pan","100");
// let producto3 = new Objetos("3","Carne","1200");
// 
// let productos = [producto1,producto2,producto3];
// 
// for (let i = 0; i < productos.length; i++) {
//     productos[i].MostrarPropiedades();
// }

// 5 tp 3
// class Persona{
//     constructor(nombre, edad, DNI, sexo, peso, altura, año){
//         this.nombre=nombre;
//         this.edad=edad;
//         this.DNI=DNI;
//         this.sexo=sexo;
//         this.peso=peso;
//         this.altura=altura;
//         this.año=año;
//     }
// 
//     
//     mostrarDatos(){
//         console.log("Nombre: ", this.nombre, "Edad: ",
//                     this.edad, "DNI: ", this.DNI, "Sexo: ",
//                     this.sexo, "Peso: ", this.peso, "Altura: ", this.altura,  "Año de nacimieto: ", this.año,);
//     }
//     mostrarGen(){
//         if (this.año >= 1994 && this.año <= 2010  ) {
//             console.log("Es de la generación Z, Expancion masiva de internet");
//         }else if (this.año >= 1981 && this.año <= 1993) {
//             console.log("Es de la generación Y, Inicio de la Digitalizacion");
//         }else if (this.año >= 1969 && this.año <= 1980) {
//             console.log("Es de la generación X, Cricis del 73 y transición española");
//         }else if (this.año >= 1949 && this.año <= 1968) {
//             console.log("Es la Generacion Baby Boom, Paz y explocion demográfica");
//         }if (this.año >= 1930 && this.año <= 1948) {
//             console.log("Es la Silent Generation, Conflictos bélicos");
//         }
//     }
//     mayorEdad(){
//         if (this.edad >= 18) {
//             console.log("Es Mayor de Edad");
//         }else{
//             console.log("Es Menor de Edad");
//         }
//     }
// }
// 
// 
// let persona1 = new Persona("Pepe",12,0, "Masculino", "98 Kg", "150 cm", 2008);
// let persona2 = new Persona("Maria" ,37,32359934, "Femenino", "58 Kg","120 cm" , 1986);
// let persona3 = new Persona("Raul",51,54443553, "Masculino", "98 Kg", "150 cm", 1972);
// let persona4 = new Persona("Yesica",73,64334234, "Femenino", "58 Kg","120 cm" , 1950);
// let persona5 = new Persona("Monica",88,43343144, "Femenino", "58 Kg","120 cm" , 1935);
// 
// let personas = [persona1,persona2,persona3,persona4,persona5]
// 
// for (let i = 0; i < personas.length; i++) {
//     personas[i].mostrarDatos();}
// 
// persona1.mostrarGen();
// persona2.mostrarGen();
// persona3.mostrarGen();
// persona4.mostrarGen();
// persona5.mostrarGen();
// 
// 
// persona1.mayorEdad();
// persona2.mayorEdad();
// persona3.mayorEdad();
// persona4.mayorEdad();
// persona5.mayorEdad();

// 6 tp 3

// class Libro {
//     constructor(ISBN, titulo, autor, numPaginas) {
//         this._ISBN = ISBN;
//         this._titulo = titulo;
//         this._autor = autor;
//         this._numPaginas = numPaginas;
//     }
//     get ISBN() {
//         return this._ISBN;
//     }
//     set ISBN(ISBN) {
//         this._ISBN = ISBN;
//     }
//     get titulo() {
//         return this._titulo;
//     }
//     set titulo(titulo) {
//         this._titulo = titulo;
//     }
//     get autor() {
//         return this._autor;
//     }
//     set autor(autor) {
//         this._autor = autor;
//     }
//     get numPaginas() {
//         return this._numPaginas;
//     }
//     set numPaginas(numPaginas) {
//         this._numPaginas = numPaginas;
//     }
//     mostrarLibro() {
//         console.log(`El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numPaginas} páginas.`);
//     }
// }
//     const libro1 = new Libro("ISBN-123456789", "El señor de los anillos", "J.R.R. Tolkien", 1178);
//     const libro2 = new Libro("ISBN-987654321", "Cien años de soledad", "Gabriel García Márquez", 432);
//     
//     libro1.mostrarLibro();
//     libro2.mostrarLibro();
//     
//     if (libro1.numPaginas > libro2.numPaginas) {
//     console.log(`El libro "${libro1.titulo}" tiene más páginas.`);
//     } else if (libro1.numPaginas < libro2.numPaginas) {
//     console.log(`El libro "${libro2.titulo}" tiene más páginas.`);
//     } else {
//     console.log("Ambos libros tienen la misma cantidad de páginas.");
// }
// 