-- DROP INDEX IF EXISTS id;
-- DROP INDEX IF EXISTS abbr;

CREATE INDEX abbr ON companies USING HASH (company_abbr);
CREATE INDEX id ON companies USING HASH (id);
CREATE INDEX comp_id1 ON alsobought (company_id);
CREATE INDEX comp_id2 ON prices (company_id);
