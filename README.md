# Application to demonstrate RESTFul Routes

## Overview
* A rendition of a previously attempted web app, using the MEVN stack instead of the MEN stack(with .ejs view "sheets").

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



## Run MongoDB Locally
* Run mongod daemon from bin folder
* Run mongo shell to observe colletions etc.