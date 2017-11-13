describe('Extractor ', function() {

    var  homeUrl;

    it('sets up initial variables', function() {
        // Can be considered to be beforeAll, which Protractor lacks.
        browser.get('/modules/home/main.html');
        homeUrl = browser.getCurrentUrl();
    });

    it('Save extractor basic details', function() {
        browser.get('/modules/extractor/configuration.html');
        $('#organization').sendKeys('University of Moratuwa');
        $('#email').sendKeys('info@mrt.ac.lk');
        $('#web').sendKeys('http://139.59.74.146');
        $('#port').sendKeys('8080');
        $('#designation').sendKeys('University Registar');
        $('#name').sendKeys('A.B.C. Perera');
        $('button').click();
        expect(element(by.css('.toast-success')).isDisplayed()).toBe(true);
    });

    it('Redirect home', function() {
        browser.get('/modules/extractor/configuration.html');
        $('.img').click();
        expect(browser.getCurrentUrl()).toBe(homeUrl);
    });
});

