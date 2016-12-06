/**
 * command: testcafe chrome 51cto.js -s D:\test -e
 * @params e: 跳过js 错误
 */
import { Selector } from 'testcafe';
fixture `51cto-go`
    .page `http://home.51cto.com/index`;

const eleWithSelector = Selector(selector => document.querySelector(selector));
 
test('login', async (t) => {
    const submitBtn = await eleWithSelector('[name="login-button"]');

    await t
        .typeText('#loginform-username', 'testUser')
        .typeText('#loginform-password', 'testPwd')
        .click(submitBtn);
    

    const signBtn = await eleWithSelector('#jsSignGetCredits');
    const signDiv = eleWithSelector('.Sign');

    await t
        .hover(signDiv)
        .click(signBtn)
        .takeScreenshot('51cto.jpg')
});