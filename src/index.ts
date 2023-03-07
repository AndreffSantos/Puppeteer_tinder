import pptr from 'puppeteer'

const {
  url_facebook,
  url_tinder,
  facebook_user,
  facebook_password
} = require('./env.json')


const main = async () => {
  const browser = await pptr.launch({
    headless: false,
    defaultViewport: {
      width: 1366,
      height: 768
    }
  });

  const page= await browser.newPage();
  await page.goto(url_facebook);

  await page.type('#email', facebook_user);
  await page.type('#pass', facebook_password);

  await Promise.all([
    page.waitForNavigation(),
    page.click('#buttons input'),
  ]);

  await page.goto(url_tinder);

  await page.click('a.c1p6lbu0');
  await new Promise(resolve => setTimeout(resolve, 3000));

  await page.click('.Expand--s button.c1p6lbu0');
};


main();

// document.querySelectorAll('button.button')[3]
// document.querySelector('div.recsCardboard__cardsContainer button.focus-button-style')