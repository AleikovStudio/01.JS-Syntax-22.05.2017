function logScope() {
    var localVar = 2;

    if(localVar){
        let localVar="I am different!"
        console.log("nested localVar: ", localVar);
    }

    console.log("logScape localVar: ", localVar);
}

logScope();