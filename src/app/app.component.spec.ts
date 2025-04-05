
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  })
  it('should have a title AngularJestSetup', () => {
   expect(fixture.title).toEqual('AngularJestSetup');
  });
});
