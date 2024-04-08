const form =document.querySelector('form');
const fullName = document.getElementById("name")
const subject= document.getElementById("subject")
const email= document.getElementById("email")
const message= document.getElementById("textarea")



function sendEmail() {
    const bodyMessage= 'Full Name: ${fullname.value} <br>; Subject: ${subject.value} <br> Email: ${email.value} <br> Message: ${message.value} ';

    
    Email.send({
        Host:"smtp.elasticemail.com",
        Username: "msrvvasanth00@gmail.com",
        Password: "4808D45757F8165FCADD8A3B4C3B0ADAE359",
        To: "msrvvasanth00@gmail.com",
        From: "msrvvasanth00@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if(message== "OK"){
                Swal.fire({
                    title: "sucsess",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
        }
           
    );


    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
       

      sendEmail();

      form.reset();
      
    });

