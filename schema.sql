DROP TABLE alsobought;
DROP TABLE companies;

CREATE TABLE companies (
  id INT NOT NULL,
  company VARCHAR(25) NOT NULL,
  company_abbr VARCHAR(5) NOT NULL,
  percentage SMALLINT NOT NULL,
  current_day JSON NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE alsobought (
  company_id INT NOT NULL,
  alsobought_id INT NOT NULL
);
