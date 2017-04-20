export class HistoryCollection {
    constructor(
        public parkingSpaceName: string,
        public history: HistoryData[],
    ) {}
}

export class HistoryData {
    date: Date;
    occupiedSpaces: number;
    totalSpaces: number;
    freeSpaces: number;
}
