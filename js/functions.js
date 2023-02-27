//variables
const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');
const edad = document.querySelector('#edad')
const celular = document.querySelector('#celular');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');

const foto = document.querySelector('#foto');

//funcion que carga los datos personales al azar de la pagina de RandomUser
const cargarUs = async() => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const {results} = await respuesta.json();
        const datos = results[0];
        
        nombre.textContent = datos.name.last + " " + datos.name.first;
        edad.textContent = datos.dob.age + " años";
        telefono.textContent = datos.phone;
        celular.textContent = datos.cell;
        correo.textContent = datos.email;

        foto.src = datos.picture.large;
    
    } catch (error) {
        console.log(error);
    }
}

/*
funciones que cargan las experiencias y habilidades desde archivos locales creados por mi,
divide la pantalla en dos columnas donde se van repartiendo los datos a mostrar
*/
const cargarExp = async () => {
    try {
        const url = './json/experiencias.json';
        const respuesta = await fetch(url);
        const results = await respuesta.json();
        
        for (let i =0; i <= results.length -1; i++) {
            
            const div1 = document.createElement("div");
            
            div1.setAttribute("class", "col-3");
            div1.setAttribute("id", "fechas"+ i);
            document.getElementById("exp").appendChild(div1);
            
            const div2 = document.createElement("div");
            div2.setAttribute("class", "col-9");
            div2.setAttribute("id", "datos"+ i);
            document.getElementById("exp").appendChild(div2);

            const lu = document.createElement("ul");
            lu.setAttribute("id","myList" + i);
            document.getElementById("fechas" + i).appendChild(lu);
            const li = document.createElement("li");
            const textli = document.createTextNode(results[i].fechaDesde + " - " + results[i].fechaHasta);
            li.appendChild(textli);
            document.getElementById("myList"+ i).appendChild(li);

            const empresa  = document.createElement("h4");
            const textEmpresa = document.createTextNode("Empresa: " + results[i].empresa);
            empresa.appendChild(textEmpresa);
            document.getElementById("datos"+ i).appendChild(empresa);

            const dir  = document.createElement("p");
            const textDir = document.createTextNode("Dirección: " + results[i].direccion);
            dir.appendChild(textDir);
            document.getElementById("datos"+ i).appendChild(dir);

            const rubro  = document.createElement("p");
            const textRubro = document.createTextNode("Rubro: " + results[i].rubro);
            rubro.appendChild(textRubro);
            document.getElementById("datos"+ i).appendChild(rubro);

            const parrafo  = document.createElement("p");
            const textParrafo = document.createTextNode("Descripcion del Puesto: " + results[i].descripcion);
            parrafo.appendChild(textParrafo);
            document.getElementById("datos"+ i).appendChild(parrafo);
        }
    } catch (error) {
        console.log(error);
    }      
}

const cargarHab = async () => {
    try {
        const url = './json/habilidades.json';
        const respuesta = await fetch(url);
        const results = await respuesta.json();
        
        for (let i =0; i <= results.length -1; i++) {
            
            const div1 = document.createElement("div");
            
            div1.setAttribute("class", "col-3");
            div1.setAttribute("id", "tiempo"+ i);
            document.getElementById("hab").appendChild(div1);
            
            const div2 = document.createElement("div");
            div2.setAttribute("class", "col-9");
            div2.setAttribute("id", "info"+ i);
            document.getElementById("hab").appendChild(div2);

            const lu = document.createElement("ul");
            lu.setAttribute("id","list" + i);
            document.getElementById("tiempo" + i).appendChild(lu);
            const li1 = document.createElement("li");
            const textli1 = document.createTextNode(results[i].fecha);
            li1.appendChild(textli1);
            document.getElementById("list"+ i).appendChild(li1);
            const li2 = document.createElement("li");
            const textli2 = document.createTextNode(results[i].duracion);
            li2.appendChild(textli2);
            document.getElementById("list"+ i).appendChild(li2);

            const empresa  = document.createElement("h4");
            const textEmpresa = document.createTextNode("Instituto: " + results[i].instituto);
            empresa.appendChild(textEmpresa);
            document.getElementById("info"+ i).appendChild(empresa);

            const dir  = document.createElement("p");
            const textDir = document.createTextNode("Dirección: " + results[i].direccion);
            dir.appendChild(textDir);
            document.getElementById("info"+ i).appendChild(dir);

            const rubro  = document.createElement("p");
            const textRubro = document.createTextNode("Titulo: " + results[i].titulo);
            rubro.appendChild(textRubro);
            document.getElementById("info"+ i).appendChild(rubro);

            const parrafo  = document.createElement("p");
            const textParrafo = document.createTextNode("El Egresado esta capacitado para: " + results[i].descripcion);
            parrafo.appendChild(textParrafo);
            document.getElementById("info"+ i).appendChild(parrafo);

        }
    } catch (error) {
        console.log(error);
    }
}
/*
funcion desde donde llamo a las 3 funciones que necesito para cargar las diferentes partes del curriculum,
luego deshabilito el boton porque no logre limpiar la seccion donde estaban las experiencias y las habilidades
lo que producia duplicaciones.
*/
function cargarInfo() {
    cargarUs();
    cargarExp();
    cargarHab();
    document.getElementById("boton").disabled = true;
  }
  
boton.addEventListener('click', cargarInfo);
