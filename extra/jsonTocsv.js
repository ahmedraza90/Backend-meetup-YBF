const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Step 1: Read the JSON files from the directory
const jsonFilesPath = '../metadata';
const jsonFiles = fs.readdirSync(jsonFilesPath).filter(file => path.extname(file) === '.json');

let combinedData = [];

// Step 2: Combine the JSON objects into an array
jsonFiles.forEach(file => {
    const filePath = path.join(jsonFilesPath, file);
    const rawdata = fs.readFileSync(filePath);
    const jsonData = JSON.parse(rawdata);
    jsonData.attributes.forEach(data => {
      const key = data.trait_type.toLowerCase().replace(/ /g, '_');
      jsonData[key] = data.value
      delete jsonData.attributes
    })
    const newObj = {
      name: jsonData.name,
      ...jsonData
    };
    combinedData.push(newObj);
  });

// // Step 3: Convert the JSON array to an Excel sheet
const worksheet = xlsx.utils.json_to_sheet(combinedData);
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// // Step 4: Write the Excel sheet to a file
const outputPath = './output_excel_file.xlsx';
xlsx.writeFile(workbook, outputPath);

console.log('Excel file has been created!');
