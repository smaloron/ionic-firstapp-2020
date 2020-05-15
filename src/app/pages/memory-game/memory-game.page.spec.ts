import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoryGamePage } from './memory-game.page';

describe('MemoryGamePage', () => {
  let component: MemoryGamePage;
  let fixture: ComponentFixture<MemoryGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoryGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
