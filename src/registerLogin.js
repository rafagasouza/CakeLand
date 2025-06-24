const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const confirmEmail = document.getElementById('confirm-email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const phone = document.getElementById('phone')
const form = document.querySelector('form')

let users = []




form.addEventListener('submit', (ev)=>{
  ev.preventDefault()
  if(fullname.value === '' || email.value === '' || confirmEmail.value === '' || password.value == '' || phone.value == ''){
  alert('preencha os espaços')
}else{
  const user = {
    fullname: fullname.value,
    email: email.value,
    password: password.value,
    phone: phone.value
  }

  users.push(user)
  form.reset()
}
  console.log(users)
})

