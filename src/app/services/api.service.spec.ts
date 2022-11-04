import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ApiService]
  }));

  // let service: ApiService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(ApiService);
  // });
  it('should be created', () => {
    const service:ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should have login function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.login).toBeTruthy();
  })

  it('should have signup function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.signup).toBeTruthy();
  })

  it('should have adminsignup function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.adminsignup).toBeTruthy();
  })

  it('should have addfood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.addfood).toBeTruthy();
  })

  it('should have allfood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.allfood).toBeTruthy();
  })
  it('should have deletefood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.deletefood).toBeTruthy();
  })
  it('should have addfood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.addfood).toBeTruthy();
  })
  it('should have updatefood function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.updatefood).toBeTruthy();
  })
  it('should have allorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.allorder).toBeTruthy();
  })
  it('should have addorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.addorder).toBeTruthy();
  })
  it('should have deleteorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.deleteorder).toBeTruthy();
  })
  it('should have updateorder function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.updateorder).toBeTruthy();
  })
  it('should have addprofile function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.addProfile).toBeTruthy();
  })
  it('should have updateprofile function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.updateprofile).toBeTruthy();
  })
  it('should have getComments function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.getComments).toBeTruthy();
  })
  it('should have addComments function',() =>{
    const service:ApiService = TestBed.get(ApiService);
    expect(service.addComments).toBeTruthy();
  })


});
