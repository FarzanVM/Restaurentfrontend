import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';

import { MenuitemComponent } from './menuitem.component';

describe('MenuitemComponent', () => {
  let component: MenuitemComponent;
  let fixture: ComponentFixture<MenuitemComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot()], 
    providers: [ApiService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create menuitem component', () => {
    expect(component).toBeTruthy();
  });

  it('should call allfood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.allfood).toBeTruthy();
  })
});
