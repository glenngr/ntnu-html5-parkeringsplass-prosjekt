import { Location } from './location.model';

export class ParkingSpace {
    constructor(public name: string, public totalSpaces: number, public freeSpaces: number, public location: Location, public size: number) { }
}