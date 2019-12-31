export class PriceHistory {
    id: number;
    dates: string[];
    prices: number[];
    startDate: string;

    constructor(id: number, dates: string[], prices: number[], startDate: string) {
        this.id = id;
        this.dates = dates;
        this.prices = prices;
        this.startDate = startDate;
    }
}