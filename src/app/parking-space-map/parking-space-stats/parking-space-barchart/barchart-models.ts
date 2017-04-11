export class BarChartData {
    constructor(
        public label: string,
        public value: number,
        public valuePercent: number,
        public valueType: string,
    ) { }
}

export class BarChartDataCollection {
    constructor(public name: string, public barChartData: BarChartData[], public barChartColor?: string) {}
}

export class BarChartSelectedColorChange {
  constructor(public newColor: string, public chartTitle) { }
}
