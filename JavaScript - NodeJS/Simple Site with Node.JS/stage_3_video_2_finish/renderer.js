var fs = require("fs");                                 //  Require the module for fs  FILE SYSTEM

function view(templateName, values, response) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html');      // node.JS API -- fs.readFileSync -- RETURN CONTENTS OF FILE NAME
                                                                                //  Return contents of HTML FILES
                                                                                //  READ FILE IN PARTICULAR PATH:  ./views
                                                                                //  Need to do things Synchronously here
  //Insert values in to the content
  
  //Write out the contents to the response
  response.write(fileContents);
}

module.exports.view = view;                             //  EXPORT MODULE