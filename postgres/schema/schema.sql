DROP DATABASE IF EXISTS donation;

CREATE DATABASE donation;

\c donation;

-- CREATE CAUSES TABLE
CREATE TABLE causes (
  id SERIAL PRIMARY KEY,
  cause VARCHAR(25) NOT NULL
);

-- ADD CAUSES
INSERT INTO causes("id", "cause") values(1,'Animals');
INSERT INTO causes("id", "cause") values(2,'Arts & Culture');
INSERT INTO causes("id", "cause") values(3,'Cancer');
INSERT INTO causes("id", "cause") values(4,'Civil Rights');
INSERT INTO causes("id", "cause") values(5,'Crime & Justice');
INSERT INTO causes("id", "cause") values(6,'Distaster Relief');
INSERT INTO causes("id", "cause") values(7,'Diseases & Disorders');
INSERT INTO causes("id", "cause") values(8,'Education');
INSERT INTO causes("id", "cause") values(9,'Employment');
INSERT INTO causes("id", "cause") values(11,'Food & Nutrition');
INSERT INTO causes("id", "cause") values(12,'Crime & Justice');
INSERT INTO causes("id", "cause") values(13,'Disaster Relief');
INSERT INTO causes("id", "cause") values(14,'Diseases & Disorders');
INSERT INTO causes("id", "cause") values(15,'Education');
INSERT INTO causes("id", "cause") values(16,'Employment');
INSERT INTO causes("id", "cause") values(17,'Environment');
INSERT INTO causes("id", "cause") values(18,'Food & Nutrition');
INSERT INTO causes("id", "cause") values(19,'Health Care');
INSERT INTO causes("id", "cause") values(20,'HIV/AIDS');
INSERT INTO causes("id", "cause") values(21,'Housing & Shelter');
INSERT INTO causes("id", "cause") values(22,'Humanitarian Assistance');
INSERT INTO causes("id", "cause") values(23,'International');
INSERT INTO causes("id", "cause") values(24,'LGBTQIA');
INSERT INTO causes("id", "cause") values(25,'Medical Research');
INSERT INTO causes("id", "cause") values(26,'Mental Health');
INSERT INTO causes("id", "cause") values(27,'Military & Verterans');
INSERT INTO causes("id", "cause") values(28,'Sports & Recreation');
INSERT INTO causes("id", "cause") values(29,'Women and Girls');
INSERT INTO causes("id", "cause") values(30,'Youth Developemnt');

CREATE TABLE organizations (
  id SERIAL,
  photoLink VARCHAR(500) NOT NULL,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(75),
  state VARCHAR(75),
  country VARCHAR(75),
  websiteUrl VARCHAR(155),
  mission VARCHAR(2500),
  causes VARCHAR(500),
  causes_id INT REFERENCES causes(id),
  PRIMARY KEY (id)
);

COPY organizations(photoLink,name,city,state,country,websiteUrl,mission,causes,causes_id) FROM '/Users/jorgecastello/Code/HackReactor/mvp/postgres/data-scraper-parser-scripts/organizationData.csv' DELIMITER '|';