
# Intro

**Document analyse** is an open-source, ai powered documente analyser tool for company fianancial data related tasks.

# Development Setup

Follow the instructions below to set up your local development environment

## Steps

1. Clone the repository. ( [jump to section](#clone-Document_analyse-repository) )
2. Install [docker](https://docs.docker.com/get-docker/). ( [jump to section](#install-docker) )
3. Install [docker-compose](https://docs.docker.com/compose/install/). ( [jump to section](#install-docker-compose) )
4. Install make. ( [jump to section](#install-make) )
5. Setup Backend & Frontend. ( [jump to section](#Setup-Backend-&-Frontend) )

<br/>
<br/>

##Open Ai API key
  echo "export OPENAI_API_KEY='yourkey'" >> ~/.zshrc
  source ~/.zshrc
  echo $OPENAI_API_KEY
  
## clone Document_analyse repository

- On the homepage of the repository, click on the **code** button, copy the URL in the dropdown then run the following code in your computer terminal:

```sh
      $ git clone <copied url>
```

The copied URL will have the format of `https://github.com/<your github username>/zubhub.git`

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

## Install Make

> **_NOTE:_** You can skip this step if you already have **make** installed on your machine. To check if **make** is running on your machine, run the following command `make --version`.

- If you are on a Linux machine, you can install **make** through this [link](https://www.gnu.org/software/make/).
- If you are on a Mac machine, you can google the specific steps of installing **make** on a mac machine.
- If you are on a Windows machine, you should refer to the **Windows Specific Setup** section at the beginning of the **Developer Setup** section.

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

This will run all the initial setups required and start the server, generate the minimal **.env file** required to run the backend, spins-up all containers defined in the docker-compose file.

In case you're facing issues after running the above, like make: Error,
kindly run this before the above command:

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

Visit http://localhost:8000 on your browser to access the API documentation.

<br/>
<br/>

## Setup Frontend

- On your terminal/command line, navigate to **./zubhub/zubhub_frontend/zubhub** directory

- Create a file named **.env** in the frontend root folder (same directory with package.json), with the following content

```sh
#.env
REACT_APP_NODE_ENV=developement
REACT_APP_BACKEND_DEVELOPMENT_URL=http://127.0.0.1:8000
```

Visit **localhost:3000** on your browser to access the frontend.

<br/>
<br/>

# Contributions

Contributions are welcome!

