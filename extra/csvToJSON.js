const fs = require('fs');
const crypto = require('crypto');
const xlsx = require('xlsx');

// read the Excel file as a workbook
const workbook = xlsx.readFile('Fido.xlsx');
    
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
  // console.log(data)
  const row = data[i];
  // console.log(row)
  // create a JavaScript object for the current row
  let Arrtributes = [];
  for (let key in row) {
    if (key == 'Background') {
      let x = {
        'trait_type': key,
        'value': row[key] || ""
      }
      Arrtributes.push(x)
    }
    if (key == 'Base') {
      let x = {
        'trait_type': key,
        'value': row[key] || ""
      }
      Arrtributes.push(x)
    }
    if (key == 'Hair_&_Headwear') {
      let x = {
        'trait_type': key,
        'value': row[key] || ""
      }
      Arrtributes.push(x)
    }
    if (key == 'Upper_Face') {
      let x = {
        'trait_type': key,
        'value': row[key] || ""
      }
      Arrtributes.push(x)
    }
    if (key == 'Clothes') {
      let x = {
        'trait_type': key,
        'value': row[key] || ""
      }
      Arrtributes.push(x)
    }
    if (key == 'Lower_Face') {
      let x = {
        'trait_type': key,
        'value': row[key] || ""
      }
      Arrtributes.push(x)
      let y = {
        'trait_type': "Character",
        'value': row["Character"] || ""
      }
      Arrtributes.push(y)
    }

  }
  // console.log("---",Arrtributes)
  const obj = {};
  obj["dna"] = "";
  obj["title"]="FDP#1"
  obj["description"]= "A collection of 7,777 unique cool fidos stored on the blockchain, drawing inspiration from the vibrant 90s era, complete with cool commercial rights."
  obj["creator"]= "FidoDido"
  obj["image"]= `https://fidodido7777.s3.eu-west-1.amazonaws.com/media/${i+1}.png`

  obj.attributes = Arrtributes;
  // // obj["image"] = "";
  obj["properties"] = {
    "category": "image",
    "files": [
      {
        "uri": `https://fidodido7777.s3.eu-west-1.amazonaws.com/media/${i+1}.png`,
        "type": "image"
      }
    ]
  }
  obj["edition"] = i+1;
  obj["date"] = epochTime;
  obj["compiler"] = "LaunchX";

  obj.dna = crypto.createHash('sha1')
    .update(JSON.stringify(obj))
    .digest('hex');
  // console.log(obj)
  // add the object to the array
  fs.writeFile(`./ARTS/${i+1}.json`, JSON.stringify(obj), 'utf-8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// log the resulting array of objects
console.log(JSON.stringify(objects));
