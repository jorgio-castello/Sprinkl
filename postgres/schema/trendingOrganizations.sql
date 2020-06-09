\c donation;

DROP TABLE IF EXISTS trendingOrganizations;

-- CREATE TrendingOrganizations TABLE
CREATE TABLE trendingOrganizations (
  id SERIAL,
  bucket VARCHAR(15) NOT NULL,
  organization_id INT REFERENCES organizations(id),
  PRIMARY KEY (id)
);

-- BLM
-- Black Lives Matter - 16
INSERT INTO trendingOrganizations("organization_id", "bucket") values(16,'BLM');
-- Black Women's Blueprint - 32
-- INSERT INTO trendingOrganizations("organization_id", "bucket") values(32,'BLM');
-- Black Girl's Code - 2114
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2114,'BLM');
-- 100 Black Men of America - 3044
-- INSERT INTO trendingOrganizations("organization_id", "bucket") values(3044,'BLM');

-- Month of Pride
-- Campus Pride - 2705
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2705,'PRIDE');
-- Empire State Pride Agenda Foundation - 1515
INSERT INTO trendingOrganizations("organization_id", "bucket") values(1515,'PRIDE');
-- Rainbow World Fund - 2707
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2707,'PRIDE');

-- Crime and Justice
-- Innocence Project - 1175
INSERT INTO trendingOrganizations("organization_id", "bucket") values(1175,'JUSTICE');
-- National Police Accountability Project - 1610
INSERT INTO trendingOrganizations("organization_id", "bucket") values(1610,'JUSTICE');
-- Equal Justice Initiative - 1176
INSERT INTO trendingOrganizations("organization_id", "bucket") values(1176,'JUSTICE');

-- Distaster Relief
-- CDC Foundation - 1961
INSERT INTO trendingOrganizations("organization_id", "bucket") values(1961,'RELIEF');
-- COVID-19 Student Resource Food Fund - 2102
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2102,'RELIEF');
-- COVID-19 Student Educational Resource Fund - 2103
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2103,'RELIEF');

-- Cancer
-- Stand Up To Cancer - 778
INSERT INTO trendingOrganizations("organization_id", "bucket") values(778,'CANCER');
-- Breast Cancer Research Foundation - 779
INSERT INTO trendingOrganizations("organization_id", "bucket") values(779,'CANCER');

-- Education
-- iMentor 2105
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2105,'EDUCATION');
-- Children's Literacy Initiative - 2106
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2106,'EDUCATION');
-- Teach For America - 2198
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2198,'EDUCATION');

-- Environment
-- Conservation Volunteers Australia - 633
INSERT INTO trendingOrganizations("organization_id", "bucket") values(633,'ENVIRONMENT');
-- Rainforst Alliance - 2389
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2389,'ENVIRONMENT');
-- Pacific Crest Trail - 2925
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2925,'ENVIRONMENT');
-- National Park Foundation - 11
INSERT INTO trendingOrganizations("organization_id", "bucket") values(11,'ENVIRONMENT');

-- WOMEN
-- Global Fund For Women - 1153
INSERT INTO trendingOrganizations("organization_id", "bucket") values(1153,'WOMEN');
-- Women Helping Women - 2604
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2604,'WOMEN');
-- UN Women USA - 2685
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2685,'WOMEN');
-- Equality Now - 1154
INSERT INTO trendingOrganizations("organization_id", "bucket") values(1154,'WOMEN');

-- Animals
-- Animal Welfare Institute - 637
INSERT INTO trendingOrganizations("organization_id", "bucket") values(637,'ANIMALS');
-- Humane Society of the United States - 640
INSERT INTO trendingOrganizations("organization_id", "bucket") values(640,'ANIMALS');

-- Medical Research
-- Cure Alzheimer's Fund - 2378
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2738,'RESEARCH');
-- Organization for Autism Research - 2737
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2737,'RESEARCH');
-- Children's Hospital of Los Angeles - 2512
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2512,'RESEARCH');

-- Veterans
-- Wounded Warrior Project - 2310
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2310,'VETERANS');
-- Navy-Marine Corps Relief Society - 2847
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2847,'VETERANS');

-- Children
-- 360 Cradle - 3023
INSERT INTO trendingOrganizations("organization_id", "bucket") values(3023,'CHILDREN');
-- Science Club For Girls - 3025
INSERT INTO trendingOrganizations("organization_id", "bucket") values(3025,'CHILDREN');
-- Feed the Children - 2406
INSERT INTO trendingOrganizations("organization_id", "bucket") values(2406,'CHILDREN');