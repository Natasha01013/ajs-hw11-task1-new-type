import Movie from './film';

export default class Cart {
    //массив типа Movie[], который хранит все добавленные фильмы
    //private - масиив не доступен напрямую извне, доступ к нему только через методы класса Cart
    items: Movie[] = [];

    //добавляет новый фильм в корзину 
    addMovie(movie: Movie): void {
        this.items.push(movie);
    }

    //метод возвращает текущий список всех фильмов в корзине
    getMovies(): Movie[] {
        return this.items;
    }

    //метод возвращает количество фильмов в корзине
    getTotalMovies(): number {
        return this.items.length;
    }

    //метод очищает корзину, удаляя все фильмы
    clear(): void {
        this.items = [];
    }
}