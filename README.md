# Advelia
The Adverse Event Listing Application

The project uses create-react-app as a boilerplate (for more information: https://facebook.github.io/create-react-app/docs/getting-started).

The app is up and running at the following address: https://advelia.herokuapp.com/

## scripts

* npm run start : Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
* npm run build : Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. 
* npm run test : Launches the test runner in the interactive watch mode. See the section about running tests for more information.
* npm run deploy : launch a build and then launch a NodeJs procress exposed on port 9000 by default (to change it, setup your environement variable 'port' to the desired one).

## Architecture questions

### A. The openFDA API is based on Elastic Search, could this API be replaced/enhanced with another technology/SaaS?

Yes. Sure Elastic Search is great as it gives the front-end team some flexibility upon the request being made, such as conditions, counting, sorting, etc... But still, the font-end code is tightly coupled with the way data are presented by the API.

### B. Which technology would you use to recreate such an API without using Elastic Search?

A technology like GraphQl would give full control to the front-end team on how the data from the API are presented.


### C. How would you organize the implementation of this API (team organization, project management etc...)?

With the decoupling of the back-end and front-end thanks to GraphQl, the two separate team could independently. 
The Back-end team will develop and publish an API about some data, and then the Front-end team will be able to work in autonomy as they don't need to ask for new endpoints to the Back-end.


### D. How would you secure this endpoint, manage permissions/authorizations?

We could use a protocol like OAuth2 to manage authorizations.

Example: The user request a protected resources on the API (could be done when the user lands on the application)

    IF an access token is found and validated, 
    THEN the request is sent with the access token in the http header.
    ELSE 
        IF a refresh token is found,
        THEN an Access token is asked to the authorization server by sending the refresh token, 
            it is then saved (ex: localStorage) and sent with the requests in the http header.
        ELSE the user is redirect to the authentication page

We could also add an authentication layer with a technology like OpenId Connect.


### E. What strategy would you adopt to monitor this API?

Check the domain origin of the request.
Define a policy regarding the data consumption.
Cache some responses.
Load balance our API server in order to insure high reliablility.

