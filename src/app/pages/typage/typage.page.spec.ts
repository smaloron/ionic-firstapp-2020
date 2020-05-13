import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypagePage } from './typage.page';

describe('TypagePage', () => {
  let component: TypagePage;
  let fixture: ComponentFixture<TypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
