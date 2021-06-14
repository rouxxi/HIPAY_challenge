# HiPay_Challenge

## How it is build

 The app is build with the concept of `Mobile First`  

### front
 Build with React  
 Router React-router-dom  
 frameWork CSS: material ui  
 add styled-component for some conditions in one component  

### back
 Framework backend : GraphQl and the Apollo + express  

  There is just 2 routes:  
    - One will return all Movie in the data  
    - One will return just some movies, if their name match with an input research  


## How Start the Project

 All the project is in a container of 2 image docker 

### With docker-compose
Place yourself at the project's root and use:  

>  `docker-compose build --no-cache `
>  `docker up -d`  

The server will run on the port: 8080 and the front on port: 3000 \