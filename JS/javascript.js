var app = document.getElementById('TypewriterJS');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello, World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Thank you for visiting my website!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I hope you enjoy your stay!')
    .pauseFor(2500)
    .deleteAll()

    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    // .pauseFor(2500)
    .start();