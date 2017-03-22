import { browser, element, by } from 'protractor';

export class NtnuHtml5ParkeringsplassProsjektPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
