//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");                     // password input
var $confirmPassword = $("#confirm_password");      //  confirm_password input
var $userName = $("#username");

console.log("password =  ",$password );


//Hide hints
$("form span").hide();       //  "form span" -- all spans on form  --  HIDE


function isPasswordValid() {
  return $password.val().length > 8;        // return TRUE or FALSE
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();   // return TRUE or FALSE
}

function usernamePresent (){
    return $userName.val().length !== 0;            // return TRUE or FALSE
}




function usernameEvent(){

    if(usernamePresent()) {
        //Hide hint if valid
        $userName.next().hide();      //  HIDE hint (span that is next)
    } else {
        //else show hint
        $userName.next().show();      //  SHOW hint (span that is next)
    }
}

function passwordEvent(){
    //Find out if password is valid  
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();      //  HIDE hint (span that is next)
    } else {
      //else show hint
      $password.next().show();      //  SHOW hint (span that is next)
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint 
    $confirmPassword.next().show();
  }
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching() && usernamePresent();   // return TRUE or FALSE
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());  //"enable" or "disable" SUBMIT button
    //$("#submit").prop("disabled", canSubmit());
    console.log("Submit Button Pressed")
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
// focus()  clicking on the element
// keyup()  key is on the way UP

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
// focus()  clicking on the element
// keyup()  key is on the way UP

$userName.focus(usernameEvent).keyup(usernameEvent);
// focus()  clicking on the element
// keyup()  key is on the way UP

enableSubmitEvent();









