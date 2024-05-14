class disco {
    constructor(nombre, interprete, year, temas, tapa, video) {
        this.nombre = nombre;
        this.interprete = interprete;
        this.year = year;
        this.temas = temas;
        this.tapa = tapa;
        this.video = video;
    }
}

const unbaion = new disco('Un baión para el ojo idiota', 'Los Redonditos de Ricota', '1988',
    ['Masacre en el puticlub', 'Noticias de ayer', 'Aquella solitaria vaca cubana', 'Todo preso es político',
        'Vencedores vencidos', 'Vamos las bandas', 'Ella debe estar tan linda', 'Todo un palo'],
    './discos/un-baion/tapa-un-baion.jpg', '36OMQCFkJKk'
);

const lagrasa = new disco('La Grasa de las Capitales', 'Serú Girán', '1979',
    ['La Grasa de las Capitales', 'San Francisco y el Lobo', 'Perro Andaluz', 'Frecuencia Modulada',
        'Paranoia y Soledad', 'Noche de Perros', 'Viernes 3AM', 'Los Sobrevivientes', 'Canción de Hollywood'],
    './discos/la-grasa/tapa-la-grasa.jpg', '2ODGjoxA-js'
);

const revolver = new disco('Revolver', 'The Beatles', '1966',
    ['Taxman', 'Eleanor Rigby', "I'm Only Sleeping", 'Love You To', 'Here, There and Everywhere', 'Yellow Submarine',
        'She Said She Said', 'Good Day Sunshine', 'And Your Bird Can Sing', 'For No One', 'Doctor Robert',
        'I Want to Tell You', 'Got to Get You into My Life', 'Tomorrow Never Knows'],
    './discos/revolver/tapa-revolver.jpg', 'b6z6YuyIcew'
);

const abnormal = new disco('The New Abnormal', 'The Strokes', '2022',
    ['The Adults Are Talking', 'Selfless', 'Brooklyn Bridge to Chorus', 'Bad Decisions', 'Eternal Summer', 'At The Door'
        , 'Why Are Sundays So Depressing?', 'Not the Same Anymore', 'Ode To The Mets'],
    './discos/the-new-abnormal/tapa-the-new-abnormal.jpeg', 'jhfDq06ghfU'
);

const nirvunplug = new disco('MTV Unplugged', 'Nirvana', '1994',
    ['About a Girl', 'Come as You Are', "Jesus Doesn't Want Me for a Sunbeam", 'The Man Who Sold the World',
        'Pennyroyal Tea', 'Dumb', 'Polly', 'On A Plain', 'Something In The Way', 'Plateau', 'Oh Me',
        'Lake of Fire', 'All Apologies', 'Where Did You Sleep Last Night'],
    './discos/nirvana-unplugged/nirvana-unplug.webp', 'IAp6bQfTQ20'
);

function selectedDisc(selDisc) {

    document.getElementById('albumName').innerText = selDisc["nombre"];
    document.getElementById('descripcion').innerHTML = selDisc.year + ' - ' + selDisc.interprete;
    document.getElementById('tapadisco').src = selDisc.tapa;

    var songlist = document.getElementById('songlist');

    if (document.getElementById('lista-temas')) {
        document.getElementById('lista-temas').remove();
    }

    var listatemas = document.createElement('ol');
    listatemas.id = 'lista-temas';


    for (let i = 0; i < selDisc['temas'].length; i++) {
        var litema = document.createElement('li');
        litema.innerText = selDisc['temas'][i];
        listatemas.appendChild(litema);
    };

    songlist.appendChild(listatemas);

    var player = document.getElementById('player');

    if (document.getElementById('iplayer')) {
        document.getElementById('iplayer').remove();
    }

    var iplayer = document.createElement('iframe');
    iplayer.id = 'iplayer';
    iplayer.classList.add('iplayer');
    iplayer.width = '640';
    iplayer.height = "320";
    iplayer.src = 'https://www.youtube.com/embed/' + selDisc['video'];
    iplayer.allowfullscreen;
    iplayer.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iplayer.referrerpolicy = "strict-origin-when-cross-origin";

    player.appendChild(iplayer);

}

selectedDisc(unbaion)