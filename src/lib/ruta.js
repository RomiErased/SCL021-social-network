import { login } from "../component/login.js";
import { register } from "../component/register.js";
import { loginGoogle } from "../component/loginGoogle.js";
import { wall } from "../component/wall.js";

export const changeRoute = (hash) => {
  const rootContainer = document.getElementById('root');
  rootContainer.innerHTML = '';
  // si el hash es #/register entonces le hago appendChild del componente register

  if (hash === '#/login' || hash === '') {
    rootContainer.appendChild(login());
  }
  if (hash === '#/register') {
    rootContainer.appendChild(register());
  }

  if (hash === '#/loginGoogle') {
    rootContainer.appendChild(loginGoogle());
  }
  if (hash === '#/wall') {
    rootContainer.appendChild(wall());
  }
};
