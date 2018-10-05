psql postgres < schema.sql &&
psql robinhood < ./database/import.sql &&
psql robinhood < index.sql