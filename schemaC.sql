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
--   alsobought_id_1 robinhood.companies,
--   alsobought_id_2 robinhood.companies,
--   alsobought_id_3 robinhood.companies,
--   alsobought_id_4 robinhood.companies,
--   alsobought_id_5 robinhood.companies,
--   alsobought_id_6 robinhood.companies,
--   alsobought_id_7 robinhood.companies,
--   alsobought_id_8 robinhood.companies,
--   alsobought_id_9 robinhood.companies,
--   alsobought_id_10 robinhood.companies,
--   alsobought_id_11 robinhood.companies,
--   alsobought_id_12 robinhood.companies,
--   PRIMARY KEY (companyAbbr)
-- );

-- CREATE TYPE robinhood.companies (
--   id int,
--   company text,
--   company_abbr text,
--   percentage smallint,
--   current_day frozen<list<map<text, int>>>,
-- );


-- OPTION 2 Normalized for constant updates of stock values --
-- Loss of read speed, but better data integretity and writes --
-- Downsides, forced to do 2 queries since I can't use an array as a query param

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


-- OPTION 3 Normalized for constant updates of stock values --
-- Separating array into columns to try and lower queries to 1
-- CASSANDRA DOESNOT SUPPORT NESTED QUERIES

-- CREATE TABLE robinhood.alsobought (
--   company_abbr text,
--   alsobought_id_1 int,
--   alsobought_id_2 int,
--   alsobought_id_3 int,
--   alsobought_id_4 int,
--   alsobought_id_5 int,
--   alsobought_id_6 int,
--   alsobought_id_7 int,
--   alsobought_id_8 int,
--   alsobought_id_9 int,
--   alsobought_id_10 int,
--   alsobought_id_11 int,
--   alsobought_id_12 int,
--   PRIMARY KEY (companyAbbr)
-- );

-- CREATE TABLE robinhood.companies (
--   id int,
--   company_abbr text,
--   company text,
--   percentage smallint,
--   current_day list<frozen<map<text, text>>>,
--   PRIMARY KEY (id)
-- );