A1 CS424 
Khumoyun Abdulpattoev

The task for the Assignment 1 was to create a single interactive web page with the help of HTML, CSS, and JS. It is intended to be a landing page for a student-run blog where anyone can sign up for. Obviously, it is just the first step.

Semantic structure is as follows: header (contains page title, nav, and theme toggle), nav (all navigation links), main (main page content and the sign-up section), and footer (contains course info).

The accessibility choice I made is having aria-label="Primary," so when the screen reading tool reads it, it helps to distinguish that these links in the navigation are the primary links distinct from other links that may show up inside the main for example. 

The responsive choice I made is using flex-wrap: wrap in header. The navigation and title wrap on a smaller screen so the header look neat.

The Js interaction is the email input form. A user enters their email address, which is validated, then if valid, the message pops up under the sign up button saying we have received the email address. The state is managed in the DOM. The script reads the value of the input field.