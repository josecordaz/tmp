import { Tmp2Page } from './app.po';

describe('tmp2 App', () => {
  let page: Tmp2Page;

  beforeEach(() => {
    page = new Tmp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
