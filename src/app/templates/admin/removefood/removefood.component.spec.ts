import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';

import { RemovefoodComponent } from './removefood.component';
import { FormsModule } from '@angular/forms';

describe('RemovefoodComponent', () => {
  let component: RemovefoodComponent;
  let fixture: ComponentFixture<RemovefoodComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot(),FormsModule], 
    providers: [ApiService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovefoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create removefood component', () => {
    expect(component).toBeTruthy();
  });

  it('should call deletefood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.deletefood).toBeTruthy();
  })
});
