import { NtnuHtml5ParkeringsplassProsjektPage } from './app.po';

describe('ntnu-html5-parkeringsplass-prosjekt App', () => {
  let page: NtnuHtml5ParkeringsplassProsjektPage;

  beforeEach(() => {
    page = new NtnuHtml5ParkeringsplassProsjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
