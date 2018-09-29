DROP TABLE companies;
DROP TABLE alsobought;

CREATE TABLE companies (
  id INT NOT NULL,
  company VARCHAR(25) NOT NULL,
  company_abbr VARCHAR(5) NOT NULL,
  percentage SMALLINT NOT NULL,
  -- also_bought INT[] NOT NULL,
  current_day JSON[] NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE alsobought (
  id SERIAL,
  company_id INT NOT NULL,
  alsobought_id INT NOT NULL,
  PRIMARY KEY (id)
);

-- DROP INDEX id;
-- DROP INDEX abbr;
-- DROP INDEX comp_id;
-- CREATE INDEX id ON companies (id);
-- CREATE INDEX abbr ON companies (company_abbr);
-- CREATE INDEX comp_id ON alsobought (company_id);
