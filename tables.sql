CREATE TABLE IF NOT EXISTS user_table (
	id SERIAL PRIMARY KEY,
	user_name TEXT,
	password varchar(255)
);

CREATE TABLE IF NOT EXISTS atm_table (
	id SERIAL PRIMARY KEY,
	bankLocation varchar(255),
	address varchar(255),
	area TEXT,
	bank TEXT
);