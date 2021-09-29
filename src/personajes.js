import Listarpersonajes from "./listapersonajes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const students = [
    {
      "id" : 1,
      "name":" Nombre: GUTS",
      
      "genero": " Genero: M",
      "Tipo": " Tipo: GUERREO",
      "Describe":" Descripcion: conocido por su epíteto del espadachín negro kuroi kenshi, guerrero negro en traducciones en español), es el protagonista del manga y anime Berserk. ... Es capaz de hacer lo que sea por su objetivo, sin importar por cuántos peligros pase. ",
      "img":"https://www.tonica.la/__export/1631045232891/sites/debate/img/2021/09/07/manga-de-berserk-podria-culminar-con-el-capitulo-364_1.jpg_242310156.jpg"
  },
  {
    "name":" Nombre: GRIFFITH",
    "img":"https://pm1.narvii.com/6434/d7fd2c986aba44502cafe3ed2523761233c02f1c_hq.jpg",
    
    "genero":" Genero: M",
    "Tipo":" Tipo: GUERRERO",
    "Describe":" Descripcion: es uno de los personajes principales y el principal antagonista del manga Berserk. Es un personaje de apariencia pulcra y andrógina que antiguamente era el líder de la Banda del Halcón, la banda de mercenarios a la que pertenecía Guts."
  
  
  },
  {
    "name":" Nombre: CASCA",
    "img":"https://i.pinimg.com/originals/28/66/4e/28664eba3f0515c96554bda46c333e08.jpg",
    
    "genero":" Genero: F",
    "Tipo":" Tipo: GUERRERO",
    "Describe":" Descripcion:es una protagonista femenina en Berserk. Fue el único miembro femenino en la Banda del Halcón. Juega un papel primordial en la búsqueda de Guts por matar a todos los apóstoles y los Mano de Dios."
  
  },
  {
    "name":" Nombre: SERPICO",
    "img":"https://pm1.narvii.com/6502/ce096785b605cc572edaa4bf2b969cdfcaae2fbb_hq.jpg",
    
    "genero":" Genero: M",
    "Tipo":" Tipo: MAGO",
    "Describe":" Descripcion: es uno de los personajes principales, miembro de la noble Familia Vandimion. Anteriormente, lideró la guardia ceremonial de la Santa Sede, los Caballeros de la Santa Cadena de Hierro."
  
  },
  {
    "name":" Nombre: schierke",
    "img":"https://media.vandal.net/i/790x593/7-2016/2016719113424_1.jpg",
    
    "genero":" GENERO: F",
    "Tipo":" Tipo: MAGO ",
    "Describe":" Descripcion: es una joven bruja. Fue discípula de la bruja Flora. Actualmente, forma parte del grupo de viajeros de Guts. Schierke es una niña que tiene el cabello verde oscuro"
  
  },
  {
    "name":" Nombre: ZODD",
    "img":"https://m.media-amazon.com/images/I/71gPDFOYX4L._SS500_.jpg",
   
    "genero":" Genero: M",
    "Tipo":" Tipo: DEMONIO",
    "Describe":"Apariencia. Cuando está en forma humana, Zodd es un guerrero bárbaro de gran altura. Curiosamente, algunas de las características faciales de Zodd, su cabello y sus orejas puntiagudas se parecen a las de Guts."
  
  },
  {
    
    "name":" Nombre: PUCK",
    "img":"http://pm1.narvii.com/6335/fed2a29ca258a3c047c1237873bc25b8d9cc6822_00.jpg",
    "genero":" Genero: M",
    "Tipo":" Tipo: HADA",
    "Describe":" PUCK, apodado el marginado, es el personaje principal de un cuento infantil sobre un niño de ojos rojos y orejas puntiagudas que trata de descubrir por qué su aspecto es diferente del de las personas que viven con él."
  
  
  },
 
  ]
  
  const Personajes = () => (
    <>
    
        <ul class="nav nav-pills">
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="/"><strong>Inicio</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Formulario"><strong>Formulario</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Footer"><strong>Footer</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Historia"><strong>Historia</strong></a>
  </li>
  
  
</ul>
    {
        students.map( c => <Listarpersonajes name={c.name}   tipo={c.Tipo} describe ={c.Describe} img={c.img} /> )
        
       
      }
    <footer>
      
    
      <figure class="text-center">
     <blockquote class="blockquote">
       <p> </p>
      <p></p>
        <a href ="">  Facebook  <i class="fab fa-facebook"></i> </a><br></br>
        <a href=""> github   <i class="fab fa-github"></i> </a><br></br>
        <a href=""> Linkedin   <i class="fab fa-linkedin"></i> </a>
        
        
      
     </blockquote>
     <figcaption class="blockquote-footer">
        <cite title="Source Title">Adsi:2184573</cite>
     </figcaption>
   </figure>
   </footer>
    
      
  
     
      
     
    </>
   
    
  )
  
  export default Personajes;