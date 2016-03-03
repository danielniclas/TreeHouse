



var xhr = new XMLHttpRequest();                           // Step 1



xhr.onreadystatechange = function () {                    //  Step 2   Call Back  --   build HTML and
  if(xhr.readyState === 4 && xhr.status === 200) {

    //console.log("responseText:  ", xhr.responseText);
    console.log("typeof responseText:  ", typeof xhr.responseText);

    var employees = JSON.parse(xhr.responseText);       //  assign all responseText to a variable  (JSON.parse)
                                                        //  JSON.parse converts string into JS object -- returns JS object

    console.log("typeof employees variable:  ", typeof employees);
    console.log("employees variable:  ", employees);


    //TWO OBJECT PROPERTIES included in {employees} object:  name AND inoffice


    var statusHTML = '<ul class="bulleted">';           //  save <ul class="bulleted"> element into variable

    for (var i=0; i<employees.length; i += 1) {     //  LOOP to go through the employee array
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';     //  ADD <li class="in"> element to statusHTML
      } else {
        statusHTML += '<li class="out">';     //  ADD <li class="out"> element to statusHTML
      }

      statusHTML += employees[i].name;      //  ADD employees name to statusHTML
      statusHTML += '</li>';                //  ADD closing </li> tag to statusHTML
    }

    statusHTML += '</ul>';                  //  ADD closing </ul> tag to statusHTML

    document.getElementById('employeeList').innerHTML = statusHTML;   //  ADD/INSERT finished element to <div id="employeeList">
  }
};


xhr.open('GET', '../data/employees.json');              // Step 3


xhr.send();                                             //  Step 4