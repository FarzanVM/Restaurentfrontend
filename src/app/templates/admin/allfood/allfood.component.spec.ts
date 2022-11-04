import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule} from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AllfoodComponent } from './allfood.component';

describe('AllfoodComponent', () => {
  let component: AllfoodComponent;
  let fixture: ComponentFixture<AllfoodComponent>;
  
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
      declarations: [ AllfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create allfood component', () => {
    expect(component).toBeTruthy();
  });

  it('should call allfood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.allfood).toBeTruthy();
  })
});
