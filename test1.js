/**
 * test command: testcafe chrome test1.js 
 * Performing Action on the page
 */
fixture `Getting started`
    .page `https://www.baidu.com`;

test('My first test', async t => {
    // console.log('t', t)
    await t
        .typeText('#kw', 'John Smith') // 输入
        .click('#su');  // 点击
});