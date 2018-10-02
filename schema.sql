DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS alsobought;

CREATE TABLE companies (
  id INT NOT NULL,
  company_abbr VARCHAR(5) NOT NULL,
  company VARCHAR(25) NOT NULL,
  percentage SMALLINT NOT NULL,
  current_day JSON NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE alsobought (
  company_id INT NOT NULL,
  alsobought_id INT NOT NULL
);

-- select companies.* from companies, alsobought 
-- where alsobought.company_id = (
-- 	select id from companies where company_abbr = 'VAAAB'
-- )
-- and companies.id = alsobought.alsobought_id;

-- select companies.* from companies, alsobought where alsobought.company_id = (select id from companies where company_abbr = 'VAAAB') and companies.id = alsobought.alsobought_id;
