import { ComponentFixture, TestBed } from '@angular/core/testing';


import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';

import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot(),FormsModule], 
    providers: [ApiService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create profile component', () => {
    expect(component).toBeTruthy();
  });

  it('should call profileDetails function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.profileDetails).toBeTruthy();
  })

  it('should call updateprofile function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.updateprofile).toBeTruthy();
  })

  it('should call addprofile function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.addProfile).toBeTruthy();
  })
});
