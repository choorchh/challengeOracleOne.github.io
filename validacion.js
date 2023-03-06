//Haz tú validación en javascript acá
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const form = document.getElementById('form');
const parrafo =document.getElementById('warnings');

form.addEventListener('submit',e=>{
    e.preventDefault()
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let entrar = false ;
    parrafo.innerHTML = "";

    if (nombre.value.length === 0 ){
   warnings += `el nombre no es valido <br>`
   alert (` el nombre es demasiado corto`);
    entrar = true;
    } else if (nombre.value.length > 50){
        warnings += `el nombre no es valido <br>`
        alert (` el nombre supera los 50 caracteres`);
        entrar = true;
    }
    if (!regexEmail.test(email.value)){
        warnings += `el email no es valido <br>`
        entrar = true;
        alert (`     el email no es valido.
        debe ser como el Ejemplo: texto@texto.com`);
    }
    
    if (asunto.value.length < 1 ){
        warnings += `el asunto no es valido <br>`
        alert (` el asunto es demasiado corto `);
         console.log("escriba un asunto");
         entrar = true;
         }else if (asunto.value.length > 50){
            warnings += `el asunto es demasiado largo <br>`
            alert (` el asunto supera los 50 caracteres`);
            entrar = true;
         }
         if (mensaje.value.length === 0){
            warnings += `el mensaje es demasiado corto <br>`
            alert (`el mensaje es demasiado corto `);
             entrar = true;
             }else if (mensaje.value.length > 300){
                warnings += `el mensaje es demasiado largo<br>`
                alert (` el mensaje es demasiado largo`);
                entrar = true;
             }
             if(entrar){
                parrafo.innerHTML = warnings;
             } else {
                parrafo.innerHTML = "Enviado";
             }
            
})

