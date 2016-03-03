var fs = require("fs");

function mergeValues(values, content) {
  //Cycle over the keys
  for(var key in values) {
    //Replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);      //  FIND AND REPLACE on the ENTIRE HTML CONTENTS!!!
                                                                    //  Replace {{Key}} with the Key Value
  }
  //return merged content
  return content;
}



function view(templateName, values, reponse) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});      //  HAD TO ADD THIS {encoding: "utf8"}  convert buffer to string
  //Insert values in to the content
  fileContents = mergeValues(values, fileContents);             //  Call Function Above  -- to merge the contents
  //Write out the contents to the response
  reponse.write(fileContents);
}

module.exports.view = view;