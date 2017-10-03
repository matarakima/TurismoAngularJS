'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('app', function() {


    it('should automatically redirect to /inicio when location hash/fragment is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/inicio");
    });


    describe('inicio', function() {

        beforeEach(function() {
            browser.get('index.html#!/inicio');
        });


        it('should render view1 when user navigates to /inicio', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for inicio/);
        });

    });


    describe('banco', function() {

        beforeEach(function() {
            browser.get('index.html#!/banco');
        });


        it('should render view2 when user navigates to /banco', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for banco/);
        });

    });
});