(() => {
    const loginForm = $("form.signup");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");

    loginForm.on("submit", (event) => {
        event.preventDefault();
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
            window.location.replace("/main");
        }).catch(err => {
            console.log(err);
        });
    }
})()