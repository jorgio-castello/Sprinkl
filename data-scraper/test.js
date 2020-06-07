const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();

  await page.goto('https://www.pledgeling.com/organizations');
  await page.waitForSelector('.col-sm-6.col-md-4.col-lg-3');

  const organizationCards = await page.$$('.col-sm-6.col-md-4.col-lg-3');
  for (let card of organizationCards) {
    const link = await page.evaluate((card) => {
      return card.childNodes[1];
    });
    console.log(link);
  }

  // const organizationData = await page.evaluate(() => {
  //   const organizationNodes = document.querySelectorAll('.col-sm-6.col-md-4.col-lg-3');
  //   const organizationData = [];

  //   const currentOrganizationNode = organizationNodes[0];
  //   const organizationProfileLink = currentOrganizationNode.childNodes[1];

  //   console.log(organizationProfileLink);




    // async function innerRecursiveFunc(callback, count = 0) {
    //   if (count !== 12) {
    //     const currentOrganizationNode = organizationNodes[0];
    //     const organizationProfileLink = currentOrganizationNode.childNodes[1];

    //     await organizationProfileLink.click();
    //     await page.waitForSelector('.img-consistent.img-consistent-center.h-100.bg-white');
    //     const test = document.querySelector('.img-consistent.img-consistent-center.h-100.bg-white');
    //     callback(document);

    //     const orgData = await page.evaluate(() => {
    //       // Grab the logo element
    //       const logo = document.querySelector('.img-consistent.img-consistent-center.h-100.bg-white');

    //       const logoStyleTag = logo.getAttribute('style'); // Style tag features a background image with a hosted source
    //       const logoUrl = logoStyleTag.slice(23, logoStyleTag.length - 2);

    //       // callback(logo);
    //     });



    //     // const name = document.querySelector

    //   }


    // }

    // innerRecursiveFunc((data) => console.log(data));
  // });
})();