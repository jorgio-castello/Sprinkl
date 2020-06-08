const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');


async function scrape (url, count, cb) {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto(url);
  await page.waitForSelector('.col-sm-6.col-md-4.col-lg-3');

  const organizationLinks = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.col-sm-6.col-md-4.col-lg-3'));
    const links = cards.map(card => card.childNodes[1]).filter(child => child.innerHTML.indexOf('images%2Fnpos%2Flogos%2Fdefault%2Flogo.jpg') === -1).map(link => link.getAttribute('href'));
    return links;
  });

  const organizationData = [];
  for (let link of organizationLinks) {
    await page.goto(`https://www.pledgeling.com${link}`);
    await page.waitFor(500);

    const data = await page.evaluate(() => {
      const checkForError = document.querySelector('h1').innerText;
      if (checkForError === "The page you were looking for doesn't exist.") {
        return null;
      }

      const photoEL = document.querySelector('.img-consistent.img-consistent-center.h-100.bg-white');
      const photoStyle = photoEL.getAttribute('style');
      const photoLink = photoStyle.slice(23, photoStyle.length - 2);

      if (photoLink === 'https://res.cloudinary.com/pledgeling/w_220%2Ch_220%2Cc_fit/prod-media/images%2Fnpos%2Flogos%2Fdefault%2Flogo.jpg') {
        return null;
      }

      const name = document.querySelector('.h3').textContent;

      const city = document.querySelector('.p-locality.locality') ? document.querySelector('.p-locality.locality').textContent : '';
      const state = document.querySelector('.p-region.region') ? document.querySelector('.p-region.region').getAttribute('title') : '';
      const country = document.querySelector('.p-country.country').textContent;

      const website = document.querySelector('.d-block.d-sm-inline-block.mb-3.mx-2');
      let websiteUrl = '';
      if (website) {
        websiteUrl = website.childNodes[1].getAttribute('href');
      }

      const sections = document.querySelectorAll('section');
      let mission, causes;
      if (sections.length === 3) {
        mission = sections[0].innerText.slice(8);
        causes = sections[2].innerText.slice(7);
      } else {
        mission = sections[1].innerText.slice(8);
        causes = sections[3].innerText.slice(7);
      }

      return { photoLink, name, city, state, country, websiteUrl, mission, causes };
    });


    if (data) {
      organizationData.push(data);
    }
  }

  if (organizationData.length) {
    const dataToString = JSON.stringify(organizationData);
    fs.appendFile('./scraperData.txt', `${dataToString}${os.EOL}`, err => {
      if (err) {
        throw new Error(err);
      } else {
        console.log(`Successfuly scraped ${organizationData.length} new organizations...`);
      }
    });
  }

  browser.close();
  cb(count);
};


const scrapeData = (count = 1) => {
  if (count <= 10) {
    let url = 'https://www.pledgeling.com/causes/youth-development';
    if (count !== 1) {
      url += `/?page=${count}`;
    }
    console.log(`Working on Organization Bucket #${count}: ${url}`);
    scrape(url, count, count => {
      scrapeData(count + 1);
    });
  } else {
    console.log('Done collecting data...');
  }
};

scrapeData();