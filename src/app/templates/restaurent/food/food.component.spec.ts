import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

import { FoodComponent } from './food.component';
import { of } from 'rxjs';

describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;

  const mockActivatedRoute = { 
    queryParams: of({ abc: 'testABC' }) 
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot()], 
    providers: [ApiService,{
      provide: ActivatedRoute,
      useValue: mockActivatedRoute
  },]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create food component', () => {
    expect(component).toBeTruthy();
  });

  it('should call allfood function',()=>{
    const service:ApiService=TestBed.get(ApiService);
    expect(service.allfood).toBeTruthy();
  })

  it('should call addorder function',()=>{
    const service:ApiService=TestBed.get(ApiService);
    expect(service.addorder).toBeTruthy();
  })
});
