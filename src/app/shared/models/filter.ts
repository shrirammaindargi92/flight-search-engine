import * as moment from 'moment';
export class Filter {
    public sourceCity: string;
    public destinationCity: string;
    public departureDate: moment.Moment;
    public returnDate?: moment.Moment;
    public passengers: number;
}