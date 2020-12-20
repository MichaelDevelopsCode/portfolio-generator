const fs = require('fs'); // allows app to access the fs module's functions through the fs assignment
const generatePage = require('./src/page-template.js'); // grab function from page-template


const profileDataArgs = process.argv.slice(2); //grabs two arguments from console
const [name, github] = profileDataArgs; // assigns the two args to vars

// create the html file (defined in generatePage function) in file path
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});
