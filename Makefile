clear:
	docker-compose stop
	docker-compose rm -f

server: clear
	docker-compose up --build api db client

server_test: clear
	docker-compose up -d --build api_test db client
	cd end2end && npx cypress open
