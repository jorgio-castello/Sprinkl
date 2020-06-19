# Sprinkl
> This project allows users to find charities they're passionate about and support them for life! Sprinkl tracks user transactions in the real world throught the Plaid API, and every transaction is "rounded up" and the net proceeds are donated to charity.

> Here's an example:
> - I visit Starbucks and buy a hot coffee for $2.35
> - Sprinkl allocates a $0.65 donation to my favorite causes / movements (i.e. Black Lives Matter and the Ocean Conservancy)
> - The next time I visit the Sprinkl application, I will be prompted to donate :)

## Sprinkl-v0 - Minimum Viable Product
> Built with React Native / Typescript on the front-end, Express / PostgreSQL on the backend - the MVP utilized my personal financial data accessed through the Plaid API. Non-profit data was scraped from the internet using Puppeteer.

Here's a demo video of the v0 application: <a href="https://youtu.be/i7Dj7Ua3JDo">Sprinkl-v0 Demo</a>

## Sprinkl-v1 - In progress
> Action items:
> - Integrate with <a href="https://www.pledgeling.com/">Pledgeling API</a> to increase dataset of charities available + process user donations
> - Support login via multiple platforms (i.e. Google, Facebook)
> - Implement user feedback for improvements to UI / UX
