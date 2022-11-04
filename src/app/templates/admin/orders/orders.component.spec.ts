import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';

import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot()], 
    providers: [ApiService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create orders component', () => {
    expect(component).toBeTruthy();
  });

  it('should call allfood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.allfood).toBeTruthy();
  })

  it('should call allorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.allorder).toBeTruthy();
  })

  it('should call updateorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.updateorder).toBeTruthy();
  })
  
  it('should call updatefood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.updatefood).toBeTruthy();
  })
});
