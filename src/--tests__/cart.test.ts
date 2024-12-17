import Cart from '../cart';
import Movie from '../film';

test('checking Cart', () => {
    let cart = new Cart();
    let film = new Movie('Мстители', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключения', 137);
    cart.addMovie(film);
    expect(cart.getMovies()).toEqual([film]);
    expect(cart.getTotalMovies()).toBe(1);
});

test('checking Cart method clear', () => {
    let cart = new Cart();
    let film = new Movie('Мстители', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключения', 137);
    cart.addMovie(film);
    expect(cart.getTotalMovies()).toBe(1);
    cart.clear();
    expect(cart.getTotalMovies()).toBe(0);
});