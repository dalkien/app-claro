import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiendaClaroPage } from './tienda-claro.page';

describe('TiendaClaroPage', () => {
  let component: TiendaClaroPage;
  let fixture: ComponentFixture<TiendaClaroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaClaroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiendaClaroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
