function generatePyramid() {
    var totalNumberofRows = n;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += '#' + ' ';
        }
        console.log(output);
        output = '';
    }
}

n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
generatePyramid(); 

