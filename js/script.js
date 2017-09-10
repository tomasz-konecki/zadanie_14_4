var movies = [{
        id: 1,
        title: 'Czysta formalność',
        dir: 'Giuseppe Tornatore',
        year: 1994,
        pic: 'pics/formalita.jpg'
    },
    {
        id: 2,
        title: 'Trainspotting 2',
        dir: 'Danny Boyle',
        year: 2016,
        pic: 'pics/train_2.jpg'
    },
    {
        id: 3,
        title: 'O północy w Paryżu',
        dir: 'Woody Allen',
        year: 2011,
        pic: 'pics/paryz.jpg'
    },
    {
        id: 4,
        title: 'Kawa i papierosy',
        dir: 'Jim Jarmusch',
        year: 2003,
        pic: 'pics/kawa.jpg'
    },
    {
        id: 5,
        title: 'Przekręt',
        dir: 'Guy Ritchie',
        year: 2000,
        pic: 'pics/snatch.jpg'
    },
    {
        id: 6,
        title: 'Drive',
        dir: 'Nicolas Refn',
        year: '2011',
        pic: 'pics/drive.jpg'
    }
];

// ---------------------------------------------------------------------------------------------------------

var moviesElements = movies.map((movie) => {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h3', {}, movie.title),
        React.createElement('p', {}, 'Reżyseria: ', movie.dir),
        React.createElement('p', {}, 'Rok produkcji: ', movie.year),
        React.createElement('div', {
                className: "poster"
            },
            React.createElement('img', {
                src: movie.pic
            })
        )
    );
});

// ---------------------------------------------------------------------------------------------------------

var element =
    React.createElement('div', {
            className: 'container'
        },
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

// ---------------------------------------------------------------------------------------------------------

ReactDOM.render(element, document.getElementById('app'));