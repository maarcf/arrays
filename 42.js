// ARRAYS

//Ejercicio 1
let playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You',
 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

 console.log(playlistFoo[1], playlistFoo[4]);

//Ejercicio 2
let cantantesFavorites = ['P!nk', 'Soda Stereo', "Shakira de los '90", 'Tonolec', 'Carla Morrison',
'Miss Bolivia', 'Space Girls', 'Amy Winehouse','La Oreja de Van Gogh', 'Mon Laferte'];
let primeraCantante = cantantesFavorites[0];
let terceraCantante = cantantesFavorites[2];
let sextaCantante = cantantesFavorites[5];

console.log(`La primera cantante favorita es ${primeraCantante}.
La tercera cantante es ${terceraCantante}.
La sexta cantante es ${sextaCantante}.`);


//Ejercicio 5
let alumnes = [];
alumnes[0] = 'Rachael';
alumnes[1] = 'Mónica';
alumnes[2] = 'Phoebe';
alumnes[3] = 'Ross';
alumnes[4] = 'Joey';
alumnes[5] = 'Chandler';

console.log(`índice 0: ${alumnes[0]}
índice 1: ${alumnes[1]}
índice 2: ${alumnes[2]}
índice 3: ${alumnes[3]}
índice 4: ${alumnes[4]}
índice 5: ${alumnes[5]}`);

console.log(alumnes);

//Ejercicio 8
let etiquetasHtml = ['<h1>', '<aside>', '<p>', '<div>', '<body>', '<section>', '<footer>',
'<header>', '<button>', '<form>'];
console.log(etiquetasHtml[1].toUpperCase());
console.log(etiquetasHtml[4].toLowerCase());
console.log(etiquetasHtml.length);


//Ejercicio 9
let ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon',
 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

 console.log(ganadorasRupaul[0])
 console.log(ganadorasRupaul[ganadorasRupaul.length - 1]);


//Ejercicio 10
let playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

console.log (playlistFoo.length);
console.log (playlistNirvana.length);
if (playlistNirvana.length > playlistFoo.length) {
    console.log("La playlist de Nirvana tiene más canciones.")
} else {
    console.log("La playlist de Foo Fighters tiene más canciones.")
};

