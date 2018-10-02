CREATE INDEX IF EXISTS id;
DROP INDEX IF EXISTS abbr;
-- CREATE INDEX IF EXISTS comp_id;

CREATE INDEX IF NOT EXISTS id ON companies USING HASH (id);
-- CREATE INDEX IF NOT EXISTS abbr ON companies (company_abbr);
CREATE INDEX IF NOT EXISTS abbr ON companies USING HASH (company_abbr);
CREATE INDEX IF NOT EXISTS comp_id ON alsobought (company_id);
