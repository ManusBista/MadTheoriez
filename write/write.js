// First, create a form element and append it to the document body
var form = document.createElement('form');
form.method = 'POST';
form.action = 'destination.html';
document.body.appendChild(form);

// Next, create an input element and append it to the form
var input = document.createElement('input');
input.type = 'hidden';
input.name = 'myData';
input.value = 'some value';
form.appendChild(input);

// Finally, submit the form to open the destination page and send the data
form.submit();