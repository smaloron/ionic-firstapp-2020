import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicGridPage } from './ionic-grid.page';

describe('IonicGridPage', () => {
  let component: IonicGridPage;
  let fixture: ComponentFixture<IonicGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicGridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonicGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
