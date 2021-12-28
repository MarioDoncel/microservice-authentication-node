<!-- TITLE -->
<h1> Authentication Microservice API </h1> <br>
<div align="center">

Project developed at the "<a href="https://web.dio.me/">Digital Innovation One</a> - Eduzz Fullstack Developer #2"  bootcamp. 
</div><br>  

<!-- 
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] 
-->
[![MIT License][license-shield]](https://github.com/MarioDoncel/microservice-authentication-node/blob/main/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/marioadoncel/)


<br />


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#objective">Objective</a></li>
        <li><a href="#status">Status</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
A microservice API to authenticate, generate JWT token and CRUD users.   

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

<!-- This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples. -->
* [Typescript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
* [Express.js (server)](https://expressjs.com/)
* [PostgreSQL (database)](https://www.postgresql.org/)
* [JWT](https://www.npmjs.com/package/jsonwebtoken)
* Dotenv


<!-- 
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Svelte](https://svelte.dev/)
* [Laravel](https://laravel.com)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
 -->
<p align="right">(<a href="#top">back to top</a>)</p>

### Objective

Project developed for educacional purposes.
<p align="right">(<a href="#top">back to top</a>)</p>

### Status

Finished.
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

<!-- This is an example of how to list things you need to use the software and how to install them. -->
* npm
  ```sh
  npm install npm@latest -g
  ```
* PostgreSQL

### Installation

<!-- _Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._
 -->

1. Clone the repo
   ```sh
   git clone https://github.com/MarioDoncel/microservice-authentication-node
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run on PostgreSQL the queries that are in database.sql to create a database "application_user", the necessary tables and the admin user.

4. Configure your access to database, your pgcrypto key and JWT secret key on  `.env`

   ```.env
    # POSTGRE DB
    PGUSER=postgres
    PGHOST=localhost
    PGPASSWORD=xxxxxx
    PGDATABASE=nodeauth 
    PGPORT=5432
    
    ADMINPASSOWRDKEY=xxxxx

    JWT_SECRET_KEY=xxxxx
    ```
     
    
4. Run the application
    ```js
    npm run play
    ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

### BaseURL - http://localhost:3000

# ROUTES

## Token

  ### POST: 
  
  * /token -> Made a basic authentication of the user and generate a JWToken that returned in the response: 
  
     - Basic Auth: 

     ```
         Username: admin
         Password: admin
     ```
     
   * /token/validate -> Made validation of the JWToken and returns 'OK' in the response:  
  
     - Bearer Auth: 

     ```
         eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQwNzE4ODgzLCJleHAiOjE2NDA
         4OTE2ODMsInN1YiI6ImE3OTYxY2I5LTk0NDItNDdkNC04NmQ1LWIyYmIzYmQ5MDRhOCJ9.5IXoH_GQKWNQF4YE8CXZ6a1f4GiUFcW-zL-xtuF_7s4
     ```
     
## Users

  ### GET:  
  
  * /users -> Authenticate the requesting user and return all users
  
    - Bearer: 

     ```
         eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQwNzE4ODgzLCJleHAiOjE2NDA
         4OTE2ODMsInN1YiI6ImE3OTYxY2I5LTk0NDItNDdkNC04NmQ1LWIyYmIzYmQ5MDRhOCJ9.5IXoH_GQKWNQF4YE8CXZ6a1f4GiUFcW-zL-xtuF_7s4
     ```
     
     - Response: 

     ```json
        [
          {
            "uuid": "a7961cb9-9442-47d4-86d5-b2bb3bd904a8",
            "username": "admin"
          },
          {
            "uuid": "f50a2ee3-405e-49e2-87fa-732b72f57425",
            "username": "Mario Andres Doncel Neto"
          }
        ]
     ```
  * /users/:uuid -> Authenticate the requesting user and return a single user found by :uuid
  
    - Bearer: 

     ```
         eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQwNzE4ODgzLCJleHAiOjE2NDA
         4OTE2ODMsInN1YiI6ImE3OTYxY2I5LTk0NDItNDdkNC04NmQ1LWIyYmIzYmQ5MDRhOCJ9.5IXoH_GQKWNQF4YE8CXZ6a1f4GiUFcW-zL-xtuF_7s4
     ```
     
     - Response: 

     ```json
       {
          "uuid": "a7961cb9-9442-47d4-86d5-b2bb3bd904a8",
          "username": "admin"
        }
     ```
     
  ### POST:
     
  * /users -> Authenticate the requesting user, create a new user and return the uuid created
  
    - Bearer: 

     ```
         eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQwNzE4ODgzLCJleHAiOjE2NDA
         4OTE2ODMsInN1YiI6ImE3OTYxY2I5LTk0NDItNDdkNC04NmQ1LWIyYmIzYmQ5MDRhOCJ9.5IXoH_GQKWNQF4YE8CXZ6a1f4GiUFcW-zL-xtuF_7s4
     ```
     
     - Body: 

     ```json
       {
          "username": "Mario Andres Doncel Neto",
          "password": "1234"
        }
     ```
     - Response: 

     ```
       fa1e45cc-9649-493b-aa91-6a25e94b5e22
     ```
     
  ### PUT:
     
  * /users/:uuid -> Authenticate the requesting user, update the user found by :uuid and return this user data in response
  
    - Bearer: 

     ```
         eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQwNzE4ODgzLCJleHAiOjE2NDA
         4OTE2ODMsInN1YiI6ImE3OTYxY2I5LTk0NDItNDdkNC04NmQ1LWIyYmIzYmQ5MDRhOCJ9.5IXoH_GQKWNQF4YE8CXZ6a1f4GiUFcW-zL-xtuF_7s4
     ```

     - Body: 

     ```json
       {
          "username": "Mariana Fanaro",
          "password": "1234"
       }
     ```
     - Response: 

      ```json
       {
          "uuid": "fa1e45cc-9649-493b-aa91-6a25e94b5e22",
          "username": "Mariana Fanaro"
       }
      ```
  ### DELETE:
     
  * /users/:uuid -> Authenticate the requesting user, delete the user found by :uuid and return 'OK' in the response
  
    - Bearer: 

     ```
         eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQwNzE4ODgzLCJleHAiOjE2NDA
         4OTE2ODMsInN1YiI6ImE3OTYxY2I5LTk0NDItNDdkNC04NmQ1LWIyYmIzYmQ5MDRhOCJ9.5IXoH_GQKWNQF4YE8CXZ6a1f4GiUFcW-zL-xtuF_7s4
     ```
     
     - Response: 

      ```
       OK
     ```
   

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Mario Andres Doncel Neto  

Email - 88mario.doncel@gmail.com <br>
Whatsapp - +55 19 99612 9909

Project Link: [https://github.com/MarioDoncel/microservice-authentication-node](https://github.com/MarioDoncel/microservice-authentication-node)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [DIGITAL INNOVATION ONE](https://web.dio.me/)
* [EDUZZ](https://www.eduzz.com/)
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png


