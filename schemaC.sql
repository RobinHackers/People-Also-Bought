DROP KEYSPACE IF EXISTS robinhood;

CREATE KEYSPACE robinhood
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
};

USE robinhood;

DROP TABLE IF EXISTS robinhood.alsobought;
DROP TABLE IF EXISTS robinhood.companies;

-- OPTION 1 De-Normalized for read speed --
-- Causes issues during updates of stock values --

-- CREATE TABLE robinhood.alsobought (
--   companyAbbr text,
--   alsobought_1 robinhood.companies,
--   alsobought_2 robinhood.companies,
--   alsobought_3 robinhood.companies,
--   alsobought_4 robinhood.companies,
--   alsobought_5 robinhood.companies,
--   alsobought_6 robinhood.companies,
--   alsobought_7 robinhood.companies,
--   alsobought_8 robinhood.companies,
--   alsobought_9 robinhood.companies,
--   alsobought_10 robinhood.companies,
--   alsobought_11 robinhood.companies,
--   alsobought_12 robinhood.companies,
--   PRIMARY KEY (companyAbbr)
-- )

-- CREATE TYPE robinhood.companies (
--   id int,
--   company text,
--   company_abbr text,
--   percentage smallint,
--   current_day frozen<list<map<text, int>>>,
-- )


-- OPTION 2 Normalized for constant updates of stock values --
-- Loss of read speed, but better data integretity and writes --

CREATE TABLE robinhood.alsobought (
  company_abbr text,
  alsobought list<int>,
  PRIMARY KEY (company_abbr)
);

CREATE TABLE robinhood.companies (
  id int,
  company_abbr text,
  company text,
  percentage smallint,
  current_day list<frozen<map<text, text>>>,
  PRIMARY KEY (id)
);

-- COPY robinhood.companies (id, company_abbr, company, percentage) FROM './seeds/companies_1.csv' WITH HEADER = TRUE AND DELIMITER = '|' AND QUOTE = '`';
-- COPY robinhood.companies (id, current_day) FROM './seeds/currentDay_1.csv' WITH HEADER = TRUE AND DELIMITER = '|' AND QUOTE = '`';
-- COPY robinhood.alsobought (company_abbr, alsobought) FROM './seeds/alsobought_0.csv' WITH HEADER = TRUE AND DELIMITER = '|' AND QUOTE = '`';
