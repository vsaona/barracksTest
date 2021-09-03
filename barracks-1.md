<style type="text/css">
    .alph { list-style-type: lower-alpha; }
</style>
1. Escriba una función en Javascript que reciba un Array de números y muestre por consola todos los números separados uno por uno.

```Javascript
function show(arrayToBeShown) {
  for(var i = 0; i < arrayToBeShown.length; i++) {
    console.log(arrayToBeShown[i]);
  }
}
```

2. Escriba una animación Keyframe CSS que mueva el elemento desde ‘top:0%’ a ‘top: 100%’.

```css
@keyframes move {
  0% { top: 0%; }
  0% { top: 100%; }
}
```

3. Escriba una función en Javascript que reciba un Array de números y que devuelva un nuevo Array solo con los números pares que se encuentren.

```Javascript
function onlyPairs(inputArray) {
  return(inputArray.filter(num => !(num % 2)));
}
```

4. Escriba una función en Typescript que reciba explícitamente un parámetro del tipo string, que devuelva explícitamente un valor del tipo numérico, y que en el cual se devuelva la cantidad de caracteres del string pero en valor negativo. EJ: “Auto” devuelve el valor -4.

```Typescript
function minusCharacters(text:string):number {
  return(-text.length);
}
```

5. Si se requiere instalar una librería llamada “barracks” en un proyecto a través de NPM. ¿Cuál de los siguientes comandos es el correcto para lograrlo?

    a. npm -i -g barracks

    b. npm t -g barracks

    c. npm i barracks

    d. npm up barracks

```bash
npm i barracks
```

6. Escriba una ‘interface’ de Typescript llamada ‘Animal’ que defina explícitamente un modelo de datos con los siguientes atributos; ‘Ojos’ del tipo numérico, ‘Pies’ del tipo Array de string, ‘Cola’ del tipo booleano, ‘Plumas’ del tipo string o indefinido.

```TypeScript
interface Animal {
  Ojos: number;
  Pies: Array<String>;
  Cola: boolean;
  Plumas: string | any;
}
// Aunque debo decir que los nombres de estas propiedades deberian estar en minúscula, por convención
```

7. Escriba una función en Javascript, que se ejecute cuando un sitio web se cargue y que cambie el color de fondo de la página (body) a color negro.
```Javascript
function changeBackgroundToBlack() {
  document.getElementsByTagName("body")[0].style["background-color"] = "black";
}
window.addEventListener('load', (event) => {
  changeBackgroundToBlack();
});
```
8. Escriba una declaración CSS en la cual todos los textos de la página sean blancos, en negrita, con separación de letras de 2px y que si el texto no cabe completamente en su contenedor se agregue tres puntos ‘...’ al final para acortar.

```css
* {
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  text-overflow: ellipsis;
}
```

9. Escriba una declaración CSS en la cual un botón cambie a color azul cuando el puntero esté sobre él, y a color verde cuando se presione.

```css
button:hover {
  background-color: blue;
}
button:active {
  background-color: green;
}
```

10. Si se requiere guardar un nuevo cambio en un repositorio GIT ¿Cuál de los siguientes comandos es el correcto?

    a. git commit

    b. git push
    
    c. git add

    d. git checkout

```bash
# Si se desea guardar un cambio, normalmente se usan varios commandos:
git add
git commit
git push
# Esto se debe a que normalmente se usa Git como respaldo y para trabajar en equipo, pero si no hay una copia remota del repositorio, no es necesario el push (Pero no tener un respaldo en casi todos los casos es mala idea).
```

11. Escriba una función en Javascript o Typescript, la cual realice una llamada API REST del tipo POST a la URL ‘/recibeDatos’, que envíe la fecha actual del sistema, y que muestre en una alerta con el código HTTP de respuesta.