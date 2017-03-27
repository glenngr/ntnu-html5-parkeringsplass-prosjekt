import { Injectable } from '@angular/core';

@Injectable()
export class InfoCircleColorService {
    private fullColor = 'red';
    private lowColor = 'yellow';
    private normalColor = 'blue';

    private fullFreeSpace = 0;
    private lowFreeSpace = 20;

    constructor() { }

    getColor(occupiedSpaces: number, totalSpaces: number): string {
        let freeSpaces = totalSpaces - occupiedSpaces;
        if (freeSpaces === 0) {
            return this.fullColor; 
        }
        let freeSpacePercent = freeSpaces * 100 / totalSpaces;
        console.log('Free space is: ', freeSpacePercent);
        if (freeSpacePercent <= this.lowFreeSpace) {
            return this.lowColor;
        }

        return this.normalColor;
    }

}