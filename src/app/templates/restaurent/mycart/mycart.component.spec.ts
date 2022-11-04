import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';


import { MycartComponent } from './mycart.component';

describe('MycartComponent', () => {
  let component: MycartComponent;
  let fixture: ComponentFixture<MycartComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot()], 
    providers: [ApiService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create mycart component', () => {
    expect(component).toBeTruthy();
  });

  it('should call allorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.allorder).toBeTruthy();
  })

  it('should call profileDetails function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.profileDetails).toBeTruthy();
  })

  it('should call addcomment function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.addComments).toBeTruthy();
  })

  it('should call updateorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.updateorder).toBeTruthy();
  })

  it('should call deleteorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.deleteorder).toBeTruthy();
  })
});
