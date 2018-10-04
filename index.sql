CREATE INDEX IF NOT EXISTS id ON companies (id);
CREATE INDEX IF NOT EXISTS abbr ON companies (company_abbr);
CREATE INDEX IF NOT EXISTS comp_id1 ON alsobought (company_id);
CREATE INDEX IF NOT EXISTS comp_id2 ON prices (company_id);
