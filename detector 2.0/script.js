function checkSpam() {
    const message = document.getElementById("message").value;
    const username = document.getElementById("username").value;
    const profilePic = document.getElementById("profile-pic").value;
    
    const spamPhrases = [
        "¡Oferta exclusiva! Compre ahora y ahorre un 90%.",
        "Su cuenta necesita ser verificada, haga clic aquí para actualizar.",
        "¡Usted ha sido seleccionado para recibir un premio!, confirme su dirección para recibirlo."
    ];

    let isSpam = spamPhrases.some(phrase => message.includes(phrase));

    if (isSpam) {
        document.getElementById("result").innerText = `Spam detectado, ${username}`;
    } else {
        document.getElementById("result").innerText = `No se ha detectado spam, ${username}`;
    }

    // Mostrar la imagen seleccionada
    const profilePicDisplay = document.getElementById("profile-pic-display");
    if (profilePic === "goku") {
        profilePicDisplay.innerHTML = '<img src="https://steamuserimages-a.akamaihd.net/ugc/1646595043658713843/958423A5335387D67B37841E98DFBF948F85C23C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Goku" style="width: 100px; height: 100px;">';
    } else if (profilePic === "mario") {
        profilePicDisplay.innerHTML = '<img src="https://w7.pngwing.com/pngs/495/459/png-transparent-super-mario-bros-mario-yoshi-bowser-mario-bros-angle-super-mario-bros-text.png" alt="Mario" style="width: 100px; height: 100px;">';
    }
}

