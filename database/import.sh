psql -h ec2-54-145-32-83.compute-1.amazonaws.com -U power_user -W postgres < schema.sql &&
psql -h ec2-54-145-32-83.compute-1.amazonaws.com -U power_user -W robinhood < ./database/import.sql &&
# psql -h ec2-54-145-32-83.compute-1.amazonaws.com -U power_user -W robinhood < ./transfer.sql &&
psql -h ec2-54-145-32-83.compute-1.amazonaws.com -U power_user -W robinhood < index.sql