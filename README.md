# HiPay_Challenge

## How it is build

### the backend
  The backend is a node server with express.
  All the Data are lead by GraphQl and the Apollo FrameWork

  There is just 2 routes:
    - One will return all Movie in the data
    - One will return just some movies, if their name match with an input research

### The frontend

  The front is build with React and the apollo Client is use for fetch data from the backend
## How Start the Project

### With docker-compose
Place yourself at the project's root and use:

  `docker-compose build --no-cache `
  `docker up -d`  

The server will run on the port:8080 and the front on port:3000 