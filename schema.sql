DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS alsobought;
DROP TABLE IF EXISTS prices;

CREATE TABLE companies (
  id INT NOT NULL,
  company_abbr VARCHAR(5) NOT NULL,
  company VARCHAR(25) NOT NULL,
  percentage SMALLINT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE alsobought (
  company_id INT NOT NULL,
  alsobought_id INT NOT NULL
);

CREATE TABLE prices (
  company_id INT NOT NULL,
  current_price MONEY
);


-- QUERYING
-- \timing

-- select companies.* from companies, alsobought 
-- where alsobought.company_id = (
--   select id from companies where company_abbr = 'AGSDV'
-- ) and companies.id = alsobought.alsobought_id;

-- select companies.* from companies, alsobought 
-- where alsobought.company_id = (
--   select id from companies where company_abbr = 'AGSDV'
-- ) and companies.id = alsobought.alsobought_id;

-- select companies.*, prices.current_price from companies, alsobought, prices
-- where alsobought.company_id = (
--   select id from companies where company_abbr = 'GDSDS'
-- ) and companies.id = alsobought.alsobought_id
-- and companies.id = prices.company_id;

-- select * from prices
-- where company_id in (6324,63456,415,4657,354234,867567,3252345,65454363,74656542,5432,523425,523455432);