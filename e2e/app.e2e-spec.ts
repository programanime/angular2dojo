import { DojopruebaPage } from './app.po';

describe('dojoprueba App', function() {
  let page: DojopruebaPage;

  beforeEach(() => {
    page = new DojopruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
