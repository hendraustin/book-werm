PORT ?= # Recommended: 127.0.0.1:3000:3000
DOCKER_USERNAME ?= # Your Docker username
APPLICATION ?= book-werm
IMAGE ?= ${DOCKER_USERNAME}/${APPLICATION}


build:
	docker build -t ${IMAGE} .

run:
	docker run --name ${APPLICATION} -d -p ${PORT} ${IMAGE}
	@echo "Running ${IMAGE} on ${PORT}, or open through Docker Desktop"