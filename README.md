A2 CS424 
Khumoyun Abdulpattoev

The form is created to allow new users to sign up to the website using their name, email, and password. 

Inputs:
    name: length >= 2 and contains only letters and spaces  
    email: pattern of letter and number combination followed by @, then letters, then dot, then letters for domain
    password: length >= 8 
    verify-password: match the value with that of the password field

Each field error appears right under it and is of red color. Error appear only in two cases: if the form is submitted but there are errors or if the field has been touched and a proper input has not yet been provided. When the user fixes an error with the field, the error message simply disappears.

At the bottom of the form, there is a form message, i.e tells if the form has been successfully submitted (green) or there are errors requiring user's attention (red). 

 I used the to debug the validation logic by logging the "touched" object state and validation results before updating DOM elements, which helped me verify that field-level errors were being triggered correctly only for touched fields.