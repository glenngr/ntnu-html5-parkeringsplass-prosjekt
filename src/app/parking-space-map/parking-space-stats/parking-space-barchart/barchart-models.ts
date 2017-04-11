export class BarChartData {
    constructor(
        public name: string,
        public value: number,
        public valueType: string,
    ) { }
}

export class BarChartDataCollection {
    constructor(public name: string, public barChartData: BarChartData[]) {}
}
