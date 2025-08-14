import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`
    .beforeEach(async t => {    
        //Test setup goes here
        // await runDatabaseReset();
        // await seedTestData()
    })
    .beforeEach(async t => {
        await t.maximizeWindow();
        await t.setTestSpeed(1);
        await t.setPageLoadTimeout(0);
    })
    .after(async t => {
        //Test cleanup goes here
        // await runDatabaseCleanup();
         // Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //Test teardown goes here
        // await runDatabaseCleanup();
       
    }); 

test('My first test', async t => {
    const developerNameInput = Selector('#developer-name');
    const submitButton = Selector('#submit-button');
    const articleHeader = Selector('#article-header');
    
    await t
        .typeText(developerNameInput, 'John Smith')
        .click(submitButton)
        .expect(articleHeader.innerText).eql('Thank you, John Smith!')

        //Click 
        .click('selector', { options })

        //Double click
        .doubleClick('selector', { options })

        //Right click
        .rightClick('selector', { options })    

        // Drag Element
        .drag('selector', 200 ,0,  { options })

        // Hover
        .hover('selector', { options })

        // Select text
        .selectText('selector', { options })    

        // Type text
        .typeText('selector', 'text', { options })

        //Press key on keyboard
        .pressKey('enter', { options })

        //Navigate
        .navigateTo('http://example.com', { options })

        //Take screenshot
        .takeScreenshot()
        .takeElementScreenshot()

        // Deep Equal
        expect('foo').eql('foo', 'message', options)
        expect('bar').notEql('foo')
        // Additional assertions can go here
        expect(false).ok()
        expect(true).notOk()
        // Contains
        expect('foo').contains('o')

        // Not Contains
        expect('foo').notContains('hey')

        // Greater or Less than
        expect(10).gt(5)
        expect(10).gte(10)
        expect(10).lt(20)
        expect(10).lte(10)

        // Within
        expect(10).within(5, 15)

        // Not Within
        expect(10).notWithin(5, 20)

});
