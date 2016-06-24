// photo-lister-spec.js

var expect = require('chai').expect;
var PhotoLister = require('./photo-lister');
var cheerio = require('cheerio');

describe('PhotoLister', function() {
	it('should exists', function () {
		expect(PhotoLister).not.to.be.undefined;
	});
});

describe('#photoToListItem()', function() {
    it('should take a photo object and return a list item string', function() {
        var input = {
                title: 'This is a test',
                url:   'http://loremflickr.com/960/593'
            },
            expected = '<li><figure><img src="http://loremflickr.com/960/593" alt=""/>'
                     + '<figcaption>This is a test</figcaption></figure></li>';
        expect(PhotoLister.photoToListItem(input)).to.equal(expected);

        input = {
            title: 'This is another test',
            url:   'http://loremflickr.com/960/593/puppy'
        }
        expected = '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>'
                 + '<figcaption>This is another test</figcaption></figure></li>';
        expect(PhotoLister.photoToListItem(input)).to.equal(expected);
    });
});

describe('#photoListToHTML()', function() {
    it('should take an array of photo objects and convert them to an HTML list', function() {
        var input = [{
                title: 'This is a test',
                url:   'http://loremflickr.com/960/593'
            }, {
                title: 'This is another test',
                url:   'http://loremflickr.com/960/593/puppy'
            }],
            expected = '<ul><li><figure><img src="http://loremflickr.com/960/593" alt=""/>'
                     + '<figcaption>This is a test</figcaption></figure></li>'
                     + '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>'
                     + '<figcaption>This is another test</figcaption></figure></li></ul>';
        expect(PhotoLister.photoListToHTML(input)).to.equal(expected);
    });
});

describe('#addPhotosToElement()', function() {
    it('should take an HTML string of list items and add them to an element with a given selector', function() {
        var $        = cheerio.load('<html><head></head><body><div id="mydiv"></div></body></html>'),
            list     = '<ul><li><figure><img src="http://loremflickr.com/960/593" alt=""/>'
                     + '<figcaption>This is a test</figcaption></figure></li>'
                     + '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>'
                     + '<figcaption>This is another test</figcaption></figure></li></ul>',
            selector = '#mydiv',
            $div     = PhotoLister.addPhotosToElement($, selector, list);
        expect($div.find('ul').length).to.equal(1);
        expect($div.find('li').length).to.equal(2);
        expect($div.find('figure').length).to.equal(2);
        expect($div.find('img').length).to.equal(2);
        expect($div.find('figcaption').length).to.equal(2);
    });
});