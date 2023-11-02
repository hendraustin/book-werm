USERNAME ?= default-username
PORT ?= 127.0.0.1:3000:3000
APPLICATION ?= book-werm
IMAGE ?= ${USERNAME}/${APPLICATION}

build:
	docker build -t ${IMAGE} .

run:
	docker run --name ${APPLICATION} -d -p ${PORT} ${IMAGE}
	@echo "Running ${IMAGE} on ${PORT}, or open through Docker Desktop"