import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VuedetailsPage } from './vuedetails.page';

describe('VuedetailsPage', () => {
  let component: VuedetailsPage;
  let fixture: ComponentFixture<VuedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VuedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
