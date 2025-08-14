import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    const developerNameInput = Selector('#developer-name');
    const submitButton = Selector('#submit-button');
    const articleHeader = Selector('#article-header');
    
    await t
        .typeText(developerNameInput, 'John Smith')
        .click(submitButton)
        .expect(articleHeader.innerText).eql('Thank you, John Smith!');
});
