import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtocartPage } from './addtocart.page';

describe('AddtocartPage', () => {
  let component: AddtocartPage;
  let fixture: ComponentFixture<AddtocartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtocartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtocartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
