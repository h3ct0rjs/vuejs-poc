# Notas, Vue.JS

Mis notas de resumen para estos poc(*probe of concepts*) usando [vue.js](http://vuejs.org)
Vue es un framework para realizar toda la parte de frontend utilizando el concepto de Single Page Applications, 
la idea es que el usuario iteractue dinamicamente rescribiendo el contenido actual, es decir solo se descarga las vistas y el trozo de html necesario. Pensemos que necesitamos cargar un dashboard y el usuario solo esta necesitando obtener metricas de una sola cosa, es decir por ejemplo una dona de datos. Solo necesitaremos actualizar esa parte y no redescargar toda la dashboard; Se descarga y renderiza estrictamente lo necesario en una sola descarga.

Vue por lo que observo esta muy bién documentado y tiene casi todas las cosas que tiene angular(aunque soy muy rocky, pero he visto lo que se puede hacer al menos lo basico que son ngcomponents,services,pipes,rxjs...etc)


1. Para empezar es necesario crear un archivo html:5 normal,en este deberemos crear un div, o algún tag html que sea contenedor. Este debe tener asignado un _**id**_  del tipo común  `<div id="app"></div>`.

2. Deberemos importar la version de desarrollo Vue, para esto usamos tag script con la url de el. 

3. En otra tag script crearemos componentes y todo el codigo de Vue pero montamos la estructura basica, asi:

```html
<script>
    const app = new Vue({
      el: '#app', //donde la app va renderizar. Usamos el id
      data:{
          x:'soy un string' //agregamos todas las variables de nuestro modelo.
      },
      methods:{
          //aqui en esta propiedad metemos todos los metodos que deseemos
          metodosdelaapp:function(){
              //procedimiento de funcion
          }
      }
    });
<script>
```
4. Con eso ya podremos probar el property binding de vue. 
5. Vue tiene varias cosas parecidas a angular entre ellas directivas,condicionales etc...todas las etiquetas en el html empieza con *`v`* por ejemplo :

* v-for
* v-if 
* v-else
* v-show
* v-hide
* v-bind
* v-on --> puede ser sustituido por @

Al igual que angular tiene one data binding, two databing and property binding. aqui se llama compute properties. 
Los eventos propios del DOM son emulados usando un dom virtual de vue

Es posible crear componentes asi 
```html
<script>
      //asi se crean componentes
    Vue.component('tv-show', {
      props: {
        name: String,
        seassons: Number
      },
      //Inline templates como en angular para prototipar.
      template: `
        <li>
            <strong>{{name}}</strong>  (Temporadas: {{seassons}})
        </li>
      `
    })
<script>
```
De esta forma podemos crear el componente tv-show. Es de decir que cada componente tiene su propio js,css,html.
Al igual que en angular 6 se establecen jerarquias de componentes, es decir un componente padre puede contener varios hijos, la comunicacion por defecto es desde el padre hacia los hijos. Para poder que exista comunicacion del hijo al padre es necesario usar two data binding.

