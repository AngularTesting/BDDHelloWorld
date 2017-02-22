import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
//import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent (templateUrl)', () => {

  let comp: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [WelcomeComponent] 
  //       providers: [
  //   { provide: ComponentFixtureAutoDetect, useValue: true }
  // ],
   })
      .compileComponents(); 
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);//returns componnet Test Fixture

    comp = fixture.componentInstance; 
 
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;   
    
  });

    it('no title in the DOM until manually call', () => {
      expect(el.textContent).toEqual('');
     
    });
 
  it('should display original title ', () => {
 fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

   it('should display a different test title', () => {
     comp.title = 'Test Title';
     fixture.detectChanges();
     expect(el.textContent).toContain(comp.title);
  });

});

