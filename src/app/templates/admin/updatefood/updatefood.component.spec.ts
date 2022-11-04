import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';

import { UpdatefoodComponent } from './updatefood.component';
import { FormsModule } from '@angular/forms';

describe('UpdatefoodComponent', () => {
  let component: UpdatefoodComponent;
  let fixture: ComponentFixture<UpdatefoodComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,ToastrModule.forRoot(),FormsModule], 
    providers: [ApiService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create updatefood component', () => {
    expect(component).toBeTruthy();
  });

  it('should call updatefood function',()=>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.updatefood).toBeTruthy();
  })
});
