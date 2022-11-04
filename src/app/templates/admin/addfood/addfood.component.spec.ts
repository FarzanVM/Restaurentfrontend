import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';

import { AddfoodComponent } from './addfood.component';
import { FormsModule } from '@angular/forms';

describe('AddfoodComponent', () => {
  let component: AddfoodComponent;
  let fixture: ComponentFixture<AddfoodComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot(),FormsModule], 
    providers: [ApiService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create addfood component', () => {
    expect(component).toBeTruthy();
  });

  it('should call addfood fucntion',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.addfood).toBeTruthy();
  })
});
