/**
 * The code for drawing bar-charts on canvas is based on the following gitub repository:
 * https://github.com/jensjaeger/Simple-canvas-bar-chart
 */

import { Directive, ElementRef, HostListener, Input, OnInit, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { BarChartData, BarChartDataCollection } from './barchart-models';

@Directive({
  selector: '[appBarChartData]',
  exportAs: 'appBarChartData',
})
export class BarchartDirective implements OnInit, OnChanges {
  // tslint:disable:no-input-rename
  @Input('appBarChartData') barChartdata: BarChartData[];
  @Input('appBarChartColor') barColor: string;
  @Input('appBarChartTitle') title: string;

  private canvasWidth: number;
  private canvasHeight: number;
  private canvasContext: any;

  private headLineFont: string;
  private labelFont: string;
  private barLabelFont: string;
  private biggestValue: number;
  private xMiddleOfDiagram: number;
  private yBarStartPoint: number;
  private barWidth: number;
  private xMargin: number;
  private textColor: string;
  private yMargin: number;
  private barMaxHeight: number;
  private yLabelStartPoint: any;

  private showPercentageFreeSpaces = false;

  constructor(private canvasElRef: ElementRef) { }
  @HostListener('click') onMouseClick() {
    console.log('clicked the canvas');
    this.showPercentageFreeSpaces = !this.showPercentageFreeSpaces;
    this.redrawCanvas();
  }

  ngOnInit() {
    this.canvasWidth = this.canvasElRef.nativeElement.width;
    this.canvasHeight = this.canvasElRef.nativeElement.height;
    this.canvasContext = this.canvasElRef.nativeElement.getContext('2d');
    this.yMargin = 25; // margin on top and bottom
    this.xMargin = 10; // margin left and right and beetween bars

    this.configureCanvasFonts();
    this.redrawCanvas();
  }

  redrawCanvas() {
    this.configureCanvas();
    this.drawBarChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.canvasContext) {
      return;
    }
    console.log('changes in barChartdata, redrawing', this.barColor);
    this.redrawCanvas();
  }

  private configureCanvas() {
    const values = this.barChartdata.map(d => d.value);
    this.biggestValue = this.showPercentageFreeSpaces ? 100 : Math.max(...values);

    this.barMaxHeight = this.canvasHeight - this.yMargin * 2; // maximum bar height depending on canvas height
    this.barWidth = (this.canvasWidth - (values.length + 2) * this.xMargin) / values.length; // width of bar depending on canvas width
    this.yBarStartPoint = this.canvasHeight - this.yMargin; // position where the bars start
    this.yLabelStartPoint = this.yBarStartPoint + 5; // middle of each bar for
    this.xMiddleOfDiagram = (this.xMargin + this.xMargin * values.length + this.barWidth * values.length) / 2;

    this.canvasContext.shadowOffsetX = 3;
    this.canvasContext.shadowOffsetY = 3;
    this.canvasContext.shadowBlur = 10;
    this.canvasContext.shadowColor = 'rgba(64, 64, 64, 0.5)';
  }

  private configureCanvasFonts() {
    this.textColor = 'rgb(0,0,0)';

    if (this.barWidth < 100) {
      this.headLineFont = '14px sans-serif';
      this.labelFont = '12px sans-serif';
      this.barLabelFont = '10px sans-serif';
    } else {
      this.headLineFont = '18px sans-serif';
      this.labelFont = '14px sans-serif';
      this.barLabelFont = '12px sans-serif';
    };
  }

  private addCanvasTitle() {
    this.canvasContext.fillStyle = this.textColor;
    this.canvasContext.font = this.headLineFont;
    this.canvasContext.textBaseline = 'top';
    this.canvasContext.textAlign = 'center';
    this.canvasContext.fillText(this.title, this.xMiddleOfDiagram, 0);
  }

  private clearCanvas() {
    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  private drawBarChart() {
    this.clearCanvas();
    this.addCanvasTitle();

    let barNumber = 0;
    this.barChartdata.forEach(element => {
      this.addBarWithLabels(element, barNumber);
      barNumber++;
    });
  }

  private addBarWithLabels(barChartData: BarChartData, barNumber) {
    const value = this.showPercentageFreeSpaces ? barChartData.valuePercent : barChartData.value;
    const barHeight = (value / this.biggestValue) * this.barMaxHeight;
    const xMiddleOfBar = this.barWidth / 2 + this.xMargin + this.xMargin * barNumber + this.barWidth * barNumber;
    const yMiddleOfBar = this.yBarStartPoint - barHeight / 2;
    const xStartPoint = this.xMargin + this.xMargin * barNumber + this.barWidth * barNumber;

    this.addLabelBelowBar(barChartData.label, xMiddleOfBar);
    this.drawSingleBar(this.barColor, xStartPoint, barHeight);
    const valueToDisplay = this.showPercentageFreeSpaces ? Math.round(value) + '%' : value;
    this.addValueTextToBar(valueToDisplay, barChartData.valueType, xMiddleOfBar, yMiddleOfBar);
  }

  private drawSingleBar(barColor: string, xStartPoint: number, barHeight: number) {
    this.canvasContext.fillStyle = barColor;
    this.canvasContext.fillRect(xStartPoint, this.yBarStartPoint, this.barWidth, barHeight * -1);
  }

  private addLabelBelowBar(label: string, xMiddleOfBar: number) {
    this.canvasContext.fillStyle = this.textColor;
    this.canvasContext.font = this.labelFont;
    this.canvasContext.textBaseline = 'top';
    this.canvasContext.textAlign = 'center';
    this.canvasContext.fillText(label, xMiddleOfBar, this.yLabelStartPoint);
  }

  private addValueTextToBar(value: string | number, unit: string, xMiddleOfBar: number, yMiddleOfBar: number) {
    this.canvasContext.fillStyle = this.textColor;
    this.canvasContext.font = this.barLabelFont;
    this.canvasContext.textBaseline = 'top';
    this.canvasContext.textAlign = 'center';
    this.canvasContext.fillText(value + ' ' + unit, xMiddleOfBar, yMiddleOfBar);
  }
}
