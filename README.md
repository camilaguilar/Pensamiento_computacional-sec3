## Pensamiento_computacional-sec3
Fundamento y contenido realizado sobre el EXAMEN
####  Sistema visual dinámico e interactivo en p5.js
##  EXAMEN
#####  Para el desarrollo del encargo

#  Peckii
#### ***Camila Aguilar Venegas***
  


peckii es un sistema visual interactivo desarrolllado en p5js. El proyecto construye una composición basada en radios, compuesta por múltiplos anillos de ellipses que reaccionan al movimiento y toque del mouse.
*Se exploró*
  - Op Art    
El sistema funciona mediante reglas matematicas y condicionales que modifican: tamaño, color y comportamiento visual de los elementos.

En pantalla se observa una gran ellipse (500px) central que funciona como base de la composición visual. Todo ocurre sobre esta ellipse, en esta aparece una estructura de múltiples anillos circulares formados por ellipses de 10px, distribuidas radialmentes en la composición expandiendose, pulsando. El sistema responde de manera constante según como el usuario interactue, provocando que las formas crezacan o disminuyan, cambien de color. La ellipse principal presenta un movimiento oscilante similar a un latido es por esto que es nombrado como *let latido();*

#####  Qué elementos visuales aparecen en la obra
  - Una ellipse base de 500px que funciona como estructura. 
 -  Un círculo central reactivo , cambia de tamaño según como se la interacción con el canva.
 -  Múltiples anillos radiales.
 -  Ellipses de 10px distribuidas según el diametro y el radio de la ellipse base
 -  variaciones de escala producidas mediante map();
 -  Cambios cromáticos generados por la condición mouseIsPressed();
 -  Movimiento oscilante producido por sin(frameCount);
 -  Transparencias y superposición de elementos
       - Figuras geometricas circulares
       - Repetición
       - Ritmo visual
       - Simetría radial  
En la composicón se generan inputs continuos tales como:
  - *mouseX:* Detecta la posición horizontal del mouse
  - *mouseY:* Detecta la posición vertical del mouse
  - *MouseIsPressed:* Detecta si el usuario está presionando el mouse
  - *frameCount:* Animación continua con el tiempo que responde a fotogramas, comienza en 0 y cada vez que el código se ejecuta por completo incrementa en 1.

Estos imputs modifican *tamaño, color, escala*

A su vez los *Outputs* visuales generados son:
  - Crecimiento y disminución de las ellipses según la cercanía  del mouse
  - variación del tamaño del círculo central
  - Cambio de color al presionar el mouse
  - Movimiento oscilante de la ellipse base
  - Sensación óptica de vibración y movimiento
  - Dinamismo del sistema visual a partir de la interacción del usuario  
El resultado es una composición generativa reactiva que responde constantemente al comportamiento de quíen observa e interactua.

####  ***DESCRIPCIÓN FORMAL_***
 
La idea fundamental busca intencionar la interacción con la matriz en conjunto. La idea principal del proyecto, se genera una obra que responde al OpArt de manera visual, utilizando la interacción con el mouse y el teclado como medio que dialogante con la composición, estos actuan como el medio observador realizando la activación de la obra evitando el movimiento del usuario, el cuál es necesario al ver una obra común de esta corriente artistica.
  
Los referentes utilizados para la realiazción del encargo *Sistema visual dinámico e interactivo* en P5.js responden a la rama OpArt.   
El OpArt hace uso del ojo humano para engañarlo a través de ilusiones ópticas o *trampantojos*, este último es una técnica artistica diseñada para engañar a la vista jugando con la perspectiva, las luces y las sombras, aprovecha esto para hacer pasar formas planas por tridimensionales.
En el OpArt el espectador debe participar de manera activa con la obra, ya sea moviéndose o desplazándose y así poder captar el efecto óptico de manera optima, justo aquí es donde estas obras pueden traducirse a tráves de un pensamiento computacional buscando la interacción

Peckii es nombrada tomando como referente un hongo llamado 

###  Referentes
La artista <ins>***Bridget Riley***</ins>  
Bridget nació en Norwood, Londres. Estudió en Goldsmiths College entre los años 1949 a 1952 en el Royal College of Art desde 1952 a 1955. Bridget comenzó pintando  figuras  con un estilo semi impresionista, al rededor del año 1958 su arte muta al puntillsimo, dedicandose principalmente a los paisajes. En 1960  desarrollo un estilo que en el que exploraba las potencialidades de los fenómenos ópticos.

<ins>***Referentes-Obras destacadas***</ins>
  - Obra sin título *1965 (En exhibición en la Tate Britain).* ![Obra sin título 1965](https://media.tate.org.uk/art/images/work/P/P07/P07104_10.jpg)
  -  Sin título *1965 (En exhibición en la Tate Britain).* ![Obra sin título 1965](https://media.tate.org.uk/art/images/work/P/P07/P07106_10.jpg)
  - Obra sin título *1965 (En exhibición en la Tate Britain).* ![Obra sin título 1965](https://media.tate.org.uk/art/images/work/P/P07/P07109_10.jpg)
###  *artistas no identificados*
- autor no identificado <img width="735" height="731" alt="referente1" src="https://github.com/user-attachments/assets/4b34c1e8-0f95-4945-b92e-32d3c70a5332" />
- autor no identificado
<img width="640" height="640" alt="referente2" src="https://github.com/user-attachments/assets/f6d3dcb8-0af9-4901-8019-9dd28e10ea9d" />
<img width="1280" height="960" alt="fundamenti github 2" src="https://github.com/user-attachments/assets/f8a14c9e-f4ce-4360-b9e8-e4fee11ed468" />
<img width="1500" height="1125" alt="Fundamento github" src="https://github.com/user-attachments/assets/9d4362f7-f9b2-4fac-b36f-7173611c6f37" />

###  Input y Output y sistema
####  Diagrama de flujo:  
[DIAGRAMA_FLUJO-PC.pdf](https://github.com/user-attachments/files/28163539/DIAGRAMA_FLUJO-PC.pdf)

######   Inputs
  *mouseX*: Detecta la posición horizontal del mouse
  *mouseY*:	Detecta la posición vertical del mouse
  *mouseIsPressed*:	Detecta si el usuario presiona el mouse
  *frameCount*: Genera movimiento continuo de acuerdo a fotogramas(fps) parte en 0, cada vez que el código se repite este aumenta en 1

######  Procesos principales
-   cos (angle) / sin (angle) : distribuye las ellipses alreddedor de un radio
  
-   dist () : calcula la distancia entre el mouse y cada ellipse del sistema
  
- map () : transforma la distancia en tamaños dinamicos, permitiendo la interacción (mouse cerca: ellipses grandes, mouse lejos: ellipses pequeñas)
  
-  constrain () : limita el tamaño mínimo y máximo de las figuras, esto evita deformaciones.
  
- if (mouseIsPressed) : modifica color, contraste e interacción
  
-  sin (frameCount): movimiento oscilante de expansión y contracción de la ellipse principal
  

######  Outputs
 -  Variación de tamaño: las ellipsen crecen o disminuyen
  
 - Cambio cromático: Las figuras cambian de color
  
 -  Movimiento pulsante: La ellipse principal oscila
  
 -  composición radial: Se generan anillos dinámicos

El sistema funciona mediante un relación entre el observador y el sistema interactivo. el usuario introduce información al mover o presionar el mouse. La posición del cursor es capturada mediante mouseX y mouseY, mientras que mouseIsPressed detecta la presión del mouse. El sistema transforma esa información en ellementos viasuales dinamicos. de esta manera la composición deja de ser estatico y se transforma en un sistema visual generativo reactivo.

####  *Documentación Proceso*
-<img width="1919" height="898" alt="Captura de pantalla 2026-05-22 121225" src="https://github.com/user-attachments/assets/3c442a95-983c-4726-b225-f64b34c9a6c3" />

- <img width="984" height="639" alt="Captura de pantalla 2026-05-22 121235" src="https://github.com/user-attachments/assets/645cd09f-7b97-42f8-b16b-ec29567e28a8" />

- <img width="826" height="672" alt="Captura de pantalla 2026-05-22 121241" src="https://github.com/user-attachments/assets/2c8d63d1-a844-4645-a21b-106cd4d99582" />
- <img width="1831" height="961" alt="Captura de pantalla 2026-05-22 122643" src="https://github.com/user-attachments/assets/b2b194cd-e5f2-4c99-beec-d9d3159d1aca" />
- <img width="913" height="728" alt="Captura de pantalla 2026-05-22 122652" src="https://github.com/user-attachments/assets/635be4ae-26df-4a6b-b433-9f4ad377515d" />
- <img width="817" height="630" alt="Captura de pantalla 2026-05-22 122701" src="https://github.com/user-attachments/assets/3ca7bd9a-e300-4aa8-9067-9104d86cb400" />
<img width="1900" height="765" alt="Captura de pantalla 2026-06-25 092422" src="https://github.com/user-attachments/assets/f3d2e4c8-183a-4588-90c0-61c50d97c615" />
<img width="1913" height="830" alt="Captura de pantalla 2026-06-25 094606" src="https://github.com/user-attachments/assets/f84401a4-a0fd-45c0-acd6-ac4004f20f86" />


## Link p5js
 https://editor.p5js.org/camila.aguilar2/sketches/sHf_k9sBr


     
###  *Referencias Youtube/páginas web*
  - https://milesberry.net/2023/3/op-art-p5js/
  - https://amplifydai.com/recursos/arte-generativo-p5js/
  - https://thecodingtrain.com/
  - https://www.youtube.com/watch?v=_gz8FMduwRc&list=LL&index=4
  - https://www.youtube.com/watch?v=RrSOv9FH6uo&list=LL&index=1
#### *Referencias_p5js*
- angleMode(); https://p5js.org/es/reference/p5/angleMode/
- sin()/ cos(); https://p5js.org/es/examples/angles-and-motion-sine-cosine/
- mouseIsPressed(); https://p5js.org/reference/p5/mouseIsPressed/
- Constrain(); https://p5js.org/es/reference/p5/constrain/
- frameCount(); https://p5js.org/reference/p5/frameCount/
