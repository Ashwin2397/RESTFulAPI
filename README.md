# Application to demonstrate RESTFul Routes

## Overview
* A rendition of a previously attempted web app, using the MEVN stack instead of the MEN stack(with .ejs view "sheets").
* A simple 5 page web application (including the landing page) that constitues an API endpoint from the server side, API calls being made from the client side and appropriate sending of HTTP status codes
* The focus was solely on creating the client-server architecture
* **Little to no frontend design had been incorporated**
    * This caveat includes: **little to no VueJS concepts had been included** 
    * Everything had been bootstrapped and performs accordingly to its expected functionalities
* Soon to be deployed to Heroku for possible testing with selenium
    * So as to hone skills on automated web testing
## Goal
* Further enhance knowledge on API calls and bridge lapse in understanding
    * Did so by creating an API endpoint from the server side (with "cors" module) and did API calls from client side (with "axios" module)
    * This then allowed "cross-origin-sharing" between client and server
* Further enhance knowledge on HTTP status codes 
    * Prior to this, previously created web apps never sent status codes appropriately
    * Instead, error handling was done solely via console.log(err) 
* Further enhance knowledge on VueJS
    * Prior to this, both frontend and backend were integrated without any distinction via the MEN Stack
    * Learnt the Model-View-ViewModel architecture
    * further solidfied the idea of a "client-server architecture"
* Further enhance knowledge on asynchronous functions, await and promises

## HTTP Status Codes
| Route  | Method   | HTTP Status Codes   |
|---|---|---|
| Index | GET | *500 => Internal Server Error<br>*200 => OK|
| Destroy  |DELETE   |*500 => Internal Server<br>*204 => Request successfully processed;no content returned-   |
|Show   |GET   |*500 => Internal Server Error<br>*200 => OK   |
|Edit   |GET   |*500 => Internal Server Error<br>*200 => OK   |
|Update   |PUT   |*500 => Internal Server<br>*204 => Request successfully processed;no content returned-      |
|New   |GET   | *Show form in client side only   |
|Create   |POST   |*401 => Request cannot be processed;client error, possibly syntax<br>*201 => Request successful, appropriate resource created   |


## API
* All routes adhered to RESTFul routing
    * All HTTP verbs were appropriately matched to CRUD capablities of application
* API calls made from client side used the axios module
    * Route parameters (Usually object id) were passed appropriately in the show, edit, update and destroy routes
    * Returned promise were resolved appropriately
    * Sent JSON to where applicable
* API endpoints at server side used the "cors" module
    * Accessed neccessary parameters via req.params
    * Accessed neccessary data via req.body
    * Sent JSON back where applicable
    * Reported appropriate HTTP status codes as per table above

## VueJS
### Learnt:
* vue router
    * This allowed me to create multiple pages rather than have a "single-page-application"(SPA)
* axios
    * This allowed the client to send requests to the server thus enabling cross origin sharing
* directives
    * v-bind:href=""
    * v-on:click=""
    * v-for:
* The idea of creating reusable components
* Setting up the folder structure
* Client-server architecture
* Mounting a function
    * Function runs when component is "called"
* Styling is scoped
### Yet to Learn:
* Exhaustive list of directives
* Properly create a reusable component (ie. Navbar, Header, Footer)
* Event handling
* The use of props to pass data amongst components
## Async Functions and Await 
* As the name suggests, it helps to execute multiple processes at the same time
* "await" is used where appropriate to return control back to application till the operation is completed
* Return values of async functions are always "promises"
* These functions are commonly applied to steps such as retrieval from database

## Promises
* As the term "promises" may denote, it is an indeterminate outcome that is being promised
* If operation executes successfully, then the promise is resolved via .then()
* Else the promise is rejected and we catch the error that follows


