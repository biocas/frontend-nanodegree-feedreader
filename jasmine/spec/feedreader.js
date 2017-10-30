/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //the test loops through each feed in the allFeeds array to check for the URL, if it is defined and whether or not it is empty.
        it('each URL is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

        //the test loops through the allFeeds array to check for the name, if it is defined and whether or not it is empty.
        it('each name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The Menu', function() {
        // Test if the menu element is hidden by default. The class menu-hidden is responsible for toggling the menu visibility, so the class is toggled depending if the menu is hidden or not. the test verifies if the class exists, which means that the menu is hidden
        it('menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //Test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: that the menu displays when clicked and that it hides when clicked again. The button with the menu-icon-link class is responsible for toggling menu's visibility. When that button is clicked, the class menu-hidden is toggled, so the test validates the expectation that by clicking on the button that class does not exists. When clicked again, it exists again (toggling).
        it('menu visibility changes when clicked', function() {
            document.querySelector('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);

            document.querySelector('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        //Test that ensures when the loadFeed function is called and completes its work, there is at leasta single .entry element within the .feed container.
        //beforeEach handles the asynchronous function, so it is done before the test is run
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('entry element is defined in feed container', function(done) {
            expect($('.feed').length).not.toBe(0);
            expect($('.entry').length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var oldFeed;
        var newFeed;
        //beforeEach handles the asynchronous function, so it is done before the test is run
        beforeEach(function(done) {
            loadFeed(1, done);
            oldFeed = $('.feed').html();
        });

        it('new feed is loaded when content changes', function(done) {
            loadFeed(2);
            newFeed = $('.feed').html();
            expect(oldFeed).not.toEqual(newFeed);
            done();
        });

    });

}());