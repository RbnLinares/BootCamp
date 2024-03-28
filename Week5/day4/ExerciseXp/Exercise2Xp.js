 // Retrieve the form and console.log it
 const form = document.querySelector('#userForm');
 console.log(form);

 // Retrieve the inputs by their id and console.log them
 const fnameInput = document.getElementById('fname');
 const lnameInput = document.getElementById('lname');
 console.log(fnameInput, lnameInput);

 // Retrieve the inputs by their name attribute and console.log them
 const firstnameInput = document.querySelector('input[name="firstname"]');
 const lastnameInput = document.querySelector('input[name="lastname"]');
 console.log(firstnameInput, lastnameInput);

 // Add a submit event listener to the form
 form.addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the default form submission behavior

   // Get the values of the input tags
   const fnameValue = fnameInput.value;
   const lnameValue = lnameInput.value;

   // Check if they are not empty
   if (fnameValue && lnameValue) {
     // Create an <li> element for each input value
     const usersAnswerList = document.querySelector('.usersAnswer');
     const fnameLi = document.createElement('li');
     fnameLi.textContent = fnameValue;
     const lnameLi = document.createElement('li');
     lnameLi.textContent = lnameValue;

     // Append them to the <ul class="usersAnswer"></ul>
     usersAnswerList.appendChild(fnameLi);
     usersAnswerList.appendChild(lnameLi);
   }
 });