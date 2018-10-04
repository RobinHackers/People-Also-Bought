psql -c 'CREATE DATABASE IF NOT EXISTS robinhood;' &&
psql robinhood < schema.sql &&
psql robinhood < ./database/importPG.sql &&
psql robinhood < index.sql &&