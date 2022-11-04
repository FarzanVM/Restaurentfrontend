import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';

import { AdminsignupComponent } from './adminsignup.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AdminsignupComponent', () => {
  let component: AdminsignupComponent;
  let fixture: ComponentFixture<AdminsignupComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot(),ReactiveFormsModule], 
    providers: [ApiService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create adminsignup component', () => {
    expect(component).toBeTruthy();
  });

  it('should call adminsignup fucntion',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.adminsignup).toBeTruthy();
  })
});
