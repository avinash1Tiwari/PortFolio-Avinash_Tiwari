function mySendMail(){
    console.log("avinash tiwari")
    let g = document.getElementById('formName').value
    console.log(g)
}

function ll(){
    console.log("hara rama")
}

let submit = document.querySelector('.formcontacts')


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked by avinash")

    let name1 = document.getElementById('formName').value;
    let mail1 = document.getElementById('formMail').value;
    let address1 = document.getElementById('formSubject').value;
    let message1 = document.getElementById('formMessage').value;

console.log( `Name : ${name1}`)
console.log(`Email : ${mail1}`)
console.log( `Address : ${address1}` )
console.log(  `Messsage : ${message1}` )
  

        Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "avinashtiwari2405@gmail.com",
                    Password : "2ADA24697DA16C89BE2C38792B9EB107C283",
                    To : "avinashtiwari2405@gmail.com",
                    From : "avinashtiwari2405@gmail.com",
                    Subject : "This is the subject",
                    Body : `Name : ${name1} <br/> Email : ${mail1}  <br/> Address : ${address1}  <br/> Messsage : ${message1}`
                    
                }).then(
                message => alert(message)
                );
})