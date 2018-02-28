# Construcción de Elementos de Software 4

# Febrero 28 de 2018

Ejercicio (Actividad para trabajar cada uno en casa - Revisión de la solución Marzo 6 de 2018)

1. Definir una clase de su preferencia con minimo 5 propiedades

	Ejemplo: MeetingRoom(id, name, capacity, location, lastCleanUpDate)
			    (1, 'Room t', 10, 'First Floor','2017-12-01')
			    
2. Crear un json con la estructura correspondiente que soporte la clase anteriormente creada con 10 registros
3. Almacenar en firebase el objeto json definido en el punto anterior
4. Crear un archivo html que permita consultar los 10 registros a traves de un boton en pantalla
5. Mostrar los registros obtenidos en pantalla
6. Agregar un link por cada registro mostrado en pantalla

	Ejemplo:	Id	Name	Capacity	Location	Last Clean Up Date	Action
			1	Room t	10		First Floor	2017-12-01		(Edit)

7. Al presionar el link (Edit) mostrar debajo de la lista un formulario con la información
8. El formulario debe permitir la edición de la información
9. Agregar un botón (Enviar) que:
	- Actualice el registro seleccionado (Contra Firebase)
	- Oculte el formulario de edición
	- Muestre en pantalla la lista actualizada


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
