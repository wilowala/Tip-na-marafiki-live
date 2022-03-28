$(document).ready(function () {
    const size = $(".pop").css("fontSize");
    $("#pop").hover(function () {
        $(".pop").css("fontSize", "150%");
    },
    function () {
        $(".pop").css("fontSize", size);
    });
});

class FormValidate {
    constructor(nameEntered, messageEntered,  emailEntered, form) {
        this.nameEntered = nameEntered;     
        this.messageEntered = messageEntered;   
        this.emailEntered = emailEntered;   
        this.form = form;
    }
    validateName(nameEntered) {
        const regName = new RegExp("^[a-zA-Z\\s]*$");
        let validName = false;
        let userName = nameEntered.value.trim();
        let validUserNameLength = userName.length < 3 || userName.length > 20 ? false : true;

        if( !(userName === '') && validUserNameLength && (regName.test(userName)) ){
            validName = true;
        }
        return alert("Enter valid name");
    }
    validateEmail(emailEntered) {
        let isEmailValid = false;
        let userEmail = emailEntered.value.toLowerCase();
        const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

        if( !(userEmail === '') && (regEmail.test(userEmail)) ) {
            isEmailValid = true;
        }
        return alert("Enter correct email");
    }
    validateMessage(messageEntered) {
        let isMessageValid = false;
        let userMessage = messageEntered.value;
        let validUserMessageLength = userMessage.length < 1 || userMessage.length > 50 ? false : true; 
        const regMessage = new RegExp("^[a-zA-Z\\s]*$");

        if( !(userMessage === '') && validUserMessageLength && (regMessage.test(userMessage)) ) {
            isMessageValid = true;
        }
        return alert("Enter a message");
    }
}

let contactForm = new FormValidate(document.querySelector("#name"), document.querySelector("#email"), document.querySelector("#message"), document.querySelector("#form"));

contactForm.form.addEventListener('submit', function(e) {
    let verifyName;
    let verifyEmail;
    let verifyMessage;
    let confirmSubmition;

    verifyName = contactForm.validateName(contactForm.nameEntered);
    verifyEmail = contactForm.validateEmail(contactForm.emailEntered);
    verifyMessage = contactForm.validateMessage(contactForm.messageEntered);
    confirmSubmition = verifyName && verifyEmail && verifyMessage;

    if (!confirmSubmition) {
        e.preventDefault();
    }
});