  //let size = Se determina el tamaño de las ellipse (10px) al interior de la ellipse base(500px)
  //let r = limita el radio de la composición
  //let angle = variable para definir el ángulo x de cada ellipse de 10 px
  //let num = cantidad de ellipses en el anillo de ellipses
  //let esp = se define el espacio entre cada anillo de ellipses  
  let size = 10; 
  let r = 230; 
  let angle = 0;
  let num = 45;
  let esp = 30;

function setup() {
  //Se crea un lienzo de 800 x 600 px
  createCanvas  (800 , 600);
  
  //Se cambia la unidad predeterminada a grados, permite que cos(); y sin(); puedan estar en grados
  angleMode(DEGREES);
}

function draw() {
  
  //Se establece el color de fondo, 
  background (233 ,227 ,216);
  
  //Se elimina el borde de las figuras
  noStroke();
  
  //sin (frameCount) genera un movimiento oscilante en la ellipse principal
  let latido = sin(frameCount * 0.6) * 20;
  {
  //Se dibuja una ellipse centrada en(x, y,) con un ancho y alto de 500 px, esta es la base para el patrón a crear
  //ellipse (400, 300 ,500, 500);{
    ellipse(400, 300, 500 + latido, 500 + latido);{
    
  //Se aplica una condicional en la ellipse que reaccione al toque del mouse 
  //Si el mouse es tocado debe pintar la ellipse de rosa pastel
  if(mouseIsPressed) 
  fill(240, 210, 210, 255);
  
  //Si esto no pasa la ellipse debe ser rosa oscuro  
  else 
  fill(195, 120, 140);
}
  
  //Se llama a la función que dibujara los anillos de ellipses
  drawRings();
}
  //Se llama a la función que dibujara los anillos de ellipse de 10x10px
function drawRings() {
  
  //Se utilza como un parentesis de apertura, en  este caso ayuda a mantener mi bucle de ellipses sin que sea afectada por la condición de mouseIsPressed
  push(); 
  
  //translate(); desplaza el origen de las coordenas, al centro de la ellipse de 500x500 px
  //for(); formula los anillos radiales a partir de distintos radios
  translate(width/2, height/2);
  for (let radio = 40; radio < r; radio += esp) {
    
    
  //Se determina un bucle para generar una 
  //composición radial de ellipses de 10x10 px 
  //Transalate(); el origen de coordenadas se desplaza al centro del dibujo
  //for(); repite la ellipse según el número determinado (num) *i veces
  //let angle(); Se calcula un ángulo que permite dividir en 360° grados del círculo
  //let x =
  //let y = 
  for (let i=0; i< num; i++) {
  let angle = 360/num * i;
  let x = radio * cos(angle);
  let y = radio * sin(angle);
    
  //dist(); calcula la distancia entre el mouse y las ellipse de 10 px
  //map(); transforma la distancia en un tamaño dinámico
  //constrain(); le pone un limite al tamaño minimi y máximo de las ellipses
  let d = dist(mouseX, width/2, mouseY, height/2);
  let tamano = map(d, 0, 300, 30, 8);
  tamano = constrain(tamano, 8, 30);
  
  //Condicional para los anillos de ellipses
  //if(); sie el mouse es presionado las ellipse deben cambiar a amarillo
  if (mouseIsPressed) {
  fill(255, 190, 20, 170);
  }
  
  //Si esto no ocurre las ellipses serán de color rosado
  else{
  fill(255, 190, 190, 170);
}
  //ellipse(); dibuja cada ellipse en el radio determinado del la ellipse base
  ellipse (x, y, tamano, tamano);
}
}
  //dist(); calcula la distancia entre la posición actual del mouse y el centro de la ellipse
  //mouseX y mouseY son la posición x del mouse en la pantalla
  //width y height marcan el centro de la composición del radio
  
  //map(); transforma la distancia en un nuevo valor de tamaño para el cruculo central cuando el mouse está cerca del centro el círculo aumenta su tamaño
  //cuando el mosue se aleja el círculo disminuye lentamente
  //0 y 300 responden al rango de distancia
  
  //constrain(); Limita el tamaño del círculo del centro
  //50 es el tamaño minimo alcanzado
  //120 es el tamaño maximo del circulo
  let centroDist = dist(mouseX, mouseY, width/2, height/2);
  let centroTamano = map(centroDist, 0, 300, 120, 50);
  centroTamano = constrain(centroTamano, 50, 120);
  
  //Si el mouse es presionado el círculo central cambia de color
  if (mouseIsPressed) {
  fill(255, 230, 230);
}
  //Si esto no ocurre el  círculo mantiene su color base
  else {
  fill(255, 230, 230);
}
  //ellipse(); dibuja el círculo central en el eje (0,0)
  ellipse(0, 0, centroTamano, centroTamano);
      
  //Se cierra parentesis
  pop();
  
  }
}