const fs = require('fs');
const crypto = require('crypto');
const xlsx = require('xlsx');

// read the Excel file as a workbook
const workbook = xlsx.readFile('https://docs.google.com/spreadsheets/d/1Y0F-dxIDms5mA7VKUbRj5FEwI1_PU_SeIStY_ohOd60/edit#gid=0');

// get the first worksheet
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// convert the worksheet to a JSON array
const data = xlsx.utils.sheet_to_json(worksheet);

const date = new Date();
const epochTime = Math.round(date.getTime() / 1000);

// initialize an array to hold the JavaScript objects
const objects = [];

// loop over the rows of the Excel file
for (let i = 0; i < data.length; i++) {
  const row = data[i];

  // create a JavaScript object for the current row
  const obj = {};
  obj["dna"] = "";
  obj["name"] = row.Name;
  obj["description"] = row.description || row.Description ;
  let Arrtributes = [];
  for (let key in row) {
    if (key !== 'Name' && key !== 'Description') {
      let x = {
        'trait_type' : key,
        'value' : row[key]
      }
      Arrtributes.push(x)
    }
  }
  obj.attributes = Arrtributes;
  obj["image"] = "";
  obj["edition"] = 1;
  obj["date"] = epochTime;
  obj["compiler"] = "LaunchX";

  obj.dna = crypto.createHash('sha1')
    .update(JSON.stringify(obj))
    .digest('hex');

  // add the object to the array
  fs.writeFile(`./ARTS/${i}.json`, JSON.stringify(obj), 'utf-8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// log the resulting array of objects
console.log(JSON.stringify(objects));
