/**
 * 点击登录按钮，弹出动态生成的iframe Demo
 */
import { Selector } from 'testcafe';
import { assert, expect } from 'chai'

fixture `toTzb`
    .page `https://www.baidu.com`;


const eleWithSelector = Selector(selector => document.querySelector(selector));

const testData = {
    userName: 'cqtl001',
    password: 'testxxxx'
};

test('navigateToTzb', async (t) => {

    await t.navigateTo('http://xxxx.demo.com');

    // 点击登录按钮
    await t.click('#headerDiv > div.tzb_h_bottom > div > a:nth-child(1)');

    // 获取动态生成的iframe
    const iframe = await eleWithSelector('[src="/html/common/login.html"]');


    // switch 到iframe，并输入用户名、密码，点击登录
    const aft = await t
        .switchToIframe(iframe)
        // .switchToMainWindow() 切回主windown
        .typeText('#account', testData.userName)
        .typeText('#password', testData.password)
        .click('#loginBtn');

    await t.switchToMainWindow();

    // 获取 用户span、退出文字span，并断言其内容
    const uNameSpan = await eleWithSelector('#headerDiv > div.tzb_h_bottom > div > a.tzb_loadAccount > span.tzb_welcome');
    const exitSpan = await eleWithSelector('#headerDiv > div.tzb_h_bottom > div > a.tzb_h_exit.ore_transition.tzb_cBlue08');

    // 使用 chai （三种style：assert、expect、should）
    assert.isTrue(Object.is(uNameSpan.innerText, `欢迎您，${testData.userName}`));
    assert.isTrue(Object.is(exitSpan.innerText, `安全退出`));

    await t.takeScreenshot('test.jpg'); // testcafe chrome navigateToTzb.js -s D:\test
});