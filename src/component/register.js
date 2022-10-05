import { createUser, loginWithGoogle } from "../lib/firebase.js";

export const register = () => {
  const registrarse = document.createElement("div");
  registrarse.className = "container-register";
  // logearse.textContent = "este es el register!";
  // console.log(logearse);

  const logoPrincipal = document.createElement("img");
  logoPrincipal.setAttribute("width", "200px");
  logoPrincipal.setAttribute("src", "./component/logoNuevo.png");
  registrarse.appendChild(logoPrincipal)

  const tituloUno = document.createElement("h1");
  tituloUno.textContent = "Registrarse";
  registrarse.appendChild(tituloUno);

  const ingresarMail = document.createElement("input");
  ingresarMail.setAttribute("id", "emailLogin");
  ingresarMail.setAttribute("placeholder", "E-mail");
  registrarse.appendChild(ingresarMail);

  registrarse.appendChild(document.createElement("br"));
  registrarse.appendChild(document.createElement("br"));

  const ingresarContraseñaNueva = document.createElement("input");
  ingresarContraseñaNueva.setAttribute("id", "passwordLogin");
  ingresarContraseñaNueva.type = "password";
  ingresarContraseñaNueva.setAttribute("placeholder", "Contraseña");
  registrarse.appendChild(ingresarContraseñaNueva);

  registrarse.appendChild(document.createElement("br"));
  registrarse.appendChild(document.createElement("br"));

  const botonRegistrarse = document.createElement("button");
  botonRegistrarse.className = "btnRegistrarse";
  botonRegistrarse.innerHTML = "Registrarse";
  registrarse.appendChild(botonRegistrarse);

  botonRegistrarse.addEventListener("click", function () {
    if (ingresarMail.value === "" && ingresarContraseñaNueva.value === "") {
      return alert("Crea tu cuenta")
    } else {
      createUser(ingresarMail.value, ingresarContraseñaNueva.value).then((resultado) => {
        console.log(resultado);
        window.location.hash = "#/wall"
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
    document.getElementsByClassName = "btnRegistrarse";
    document.getElementById("root").innerHTML = "";
  });
  console.log(botonRegistrarse);

  const sesionGoogle = document.createElement("p");
  sesionGoogle.textContent = "O resgistrate con";
  registrarse.appendChild(sesionGoogle);

  const imagenGoogle = document.createElement("img");
  imagenGoogle.src = "./component/gootrans.jpg";
  imagenGoogle.setAttribute("width", "30px");
  imagenGoogle.addEventListener("click", loginWithGoogle);

  registrarse.appendChild(imagenGoogle);

  return registrarse;
};
