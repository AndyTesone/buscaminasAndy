//Constantes del juego
const COLUMNAS = 3;
const FILAS = 3;
const CANTIDAD_MINAS = 2;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;





function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();
  
  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");
  casillerosSinDescubrir = FILAS*COLUMNAS-1;
  // Modificar/completar

  ponerMinasTablero();
}





function draw()
{
  if (hizoClick == true)
  {
    if (mouseButton == RIGHT)
    {
      pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO);
    }
    console.log(casillerosSinDescubrir);   
    if (mouseButton == LEFT)
    {
        if(tieneMinaCasillero(columnaPresionada, filaPresionada))
        {
          pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_CON_MINA);
          mostrarMinas();
          perder();
        }
        else
        {
          pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA); //pinta el casillero clickeado. Modificar/completar
          descubrirCasillero(columnaPresionada, filaPresionada)
          if( ganoElJuego() )
            ganar();
        }
      }
    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
  }  
}



function ganoElJuego()
{
  if(casillerosSinDescubrir == CANTIDAD_MINAS)
    return true;
  else
    return false;   //Esto hace que NUNCA gane el juego. Modificar/completar
}

function ponerMinasTablero()
{
  
  for (let contMinas = 0; contMinas < CANTIDAD_MINAS; contMinas++)
  { 
    let filaAleatoria = getRandomInt(FILAS);
    let columnaAleatoria = getRandomInt(COLUMNAS);
    console.log("Las minas estan en la columna: " + columnaAleatoria + " y en la fila: " + filaAleatoria);
    if(tieneMinaCasillero(columnaAleatoria, filaAleatoria))
      contMinas--;
    else
      ponerMinaCasillero(columnaAleatoria, filaAleatoria);
    
  }
  
  //poner bien una mina
  //obetener dos numeros al azar
  //llamar a poner mina casillero con esos numeros al azar
  //hacer que se repita diez veces(averiguar como repetir)
  
}

function mostrarMinas()
{
  for(let contColumnas = 0; contColumnas < COLUMNAS; contColumnas++){
    for(let contFilas = 0; contFilas < FILAS; contFilas++){
      if(tieneMinaCasillero(contColumnas, contFilas)){
        pintarCasillero(contColumnas, contFilas, COLOR_CASILLERO_CON_MINA);
      }
    }  
  }
}

function contarMinasAlrededor(columna, fila)
{
  return ;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}

// Notesé que también en este caso `min` será incluido y `max` excluido

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}