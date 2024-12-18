export default class Movie  {
    name: string;
    years: number;
    country: string;
    slogan: string;
    genre: string;
    time: number;

    constructor(
        name: string,
        years: number,
        country: string,
        slogan: string,
        genre: string,
        time: number,
    ) {
        this.name = name;
        this.years = years;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
    }

    getMovieInfo(): string {
        return `Название фильма: ${this.name}, год: ${this.years}, страна: ${this.country}, слоган: ${this.slogan}, жанр: ${this.genre}, время: ${this.time} мин.`;
    }
}

