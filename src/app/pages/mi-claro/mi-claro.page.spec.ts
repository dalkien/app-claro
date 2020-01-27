import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiClaroPage } from './mi-claro.page';

describe('MiClaroPage', () => {
  let component: MiClaroPage;
  let fixture: ComponentFixture<MiClaroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiClaroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiClaroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
