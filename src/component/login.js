import { createUser, loginWithGoogle, ingresarConUsuario} from "../lib/firebase.js";
import { changeRoute } from "../lib/ruta.js";

export const login = () => {
  const logearse = document.createElement("div");
  logearse.className = "container-login";
  // logearse.textContent = "este es el login!";
  // console.log(logearse);

  const caja = document.createElement("div");
  caja.className = 'caja';
  logearse.appendChild(caja);

  const logoPrincipal = document.createElement("img");
  logoPrincipal.setAttribute("width", "200px");
  logoPrincipal.setAttribute("src", "./component/logoNuevo.png");
  logearse.appendChild(logoPrincipal)

  const tituloUno = document.createElement("h1");
  tituloUno.textContent = "Comparte tus experiencias gatunas!!";
  logearse.appendChild(tituloUno);

  const ingresarCorreo = document.createElement("input");
  ingresarCorreo.setAttribute("placeholder", "E-mail");
  logearse.appendChild(ingresarCorreo);

  logearse.appendChild(document.createElement("br"));
  logearse.appendChild(document.createElement("br"));

  const ingresarClave = document.createElement("input");
  ingresarClave.setAttribute("placeholder", "Contraseña");
  ingresarClave.type = "password";
  logearse.appendChild(ingresarClave);

  logearse.appendChild(document.createElement("br"));
  logearse.appendChild(document.createElement("br"));

  const botonIngresar = document.createElement("button");
  botonIngresar.className = "btnIngresar";
  botonIngresar.innerHTML = "Ingresar";

  botonIngresar.addEventListener("click", () => {
    if (ingresarCorreo.value === "" && ingresarClave.value === "") {
      return alert("ingresa tus datos")
    } else {
      ingresarConUsuario(ingresarCorreo.value, ingresarClave.value).then(() => {
        window.location.hash = '#/wall'
       });
    };
  });

  // function validarCorreo(){
  // if (createUser)
  // a la funcion sendEmailVerification tenemos que decirle
  // que si el usuario esta verificado ingrese al muro y si no un alert para verificar correo
  // };

  logearse.appendChild(botonIngresar);

  const parrafoRegistrar = document.createElement("p");
  parrafoRegistrar.innerHTML = "¿No tienes cuenta? Registrate <a href ='#/register'>aqui</a>";
  logearse.appendChild(parrafoRegistrar);

  const sesionGoogle = document.createElement("p");
  sesionGoogle.textContent = "Inicia sesion con";
  logearse.appendChild(sesionGoogle);

  const botonGoogle = document.createElement("img");
  botonGoogle.src= "./component/gootrans.jpg";
  botonGoogle.setAttribute("width", "30px");
  botonGoogle.addEventListener("click", loginWithGoogle);

  logearse.appendChild(botonGoogle);

  return logearse;
};
