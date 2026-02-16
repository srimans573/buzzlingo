# SCHEMA: SIGN UP PAGE 

username: The username that the user inputs in the input field OR collected from GOOGLE authentication. 
Input validation: 3-100 chars max. 
Store as String type in the database. 

email: The email that the user enters in the input field OR collected from GOOGLE authentication. 
Store as String type in the database. 

password: The password that the user inputs in the input field ONLY for email based authentication.
DO NOT store this in the database, only feed to account creation function.

dateCreated: The date that the account was originally created. 
Store as DATE Object (or Firestore's custom Timestamp object).