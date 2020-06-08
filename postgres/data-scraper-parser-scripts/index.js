const fs = require('fs');
const os = require('os');

const scrapedOrganizationsFilePath = '../../data-scraper/scraperData.txt';

const causesMap = {
  'Animals': 1,
  'Arts': 2,
  'Cancer': 3,
  'Civil': 4,
  'Human': 4,
  'Crime': 5,
  'Disaster': 6,
  'Diseases': 7,
  'Education': 8,
  'Employment': 9,
  'Food': 11,
  'Crime': 12,
  'Disaster': 13,
  'Diseases': 14,
  'Education': 15,
  'Colleges': 15,
  'Employment': 16,
  'Environment': 17,
  'Food': 18,
  'Health': 19,
  'HIV/AIDS': 20,
  'Housing': 21,
  'Humanitarian': 22,
  'International': 23,
  'LGBTQIA': 24,
  'Medical': 25,
  'Mental': 26,
  'Military': 27,
  'Sports': 28,
  'Women': 29,
  'Youth': 30,
};

const orgsAlreadyEntered = {};

fs.readFile(scrapedOrganizationsFilePath, 'utf-8', (err, organizations) => {
  if (err) {
    throw new Error(err);
  } else {
    const organizationList = organizations.split(os.EOL);

    let CSV_DATA = '';
    organizationList.forEach(listOfOrganizations => {
      listOfOrganizations = listOfOrganizations.replace(/\n|\r/g, ""); // Remove new lines
      let json = JSON.parse(listOfOrganizations);

      let organizationData = json.map(org => {
          if (!orgsAlreadyEntered[org.name]) {
            orgsAlreadyEntered[org.name] = true;

            let { photoLink, name, city, state, country, websiteUrl, mission, causes } = org;
              name = name.trim(); // remove excess whitespace
              city = city || null;
              state = state || null;
              country = country || null;

              mission = mission.replace(/\n|\r/g, ""); // Remove new lines
              mission = mission.slice(0, mission.indexOf('.')).trim();

              causes = causes.replace(/\n|\r/g, ""); // Remove new lines
              causes_id = causesMap[causes.split(' ')[0]];

              return `${photoLink}|${name}|${city}|${state}|${country}|${websiteUrl}|${mission}|${causes}|${causes_id}`;
          } else {
            return '';
          }
        });
        organizationData = organizationData.filter(org => org !== '');
        organizationData = organizationData.join(os.EOL);
        organizationData += `${os.EOL}`;

        CSV_DATA += organizationData;
    });

    fs.writeFile('./organizationData.csv', CSV_DATA, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log('Successfully added the organizations to a CSV file');
      }
    });
  }
});