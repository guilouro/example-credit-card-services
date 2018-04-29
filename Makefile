clear:
	docker-compose stop
	docker-compose rm -f

server: clear
	docker-compose up --build api db client

test: clear
	docker-compose up -d --build api_test db client
	cd end2end && if [ ! -d "node_modules" ]; then npm i; fi && npx cypress open
