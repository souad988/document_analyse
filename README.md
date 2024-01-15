
![Screenshot from 2024-01-13 01-16-52](https://github.com/souad988/document_analyse/assets/59707859/e7684790-2772-4bab-91d1-b4f657b5c0f6)
![Screenshot from 2024-01-15 11-14-35](https://github.com/souad988/document_analyse/assets/59707859/9e697cee-eb8c-45bc-a179-fc0091ff7059)
![Screenshot from 2024-01-13 02-19-16](https://github.com/souad988/document_analyse/assets/59707859/35c4437f-ee59-4aff-a838-e031a14049f6)
![Screenshot from 2024-01-13 02-23-17](https://github.com/souad988/document_analyse/assets/59707859/2241593c-f320-4610-b119-2e7792c7730f)

# Intro

**Document analyze** is an open-source, AI-powered document analyzer tool for company financial data-related tasks.

# API Documentation

### Question-Answering API
#### Endpoint: `/questionAnswer`
**Description:** This API endpoint is used for question-answering on documents.
**Method:** `POST`
```
**Request:**
{
    "context": "Text context for question-answering",
    "question": "User-provided question"
}
**Response:**
{
    "answer": "Answer to the provided question",
}
```

### Document Upload API
#### Endpoint: /documentUpload
**Description:** This API endpoint is used for uploading documents. **Method:** `POST` 
```
**Request:**
{
    "document": "File data"
}
Response:
{
    "id": 1,
    "file": "/media/documents/example.pdf",
    "uploaded_at": "2024-01-12T12:34:56Z",
    "name": "example.pdf",
    "text": "This is the extracted text from the document."
}
```
### Document Summarize API
#### Endpoint: /documentSummarize
**Description:** This API endpoint is used for text summarization. **Method:** `POST` 
```
**Request:**
{
    "text": "Text data to be summarized"
}
**Response:**
{
    "Summarized text",
}
```

# To improve:

#### Model Training Locally:
  Currently, the project relies on external APIs for question-answering and text summarization. Consider exploring the option of downloading pre-trained models and hosting them locally for improved accuracy.
#### Includes other file formats:
  The current implementation of the document upload functionality is designed to accept PDF files. However, there's an opportunity to enhance the system by extending support to a broader range of file formats.
  Refine text extraction from pdf file.

# Development Setup

Follow the instructions below to set up your local development environment

## Steps

1. Clone the repository. ( [jump to section](#clone-Document_analyse-repository) )
2. Install [docker](https://docs.docker.com/get-docker/). ( [jump to section](#install-docker) )
3. Install [docker-compose](https://docs.docker.com/compose/install/). ( [jump to section](#install-docker-compose) )
4. Setup Backend & Frontend. ( [jump to section](#Setup-Backend-&-Frontend) )

<br/>
<br/>
  
## clone Document_analyse repository

- On the homepage of the repository, click on the **code** button, copy the URL in the dropdown then run the following code in your computer terminal:

```sh
      $ git clone <copied url>
```

<br/>
<br/>

## Install Docker

> **_NOTE:_** You can skip this step if you already have **docker** installed on your machine. To check if **docker** is running on your machine, run the following command `docker --version`.

- Click on this [link](https://docs.docker.com/get-docker/), select your operating system from the options given, then download and install docker on your local machine.

<br/>
<br/>

## Install Docker Compose

> **_NOTE:_** You can skip this step if you already have **docker-compose** installed on your machine. To check if **docker-compose** is running on your machine, run the following command `docker-compose --version`.

- Click on this [link](https://docs.docker.com/compose/install/), go through the page and select your operating system from the options given, then follow the given instructions to download and install **docker-compose** on your local machine.

<br/>
<br/>

## Setup Backend & Frontend

> **_NOTE_**: For windows users, before running the commands below switch to bash (available through [WSL](https://docs.microsoft.com/en-us/windows/wsl/install)), you can achieve that by typing bash to your command line.

- Then run:

```sh
       $ cd ./document_analyse
```

- Run:

```sh
       $ docker-compose build
```

This will run all the initial setups required and start the server.

```sh
       $ docker-compose up
```

- Run the server:

Subsequently, to start and stop the docker containers, you run the following

To start:

```sh
       $ docker-compose start
```

To stop:

- Stop the running container

```sh
       $ docker-compose stop
```

- Stop & remove the running container

```sh
       $ docker-compose down
```
- access docker container by runing this command: docker exec -it <containerId> /bin/sh
- activate the virtual environment : source venv/bin/activate
- run migrations : python3 manage.py makemigrations  then python3 manage.py migrate

<br/>
<br/>

#### Hugging face API key
- Visit [hagging face url](https://huggingface.co/settings/tokens) create a new account and a new api key after email confirmation.
- Create a file named **.env** in the backend/backend folder (same directory with settings.py), with the following content
```
#.env
REACT_APP_BACKEND_DEVELOPMENT_URL=http://127.0.0.1:8000/api/document
API_TOKEN='your token'

```

## Setup Frontend

- Create a file named **.env** in the frontend root folder (same directory with package.json), with the following content

```sh
#.env
REACT_APP_BACKEND_DEVELOPMENT_URL=http://127.0.0.1:8000/api/document
```

Visit **localhost:3000** on your browser to access the frontend.

<br/>
<br/>

# test backend

- access docker container by runing this command: docker exec -it <containerId> /bin/sh
- then run this command : python manage.py test document.tests

# Contributions

Contributions are welcome!

