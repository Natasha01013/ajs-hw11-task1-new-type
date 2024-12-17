import Movie from '../film';

test('checking Movie', () => {
    let film = new Movie('Мстители', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключения', 137);
    let dataFilm = film.getMovieInfo();
    expect(dataFilm).toEqual('Название фильма: Мстители, год: 2012, страна: США, слоган: Avengers Assemble, жанр: фантастика, боевик, фэнтези, приключения, время: 137 мин.');
});

