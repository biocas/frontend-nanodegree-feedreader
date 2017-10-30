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
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //the test loops throughthe allFeeds array to check for the URL
        it('each URL is defined', function(){
            allFeeds.forEach(function(feed){
               expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0); 
            });
            
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //the test loops throughthe allFeeds array to check for the name
        it('each name is defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        // the class menu-hidden is responsible for toggling the menu visibility, so the class is toggled depending if the menu is hidden or not. the test verifies if the class exists, which means that the menu is hidden
        it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        //the button with the menu-icon-link class is responsible for toggling menu's visibility. When that button is clicked, the class menu-hidden is toggled, so the test validates the expectation that by clicking on the button that class does not exists. When clicked again, it exists again (toggling).
         it('menu visibility changes when clicked', function(){
            document.querySelector('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).not.toBe(true);
             
             document.querySelector('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //beforeEach handles the asynchronous function, so it is done before the test is run
        beforeEach(function(done){
                loadFeed(0, done);     
            });
        
        it('entry element is defined in feed container', function(done){
            expect($('.feed').length).not.toBe(0);
            expect($('.entry').length).not.toBe(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        //beforeEach handles the asynchronous function, so it is done before the test is run
        beforeEach(function(done){
                loadFeed(0, done);     
            });
        
        it('new feed is loaded when content changes', function(){
            
        });
        
    });
    
}());
