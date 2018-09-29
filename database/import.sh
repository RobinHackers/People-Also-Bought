psql robinhood < schema.sql &&
cat ./seeds/companies_0.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_384616.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_769232.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_1153848.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_1538464.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_3076928.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_1923080.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_2307696.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_2692312.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_3461544.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_3846160.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_4230776.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_4615392.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_5000008.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_5384624.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_5769240.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_6538472.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_6153856.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_6923088.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_7307704.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_7692320.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_8076936.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_8461552.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_8846168.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_9230784.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/companies_9615400.csv | psql robinhood -c "COPY companies (id, company_abbr, company, percentage, current_day) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_0.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_384616.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_769232.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_1923080.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_1153848.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_1538464.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_2307696.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_2692312.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_3461544.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_3076928.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_4230776.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_4615392.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_5000008.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_6153856.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_5769240.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_5384624.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_6538472.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_6923088.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_7307704.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_7692320.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_3846160.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_8076936.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_8461552.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_8846168.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_9230784.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
cat ./seeds/alsobought_9615400.csv | psql robinhood -c "COPY alsobought (company_id, alsobought_id) from STDIN WITH (FORMAT CSV, HEADER TRUE);" &&
psql robinhood < indexAlsobought.sql &&
node ./timer.js