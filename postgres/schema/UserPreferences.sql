\c donation;

DROP TABLE IF EXISTS UserPreferences;

-- CREATE UserPreferences TABLE
CREATE TABLE UserPreferences (
  id SERIAL,
  user_id INT NOT NULL,
  organization_id INT REFERENCES organizations(id),
  weight double precision,
  PRIMARY KEY (id)
);

INSERT INTO UserPreferences("user_id", "organization_id") values(1, 16);
INSERT INTO UserPreferences("user_id", "organization_id") values(1, 1175);