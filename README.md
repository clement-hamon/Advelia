# Advelia

A. The openFDA API is based on Elastic Search, could this API be replaced/enhanced with another
technology/SaaS?

Yes. Sure Elastic Search is great as it gives the front-end team some flexibility upon the request being made, such as conditions, counting, sorting, etc... But still the font-end code is tightly couple with the way data are presented by the API.

B. Which technology would you use to recreate such an API without using Elastic Search?

A technology like GraphQl would give full control to the front-end team on how the data from the API are presented.


C. How would you organize the implementation of this API (team organization, project
management etc...)?

With the decoupling of the back-end and front-end thanks to GraphQl, the two separate team could independently. 
The Back-end team will develop and publish an API about some data, and then the Front-end team will be able to work in autonomy as they don't need to ask new endpoints to the Back-end.


D. How would you secure this endpoint, manage permissions/authorizations?

We could use a protocol like OAuth2 to manage authorizations.

Example: The user request a protected resources on the API (could be done when the user lands on the application)

    IF an access token is found and validated, 
    THEN the request is sent with the access token in the http header.
    ELSE 
        IF a refresh token is found,
        THEN an Access token is ask to the authorization server by sending the refresh token, 
            and the request is sent with the access token in the http header.
        ELSE the user is redirect to the authentication page

We could also add an authentication layer with a technology like OpenId Connect.


E. What strategy would you adopt to monitor this API?

Check the domain origin of the request