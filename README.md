
# amar movie react
A simple landing page for show a anime movie using a public API
using:
- react
- redux
- redux saga
- redux persist
- react router
- tailwind css
- Docker
- GCP cloud run
- GCP cloud build



## API Reference

docs: https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch

#### Get all anime movies using pagination

```http
  GET https://api.jikan.moe/v4/anime
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `number` | **Optional**. To limit movies from server |
| `page` | `number` | **Optional**. To use pagination, total results from server is depend on limit value |



## Features

- Simple search
- Simple pagination



## Acknowledgements
list of article that help to create this
 - [Use redux with saga](https://www.telerik.com/blogs/handling-middleware-redux-saga)
 - [Cache with redux persist](https://stackoverflow.com/questions/56116124/how-to-implement-redux-persist-with-redux-saga)
 - [Design reference](https://tailwindui.com/components)
 - [Project setup](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
 - [CI/CD with cloud build & github](https://medium.com/@endySantoso/simple-ci-cd-with-gcp-cloud-build-using-docker-part-1-cf27bf3c2638)


## Run Locally

Clone the project

```bash
  git clone https://github.com/pisangGoreng/amar-movie-react
```

Go to the project directory

```bash
  cd amar-movie-react
```

Change branch to dev

```bash
  git checkout dev
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

If want run with docker
```bash
docker build -t amar-movie-react -f Dockerfile-dev .
```

=======
## API Reference

docs: https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch

#### Get all anime movies using pagination

```http
  GET https://api.jikan.moe/v4/anime
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `number` | **Optional**. To limit movies from server |
| `page` | `number` | **Optional**. To use pagination, total results from server is depend on limit value |



## Features

- Simple search
- Simple pagination



## Acknowledgements
list of article that help to create this
 - [Use redux with saga](https://www.telerik.com/blogs/handling-middleware-redux-saga)
 - [Cache with redux persist](https://stackoverflow.com/questions/56116124/how-to-implement-redux-persist-with-redux-saga)
 - [Design reference](https://tailwindui.com/components)
 - [Project setup](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
 - [CI/CD with cloud build & github](https://medium.com/@endySantoso/simple-ci-cd-with-gcp-cloud-build-using-docker-part-1-cf27bf3c2638)


## Run Locally

Clone the project

```bash
  git clone https://github.com/pisangGoreng/amar-movie-react
```

Go to the project directory

```bash
  cd amar-movie-react
```

Change branch to dev

```bash
  git checkout dev
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

If want run with docker
```bash
docker build -t amar-movie-react -f Dockerfile-dev .
```


