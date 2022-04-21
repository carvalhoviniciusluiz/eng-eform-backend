dpl ?= .env
include $(dpl)

start: ## Run server on debug mode
	docker-compose up

bash: ## Run bash
	docker exec -it $(APP_CONTAINER_NAME) /bin/bash
