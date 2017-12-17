import { Component, OnInit, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-help-about',
  templateUrl: './help-about.component.html',
  styleUrls: ['./help-about.component.scss']
})
export class HelpAboutComponent {
  private _assetsUrl: string;
  private _statsNavigateHowtoGif = 'stats-navigate-howto.gif';
  private _filterHowtoGif = 'filter-howto.gif';
  private _mylocationHowtoGif = 'mylocation-howto.gif';
  private _detailsHowtoGif = 'details-howto.gif';
  private _statsChooseHowtoGif = 'stats-choose-howto.gif';
  private _statsColorHowtoGif = 'stats-color-howto.gif';
  private _statsPercentHowtoGif = 'stats-percent-howto.gif';
  private _themeHowtoGif = 'theme-howto.gif';

  get themeHowtoGif() {
    return this._assetsUrl + this._themeHowtoGif;
  }

  get statsPercentHowtoGif() {
    return this._assetsUrl + this._statsPercentHowtoGif;
  }

  get statsColorHowtoGif() {
    return this._assetsUrl + this._statsColorHowtoGif;
  }

  get statsChooseHowtoGif() {
    return this._assetsUrl + this._statsChooseHowtoGif;
  }

  get detailsHowtoGif() {
    return this._assetsUrl + this._detailsHowtoGif;
  }

  get mylocationHowtoGif() {
    return this._assetsUrl + this._mylocationHowtoGif;
  }

  get filterHowtoGif() {
    return this._assetsUrl + this._filterHowtoGif;
  }

  get statsNavigateHowtoGif() {
    return this._assetsUrl + this._statsNavigateHowtoGif;
  }
  constructor( @Inject(APP_BASE_HREF) private baseHref: string) {
    console.log('configured basehref:', this.baseHref);
    this._assetsUrl = this.baseHref + 'assets/';
  }
}
