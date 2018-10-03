import * as moment from 'moment';
export class Filter {
    [key: string]: any;
    constructor(
    public sourceCity: string,
    public destinationCity: string,
    public departureDate: moment.Moment,
    public passengers: number,
    public returnDate?: moment.Moment
    ) {}
}
