import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { BarChartData } from './barchart-models';

@Directive({
  selector: '[appBarChartData]',
  exportAs: 'appBarChartData',
})
export class BarchartDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('appBarChartData') barChartdata: BarChartData[];

  constructor(private canvasElRef: ElementRef) { }

  ngOnInit() {
    const ctx = this.canvasElRef.nativeElement.getContext('2d');
    console.log(ctx);
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
