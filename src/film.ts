export default class Movie  {
    // при использовани TypeScript в конструкторе, конструкция ниже не нужна, но в параметрах constructor указываем readonly
    // name: string;
    // years: number;
    // country: string;
    // slogan: string;
    // genre: string;
    // time: number;

    constructor(
        readonly name: string,
        readonly years: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly time: number,
    ) {
        // из-за использования TypeScript конструкция ниже не нужна, но в параметрах constructor указываем readonly
        // this.name = name;
        // this.years = years;
        // this.country = country;
        // this.slogan = slogan;
        // this.genre = genre;
        // this.time = time;
    }

    getMovieInfo(): string {
        return `Название фильма: ${this.name}, год: ${this.years}, страна: ${this.country}, слоган: ${this.slogan}, жанр: ${this.genre}, время: ${this.time} мин.`;
    }
}

