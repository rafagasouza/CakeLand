const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const form = document.querySelector("form");

const users = [
  { nome: "rafa", senha: "1234" },
  { nome: "maria", senha: "1234" },
];

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const emailDigitado = loginEmail.value;
  const senhaDigitada = loginPassword.value;

  const usuarioEncontrado = users.find(
    (user) => user.nome === emailDigitado && user.senha === senhaDigitada
  );

  if (usuarioEncontrado) {
    localStorage.setItem('user', true)
    location.href = '../pages/home.html'

  } else {
    console.log("dados errados");
  }
});
