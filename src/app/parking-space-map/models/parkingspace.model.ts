import { Location } from './location.model';

export class ParkingSpace {
    constructor(
        public name: string,
        public totalSpaces: number,
        public occupiedSpaces: number,
        public location: Location,
        public size: number,
        public hourlyRate: number,
        public description: string
    ) { }
}
