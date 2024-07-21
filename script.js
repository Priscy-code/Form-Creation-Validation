document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('id ="registration-form"');
    const feedbackDiv = document.getElementById('id ="form-feedback"');

    form.addEventListener("submit", function(event){
        event.preventDefault();

        // console.log("Form submission prevented!")
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email"). value.trim()
        const password = document.getElementById("assword").value.trim()

        let isVaild = true;
        const messages = []

        if(username.length < 3){
            isVaild = false; 
            messages.push("incorrect")
        } 
        if ( !email.includes("@") || ! email.includes(".")){
            isVaidl = false
            messages.push("Incorrect email")
        }
        if (password.length < 8){
            isVaild= false;
            messages.push("incorrect Password")
        }
        if (!isVail){
            feedbackDiv.style.display ="block";
            feedbackDiv.textContent = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"
        }else {
            feedbackDiv.style.display = "block";
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }
        
    })
})