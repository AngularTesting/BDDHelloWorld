"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
//import { ComponentFixtureAutoDetect } from '@angular/core/testing';
var welcome_component_1 = require('./welcome.component');
describe('WelcomeComponent (templateUrl)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [welcome_component_1.WelcomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(welcome_component_1.WelcomeComponent); //returns componnet Test Fixture
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('no title in the DOM until manually call', function () {
        expect(el.textContent).toEqual('');
    });
    it('should display original title ', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
});
//# sourceMappingURL=welcome.component.spec.js.map