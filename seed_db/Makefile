#!/bin/bash

PORT=5432
POSTGRES_DB=school_mgmt
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# guaranteed that postgres is running
db.up:
	@docker compose -p school_mgmt up -d
	
db.down:
	@docker compose -p school_mgmt down

db.createdb:
	@PGPASSWORD=${POSTGRES_PASSWORD} createdb -U ${POSTGRES_USER} -h localhost -p ${PORT} ${POSTGRES_DB}

db.create_tables:
	@PGPASSWORD=${POSTGRES_PASSWORD} psql -U ${POSTGRES_USER} -d ${POSTGRES_DB} -h localhost -p ${PORT} -f tables.sql

db.seed:
	@PGPASSWORD=${POSTGRES_PASSWORD} psql -U ${POSTGRES_USER} -d ${POSTGRES_DB} -h localhost -p ${PORT} -f seed-db.sql
	
db.psql:
	@PGPASSWORD=${POSTGRES_PASSWORD} psql -U ${POSTGRES_USER} -d ${POSTGRES_DB} -h localhost -p ${PORT}