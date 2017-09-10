var movies = [{
        id: '1',
        title: 'Czysta formalność',
        dir: 'Giuseppe Tornatore',
        year: 1994,
        pic: 'pics/formalita.jpg'
    },
    {
        id: '2',
        title: 'Trainspotting 2',
        dir: 'Danny Boyle',
        year: 2016,
        pic: 'pics/train_2.jpg'
    },
    {
        id: '3',
        title: 'O północy w Paryżu',
        dir: 'Woody Allen',
        year: 2011,
        pic: 'pics/paryz.jpg'
    },
    {
        id: '4',
        title: 'Kawa i papierosy',
        dir: 'Jim Jarmusch',
        year: 2003,
        pic: 'pics/kawa.jpg'
    },
    {
        id: '5',
        title: 'Przekręt',
        dir: 'Guy Ritchie',
        year: 2000,
        pic: 'pics/snatch.jpg'
    },
    {
        id: '6',
        title: 'Drive',
        dir: 'Nicolas Refn',
        year: 2011,
        pic: 'pics/drive.jpg'
    }
];

// ---------------------------------------------------------------------------------------
var MovieItem = React.createClass({

    propTypes: {
        film: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('li', {
            key: this.props.film.id
        });
    }
});

// ---------------------------------------------------------------------------------------
var MovieTitle = React.createClass({

    propTypes: {
        film: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('h3', {}, this.props.film.title);
    }
});

// ---------------------------------------------------------------------------------------
var MovieDirector = React.createClass({

    propTypes: {
        film: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('p', {}, this.props.film.dir);
    }
});

// ---------------------------------------------------------------------------------------
var MovieYear = React.createClass({

    propTypes: {
        film: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('p', {}, this.props.film.year);
    }
});

// ---------------------------------------------------------------------------------------
var MoviePoster = React.createClass({

    propTypes: {
        film: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('img', {
            src: this.props.film.pic
        });
    }
});

// ---------------------------------------------------------------------------------------

var moviesElements = movies.map((movie) => {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement(MovieTitle, {
            film: movie
        }),
        React.createElement(MovieDirector, {
            film: movie
        }),
        React.createElement(MovieYear, {
            film: movie
        }),
        React.createElement('div', {
                className: 'poster'
            },
            React.createElement(MoviePoster, {
                film: movie
            })
        )
    )
});

var element =
    React.createElement('div', {
            className: 'container'
        },
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));