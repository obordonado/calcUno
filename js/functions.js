
let display = document.getElementById('display');

let botones = Array.from(document.getElementsByClassName('boton'));//genero array sin push pasando por toda la class boton.

botones.map( boton => {

  boton.addEventListener('click', (e) => {//funcion e de evento.

    switch(e.target.innerText){// 

      case 'C':// clear pantalla
        display.innerText = '';
        break;

      case '=':try{ // ejecuta lo que sea que haya en pantalla
        display.innerText = eval(display.innerText);
      }

      catch {//prueba si se puede ejecutar y si no muestra Error
        display.innerText = "Error"
      }
      break;

      case '←':
        if (display.innerText){// si hay algo en pantalla le quita el primero por el final.
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
        default:
          display.innerText += e.target.innerText;//Añade todo lo que se pulse.
        }
      });
    });










