document.addEventListener('DOMContentLoaded', function() {
    const standings = [
        {
            name: 'Max Verstappen',
            points: 2979.5,
            wins: 62,
            position: 1,
            img: 'script/Imagenes/Max_Verstappen.png',
            team: 'Red Bull Racing',
            country: 'Países Bajos',
            podiums: 111,
            races: 206,
            championships: 3,
            bestResult: '1 (x62)',
            highestGrid: 1,
            birthdate: '30/09/1997',
            birthplace: 'Hasselt, Bélgica'
        },
        {
            name: 'Lando Norris',
            points: 964,
            wins: 2,
            position: 2,
            img: 'script/Imagenes/lando-norris-04.png',
            team: 'McLaren',
            country: 'Reino Unido',
            podiums: 25,
            races: 125,
            championships: 0,
            bestResult: '1 (x3)',
            highestGrid: 1,
            birthdate: '13/11/1999',
            birthplace: 'Bristol, Reino Unido'
        },
        {
            name: 'Charles Leclerc',
            points: 1381,
            wins: 8,
            position: 3,
            img: 'script/Imagenes/charles-leclerc-2024.png',
            team: 'Ferrari',
            country: 'Mónaco',
            podiums: 41,
            races: 146,
            championships: 0,
            bestResult: '1 (x8)',
            highestGrid: 1,
            birthdate: '16/10/1997',
            birthplace: 'Monte Carlo, Mónaco'
        },
        {
            name: 'Oscar Piastri',
            points: 359,
            wins: 2,
            position: 4,
            img: 'script/Imagenes/oscar-piastri-2024.png',
            team: 'McLaren',
            country: 'Australia',
            podiums: 9,
            races: 43,
            championships: 0,
            bestResult: '1 (x2)',
            highestGrid: 2,
            birthdate: '04/06/2001',
            birthplace: 'Melbourne, Victoria'
        },
        {
            name: 'Carlos Sainz',
            points: 1226.5,
            wins: 4,
            position: 5,
            img: 'script/Imagenes/carlos-sainz-55.png',
            team: 'Ferrari',
            country: 'España',
            podiums: 25,
            races: 205,
            championships: 0,
            bestResult: '1 (x4)',
            highestGrid: 1,
            birthdate: '01/09/1994',
            birthplace: 'Madrid, España'
        },
        {
            name: 'George Russell',
            points: 661,
            wins: 2,
            position: 6,
            img: 'script/Imagenes/george-russell-2024.png',
            team: 'Mercedes',
            country: 'Reino Unido',
            podiums: 14,
            races: 125,
            championships: 0,
            bestResult: '1 (x2)',
            highestGrid: 1,
            birthdate: '15/02/1998',
            birthplace: 'Kings Lynn Inglaterra'
        },
        {
            name: 'Lewis Hamilton',
            points: 4829.5,
            wins: 105,
            position: 7,
            img: 'script/Imagenes/lewis-hamilton-2024.png',
            team: 'Mercedes',
            country: 'Reino Unido',
            podiums: 201,
            races: 353,
            championships: 7,
            bestResult: '1 (x105)',
            highestGrid: 1,
            birthdate: '01/07/1985',
            birthplace: 'Stevenage, Inglaterra'
        },
        {
            name: 'Sergio Pérez',
            points: 1637,
            wins: 6,
            position: 8,
            img: 'script/Imagenes/checo-perez-11.png',
            team: 'Red Bull Racing',
            country: 'México',
            podiums: 39,
            races: 279,
            championships: 0,
            bestResult: '1 (x6)',
            highestGrid: 1,
            birthdate: '26/01/1990',
            birthplace: 'Guadalajara, México'
        },
        {
            name: 'Fernando Alonso',
            points: 2329,
            wins: 32,
            position: 9,
            img: 'script/Imagenes/fernando-alonso-2024.png',
            team: 'Aston Martin',
            country: 'España',
            podiums: 106,
            races: 401,
            championships: 2,
            bestResult: '1 (x32)',
            highestGrid: 1,
            birthdate: '29/07/1981',
            birthplace: 'Oviedo, España'
        },
        {
            name: 'Nico Hulkenberg',
            points: 561,
            wins: 0,
            position: 10,
            img: 'script/Imagenes/nico.png',
            team: 'Haas',
            country: 'Alemania',
            podiums: 0,
            races: 227,
            championships: 0            ,
            bestResult: '4 (x3)',
            highestGrid: 1,
            birthdate: '19/08/1987',
            birthplace: 'Emmerich am Rhein, Alemania'
        },
        {
            name: 'Yuki Tsunoda',
            points: 89,
            wins: 0,
            position: 11,
            img: 'script/Imagenes/yuki-tsunoda-2024.png',
            team: 'RB',
            country: 'Japan',
            podiums: 0,
            races: 87,
            championships: 0,
            bestResult: '4 (x1)',
            highestGrid: 3,
            birthdate: '11/05/2000',
            birthplace: 'Sagamihara, Japón'
        },
        {
            name: 'Pierre Gasly',
            points: 420,
            wins: 1,
            position: 12,
            img: 'script/Imagenes/Gasly.png',
            team: 'Alpine',
            country: 'Francia',
            podiums: 5,
            races: 151,
            championships: 0,
            bestResult: '1 (x1)',
            highestGrid: 2,
            birthdate: '02/07/1996',
            birthplace: 'Ruán, Francia'
        },
        {
            name: 'Lance Stroll',
            points: 292,
            wins: 0,
            position: 13,
            img: 'script/Imagenes/Stroll.png',
            team: 'Aston Martin',
            country: 'Canada',
            podiums: 3,
            races: 164,
            championships: 0,
            bestResult: '3 (x3)',
            highestGrid: 1,
            birthdate: '29/10/1998',
            birthplace: 'Montreal, Canadá'
        },
        {
            name: 'Esteban Ocon',
            points: 445,
            wins: 1,
            position: 14,
            img: 'script/Imagenes/esteban-ocon-31.png',
            team: 'Alpine',
            country: 'Francia',
            podiums: 4,
            races: 154,
            championships: 0,
            bestResult: '1 (x1)',
            highestGrid: 3,
            birthdate: '17/09/1996',
            birthplace: 'Évreux, Normandía'
        },
        {
            name: 'Kevin Magnussen',
            points: 200,
            wins: 0,
            position: 15,
            img: 'script/Imagenes/kevin-magnussen-2024.png',
            team: 'Haas',
            country: 'Dinamarca',
            podiums: 1,
            races: 183,
            championships: 0,
            bestResult: '2 (x1)',
            highestGrid: 4,
            birthdate: '10/05/1992',
            birthplace: 'Roskilde, Dinamarca'
        },
        {
            name: 'Alejandro Albon',
            points: 240,
            wins: 0,
            position: 16,
            img: 'script/Imagenes/alex-albon-23.png',
            team: 'Williams',
            country: 'Tailandia',
            podiums: 2,
            races: 102,
            championships: 0,
            bestResult: '3 (x2)',
            highestGrid: 4,
            birthdate: '23/03/1996',
            birthplace: 'Londres, Inglaterra'
        },
        {
            name: 'Daniel Ricciardo',
            points: 1329,
            wins: 8,
            position: 17,
            img: 'script/Imagenes/daniel-ricciardo-2024.png',
            team: 'RB',
            country: 'Australia',
            podiums: 32,
            races: 257,
            championships: 0,
            bestResult: '2 (x1)',
            highestGrid: 3,
            birthdate: '1/08/1989',
            birthplace: 'Perth, Australia'
        },
        {
            name: 'Oliver Bearman',
            points: 7,
            wins: 0,
            position: 18,
            img: 'script/Imagenes/oliver-bearman-soymotor.png',
            team: 'Haas',
            country: 'Dinamarca',
            podiums: 0,
            races: 3,
            championships: 0,
            bestResult: '9 (x2)',
            highestGrid: 11,
            birthdate: '10/05/1992',
            birthplace: 'Roskilde, Dinamarca'
        },
        {
            name: 'Franco Colapinto',
            points: 5,
            wins: 0,
            position: 19,
            img: 'script/Imagenes/Franco_Colapinto.png',
            team: 'Williams',
            country: 'Argentina',
            podiums: 0,
            races: 6,
            championships: 0,
            bestResult: '8 (x1)',
            highestGrid: 8,
            birthdate: '27/05/2003',
            birthplace: 'Buenos Aires, Argentina'
        },
        {
            name: 'Liam Lawson',
            points: 6,
            wins: 0,
            position: 20,
            img: 'script/Imagenes/lawson-cutout-v2.png',
            team: 'RB',
            country: 'Nueva Zelanda',
            podiums: 0,
            races: 8,
            championships: 0,
            bestResult: '9 (x3)',
            highestGrid: 10,
            birthdate: '11/02/2002',
            birthplace: 'Hastings, Nueva Zelanda'
        },
        {
            name: 'Zhou Guanyu',
            points: 12,
            wins: 0,
            position: 21,
            img: 'script/Imagenes/guanyu-zhou-2024.png',
            team: 'Kick Sauber',
            country: 'China',
            podiums: 0,
            races: 65,
            championships: 0,
            bestResult: '8 (x1)',
            highestGrid: 5,
            birthdate: '30/05/1999',
            birthplace: 'Shanghai, China'
        },
        {
            name: 'Logan Sargeant',
            points: 1,
            wins: 0,
            position: 22,
            img: 'script/Imagenes/logan-sargeant-2024.png',
            team: 'Williams',
            country: 'Estados Unidos',
            podiums: 0,
            races: 1,
            championships: 0,
            bestResult: '8 (x1)',
            highestGrid: 10,
            birthdate: '30/12/2000',
            birthplace: 'Fort Lauderdale, Florida'
        },
        {
            name: 'Valtteri Bottas',
            points: 1797,
            wins: 0,
            position: 23,
            img: 'script/Imagenes/valtteri-bottas-2024.png',
            team: 'Kick Sauber',
            country: 'Finlandia',
            podiums: 67,
            races: 243,
            championships: 0,
            bestResult: '1 (x10)',
            highestGrid: 1,
            birthdate: '28/08/1989',
            birthplace: 'Nastola, Finlandia'
        },
    ];

    const table = document.getElementById('standings');
    const details = document.getElementById('driver-details');
    const driverImg = document.getElementById('driver-img');
    const driverName = document.getElementById('driver-name');
    const driverTeam = document.getElementById('driver-team');
    const driverCountry = document.getElementById('driver-country');
    const driverPodiums = document.getElementById('driver-podiums');
    const driverPoints = document.getElementById('driver-points');
    const driverWins = document.getElementById('driver-wins');
    const driverRaces = document.getElementById('driver-races');
    const driverChampionships = document.getElementById('driver-championships');
    const driverBestResult = document.getElementById('driver-best-result');
    const driverHighestGrid = document.getElementById('driver-highest-grid');
    const driverBirthdate = document.getElementById('driver-birthdate');
    const driverBirthplace = document.getElementById('driver-birthplace');

    standings.forEach(driver => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        cell1.textContent = driver.name;
        cell2.textContent = driver.points;
        cell3.textContent = driver.wins;
        cell4.textContent = driver.position;

        row.addEventListener('click', function() {
            driverImg.src = driver.img;
            driverName.textContent = `Nombre: ${driver.name}`;
            driverTeam.textContent = `Equipo: ${driver.team}`;
            driverCountry.textContent = `País: ${driver.country}`;
            driverPodiums.textContent = `Podios: ${driver.podiums}`;
            driverPoints.textContent = `Puntos: ${driver.points}`;
            driverWins.textContent = `Victorias: ${driver.wins}`;
            driverRaces.textContent = `Carreras: ${driver.races}`;
            driverChampionships.textContent = `Campeonatos del mundo: ${driver.championships}`;
            driverBestResult.textContent = `Mejor resultado en carrera: ${driver.bestResult}`;
            driverHighestGrid.textContent = `Posición más alta en la parrilla: ${driver.highestGrid}`;
            driverBirthdate.textContent = `Fecha de nacimiento: ${driver.birthdate}`;
            driverBirthplace.textContent = `Lugar de nacimiento: ${driver.birthplace}`;
            details.style.display = 'block';
        });
    });

    // Ocultar detalles al inicio
    details.style.display = 'none';
});

// Selección de carouseles
const carouselImages = new bootstrap.Carousel(document.querySelector('#carouselImages'));
const carouselMaps = new bootstrap.Carousel(document.querySelector('#carouselMaps'));

// Sincronización de carouseles
document.querySelector('#carouselImages').addEventListener('slide.bs.carousel', (event) => {
    carouselMaps.to(event.to);
});

document.querySelector('#carouselMaps').addEventListener('slide.bs.carousel', (event) => {
    carouselImages.to(event.to);
});

// Terminos de Privacidad 
const privacyLink = document.querySelector('a[data-bs-target="#privacyModal"]');
privacyLink.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('privacyModal'));
    modal.show();
});

//Modo oscuro 
let modo = document.getElementById("boton");
let body = document.body;

// Al cargar la página, revisa si el modo oscuro estaba activado
if (localStorage.getItem("modoOscuro") === "true") {
    body.classList.add("dark");
    document.getElementById("luna").className = "bi bi-sun"; // Cambia a icono de sol
}

modo.addEventListener("click", function () {
    body.classList.toggle("dark");

    // Guarda el estado del modo oscuro en localStorage
    let modoOscuroActivo = body.classList.contains("dark");
    localStorage.setItem("modoOscuro", modoOscuroActivo);

    // Cambia el icono entre luna y sol
    let icono = document.getElementById("luna");
    if (modoOscuroActivo) {
        icono.className = "bi bi-sun"; // Cambia a icono de sol
    } else {
        icono.className = "bi bi-moon"; // Cambia a icono de luna
    }
});