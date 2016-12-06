/**
 * Performing Action on the page
 */
fixture `Getting started`
    .page `http://test.tzb360.com/`;

test('My first test', async t => {
    await t.click('#navigation_market');

    await t.click('#navigation_strategyshop');

    await t.wait(3000);
});