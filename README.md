# Construcción de Elementos de Software 4

# Abril 3 de 2018

Angular JS

Pagina de referencia: https://angularjs.org/

Tutorial: https://www.w3schools.com/angular/default.asp

Articulo: https://medium.freecodecamp.org/a-real-world-comparison-of-front-end-frameworks-with-benchmarks-e1cb62fd526c

Practica: Angular JS

Crear un Single Page App (SPA) usando Angular JS teniendo en cuenta las siguientes consideraciones:

1. Crear un modulo principal.
2. Crear dos componentes (Componente Lista, Componente detalle).
3. Crear un servicio para la obtención de datos a partir de un endpoint determinado.
4. Crear un archivo en donde se defina el enrutamiento de la aplicación.
5. Crear una directiva.
6. Usar por los menos 5 filtros en la aplicación.


Fecha de entrega: Abril 3 de 2018 (8:00 a.m)


# Marzo 13 de 2018

Ejercicio

1. Crear una pagina web con la siguiente información:

Http Response Status Code

Status | Message | Link 
------------ | ------------- | ------------- 
200 | OK | Show
201 | No content | Show
400 | Bad Request | Show
401 | Unauthorized | Show
403 | Forbidden	| Show
404 | Not Found	| Show
500 | Internal Server Error | Show
501 | Not Implemented | Show

2. Obtener la información desde Firebase
3. Mostrar la lista al ingresar en la página web
4. Crear y ejecutar un servidor de node js en el puerto 3030
5. Al ingresar al localhost en el puerto dado desplegar la lista del punto 1
6. Al presionar el link Show se debe navegar a una nueva página web en donde:
	- Se mostrará como titulo el Status Code seleccionado
	- Se mostrará la descripción del Status Code seleccionado
	- Se mostrará un botón "back" que permitirá regresar a la lista


Exercice

1. Investigar como funciona node js y socket io
2. Implementar un ejemplo a partir de la información obtenida


# Marzo 08 de 2018 

Node JS

Presentation: https://docs.google.com/presentation/d/1ICSp2BxrjKVJZTLvJxykJT-7u9sErTNB7pfxxX4EpTk/edit?usp=sharing

Exercices

1. Install Node JS (https://nodejs.org/en/)
2. Download nodejs folder (ces4/nodejs)
3. Open nodejs folder using an editor (https://code.visualstudio.com/)
4. Open the command line
5. Execute each file (node namefile.js)

List files:
- demo_http.js
- demo_http_url.js
- demo_querystring.js
- demo_readfile.js
- demo_renamefile.js
- demo_urlparse.js
- demo_fileserver.js
- demo_readfile_append.js
- demo_deletefile.js


# Febrero 28 de 2018 
(Clase Marzo 1 de 2018 - Actividad para trabajar cada uno en casa - Revisión de la solución Marzo 6 de 2018)

Ejercicio

1. Definir una clase de su preferencia con minimo 5 propiedades (Ver Ejemplo)    
2. Crear un json con la estructura correspondiente que soporte la clase anteriormente creada con 10 registros
3. Almacenar en firebase el objeto json definido en el punto anterior
4. Crear un archivo html que permita consultar los 10 registros a traves de un boton en pantalla
5. Mostrar los registros obtenidos en pantalla
6. Agregar un link por cada registro mostrado en pantalla (Ver Ejemplo)
7. Al presionar el link (Edit) mostrar debajo de la lista un formulario con la información
8. El formulario debe permitir la edición de la información
9. Agregar un botón (Enviar) que:
	- Actualice el registro seleccionado (Contra Firebase)
	- Oculte el formulario de edición
	- Muestre en pantalla la lista actualizada


Ejemplo

Id | Name | Capacity | Location | Last Clean Up Date | Action
------------ | ------------- | ------------- | ------------- | ------------- | -------------
1 | Room One | 12 | First Floor | 2018-01-01 | (Edit)


------------------------------------------------------------------

# Febrero 27 de 2018

Practica Javascript + Firebase

1. Ingresar a firebase https://firebase.google.com/
2. Presionar el botón comenzar
3. Loguearse con una cuenta de google/gmail
4. Click en añadir proyecto
5. Ingresar el nombre del proyecto (Tener presente el nombre para proximos pasos)
6. Seleccionar el país
7. Presionar el botón crear proyecto
8. Ingresar en el proyecto creado
9. Buscar la sección de Database y presionar el link "Empezar"
10. En la pestaña "Datos" ubicarse sobre el nombre del proyecto
11. Reemplazar el valor "null" por el contenido del archivo (ces4/getData/randomuser-me.json)
12. Presionar enter para que el json sea mostrado
13. Descargar la carpeta "getData"
14. Abrir el archivo "getData.js" (ces4/getData/getData.js)
15. Reemplazar el valor de la variable "mysite" en la linea 7 y linea 36 con el nombre del proyecto creado en firebase
16. Ejecutar el archivo index.html en algún browser
17. Probar que el botón "Load Data" cargue la información de los autores
18. Probar que el botón "Load Data From Firebase" cargue la información de los autores
19. Probar que el botón "Post Data" así:
	- Reemplazar el nombre del proyecto creado en: "https://NOMBREDELPROYECTO.firebaseio.com/authors/results/0/name"
	- Ejecutar la anterior url
	- Se mostrará 
		=> name 
			first: "sofia",
			last: "nielsen",
			title: "mrs"
	- Presionar el botón "Post Data" desde el index.html
	- Validar que la información haya sido cambiada


------------------------------------------------------------------

# References

JavaScript
https://docs.google.com/presentation/d/1TqLa1-CbNVQR9r0xtVZfdzC4nYBC9HuWtFe8fawZUmE/edit?usp=sharing

Lista de Estudiantes
https://docs.google.com/spreadsheets/d/1bDz3EiN8hQDfPibUZeTjGecfSFcb0BEXWAFjVamZrnI/edit?usp=sharing

February 20th
Minimum Viable Product
http://joeagile.com/images/posts/2015-01-23-mvp.gif

REST API
http://www.restapitutorial.com

FireBase
https://firebase.google.com

Javascript Exercise
https://www.w3schools.com/js/js_quiz.asp

TypeScript
https://www.typescriptlang.org/

ES6
http://es6-features.org/

Online IDE for web applications
https://stackblitz.com/

AngularJS
https://stackblitz.com/edit/angularjs

Angular 2+
https://stackblitz.com/edit/angular-b86rbi

Node JS
https://socket.io/get-started/chat/
