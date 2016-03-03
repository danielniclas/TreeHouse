$(document).ready(function () {
  $.getJSON('data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON
}); // end ready


//  My additions for room list:

$(document).ready(function () {
  $.getJSON('data/rooms.json', function (data) {
    var statusHTML = '<ul class="rooms">';         // CREATE new element
    $.each(data,function (index, room) {           // Build out the new element
      if (room.available === true) {
        statusHTML +='<li class="empty">';
      } else {
        statusHTML +='<li class="full">';
      }
      statusHTML += room.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML)             //  ADD the element to the HTML page
  }); // end getJSON
}); // end ready