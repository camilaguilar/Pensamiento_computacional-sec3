// Pantalla actual del programa
// 0 = inicio
// 1 = pantalla principal; Peckkii
// 2 = Fin

let estado = 0;

// Guarda la cantidad de clicks
let clicks = 0;

//Determina cuantos anillos son visibles, parte en 0
let circulosVisibles = 0;

//Cantidad de ellipses que apareceran cuando se presiona una tecla
let circulosPorTecla = 20;
 
// Sonido que se reprodcue cuando las esporas aparecen
let sonido;

// Configuración de anillo de ellipses

// Tamaño de ellipses anillos
let size = 10;

// Radio maximo de los anillos

let r = 230;

// Variable para definir cada ángulo de las ellipses de 10 x 10 

let angle = 0;

//Número de ellipses en el anillo

let num = 40;

// Espacio entre anillos

let esp = 35;

function preload() {
 
  // El sonido es cargado antes de comenzar
  sonido = loadSound("audio p5js.mp3");

}

function setup() {
  createCanvas  (900 , 700);
 
  // Se cambia la unidad predeterminada a grados, permite que cos(); y sin(); puedan estar en grados
  angleMode(DEGREES);
}

function draw() {
  background (233, 227, 216);

  // Pantalla inicial
  if (estado == 0) {

  // Color rosado
  fill(195, 120, 140);
  // Sin borde
  noStroke(); 
  // Dibuja un círculo grande en el centro
  ellipse (width/2, height/2, 500, 500);

  // Cambia el color del texto  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(28);
    
  //Mensaje inicial
  text("HAZ CLICK y VER LAS ESPORAS", width/2, height/2);
  }

  // Pantalla principal
  else if (estado == 1) {
  noStroke();
    
// sin (frameCount) genera un movimiento oscilante de la ellipse principal por fotogramas
let latido = sin(frameCount * 0.6) * 100;
    
  // Se dibuja una ellipse centrada en (x, y) con un ancho y alto de 500 px que aumenta y disminuye su tamaño
  ellipse(900/2, 350, 500 + latido, 500 + latido);
   
  // Se aplica una condicional en la ellipse que reaccione al toque del mouse
  // Si el mouse es tocado debe pintar la ellipse de rosa
  if(mouseIsPressed) {
  fill(240, 210, 210, 255);
  }
  // Si esto NO pasa la ellipse debe ser rosa oscuro  
  else {
    fill(195, 120, 140);
  }
    
    // Se dibuja una ellipse centrada en (x, y) con un ancho y alto de 500 px 
    ellipse(900/2, 350, 500 + latido, 500 + latido);

    // Llama a la función que dibuja los anillos de ellipses
    drawRings();

    // Color del texto
    fill(80);
    textAlign(CENTER);
    textSize(18);

    text ("Presiona una tecla para ver a Peckii", width/2, 50);
    
    // Muestra la cantidad de clicks realizados
    text ("clicks para finalizar:" + clicks + "/15", width/2, 80);
 }
    // Pantalla final
    else if (estado == 2) {
      
    // Fondo oscuro
    background(120, 20, 40);
// Animcación de exapansión funciona en fotogramas
let expansion = sin (frameCount * 2) * 100;
    fill(255, 180, 180, 120);
    // Ellipse oscilante
    ellipse(width/2, height/2, 400 + expansion, 400 + expansion);

    // Texto blanco
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(34);
    text("FIN", width/2, height/2);
  }
} 


// Se nombra a la función que dibuja los anillos de ellipse de 10 x 10px
function drawRings() {
 
    // mantener el bucle de ellipses sin que sea afectada por la condición de mouseIsPressed
    push();
 
    // translate(); desplaza el origen de las coordenadas, al centro de la ellipse de 500x500 px
    // for(); formula los anillos radiales a partir de distintos radios
    translate(width/2, height/2);
  
// Cuenta la cantidad de círculo dibujados
let contador = 0;
  
  // Recorre todos los radios
  for (let radio = 40; radio < r; radio += esp) { 
    
  // Recorre los círculos de cada anillo
  for (let i=0; i< num; i++) {

  // Dibuja si todavia no supera la cantidad de anillos visibles
  if(contador < circulosVisibles) {

// Calcula el angulo de los anillos
let angle = 360/num * i;

// Calcula las coordenadas
    
let x = radio * cos(angle);
let y = radio * sin(angle);

// Calcula distancia entre el mouse y el centro de la ellipse
let d = dist(mouseX, width/2, mouseY, height/2);

// Calcula esa distancia en un tamaño
let tamano = map(d, 0, 300, 30, 8);
    
   // Evita que el tamaño sea meñnor que 8 o mayor que 30
  tamano = constrain(tamano, 8, 30);

  // Color rojo si el mouse es presionado
  if (mouseIsPressed) {
  fill(255, 0, 0, 170);
  }
  // Si NO, color rosa
  else {
  fill(255, 190, 190, 170);
}
   // Dibuja la ellipse 
  ellipse (x, y, tamano, tamano);
    }

   // Aumenta el contador 
  contador++;
  }
}

// Calcula la distancia del mouse al centro 
let centroDist = dist(mouseX, mouseY, width/2, height/2);

// Cambia el tamaño del círculo central
let centroTamano = map(centroDist, 0, 200, 120, 50);
  
  // Limita el tamaño
  centroTamano = constrain(centroTamano, 50, 220);
 
  // Si el mouse SI es presionado el círculo central cambia de color
  if (mouseIsPressed) {
  fill(255, 0, 0, 90);
}
  // Si esto NO ocurre el  círculo mantiene el color
  else {
  fill(255, 230, 230);
}
  //Se dibuja el círculo central en el eje (0,0)
  ellipse(0, 0, centroTamano, centroTamano);

  //Cierre parentesis
  pop(); 
  }

// Se ejecuta cada vez que se hace click
function mousePressed() {
  // Si esta en la pantalla inicial
  if (estado == 0) {

    // Cambia al estado principal
    estado = 1;
  // Escucha Mushroom music
  sonido.play();
  }

    // Si ya esta interactuando
  else if(estado == 1) {

    // Suma un click
    clicks++;

    // Cuando llegue a 15 
    if (clicks >= 15) {

    // Cambia al estado final
    estado =2;
    }
  }
}
function keyPressed(){
   
    // Solo funciona en el estado = 1 
    if (estado == 1) {

    // Si esto pasa, hace visibles 20 círculos por tecla
    circulosVisibles += circulosPorTecla;
  }
}