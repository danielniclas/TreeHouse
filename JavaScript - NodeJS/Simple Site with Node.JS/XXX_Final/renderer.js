
var fs = require("fs");                   //  Require fs MODULE

function mergeValues(values, content) {           //  Binding Values - Replacing the {{..}} with actual content
                                                  //  Cycle over the keys:  avatarURL, username, badges, javascriptPoints
  for(var key in values) {
                                                                    //  Replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);      //  Search ENTIRE contents of file.  Find and Replace
  }

  return content;                                                   //return merged content
}


function view(templateName, values, reponse) {            //  Function to read from the html template files, ADD VALUES, and WRITE OUT RESPONSE
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});    //  READ THE HTML TEMPLATE FILE  ./views/templateName.html
                                                                                                  //  readFileSync -- means synchronous version

  //Insert values in to the content                       //  Insert values into the html template files
  fileContents = mergeValues(values, fileContents);       //  fileContents is the ENTIRE HTML FILE!
  //Write out the contents to the response
  reponse.write(fileContents);                            //  MUST write out the ENTIRE fileContents -- ENTIRE HTML PAGE
}


//  EXPORT THE ROUTER FUNCTIONS:
module.exports.viewFunction = view;