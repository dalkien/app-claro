import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CabecerasComponent } from './cabeceras.component';

describe('CabecerasComponent', () => {
  let component: CabecerasComponent;
  let fixture: ComponentFixture<CabecerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecerasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabecerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
