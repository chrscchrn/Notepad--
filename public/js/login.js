(() => {
<<<<<<< HEAD
    //changed signup to login
=======
>>>>>>> 94a20841846f4c8bda0c98eb77e9a925caa8098e
    const loginForm = $("form.login");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");

    loginForm.on("submit", (event) => {
        event.preventDefault();
        console.log("inside sub listener")
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) return;
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });
    
    function loginUser(email, password) {
        $.post("/api/login", {
          email: email,
          password: password
        }).then(() => {
<<<<<<< HEAD
            console.log("trying to login")
=======
>>>>>>> 94a20841846f4c8bda0c98eb77e9a925caa8098e
            window.location.replace("/notes");
        }).catch(err => {
            console.log(err);
        });
    }
})()