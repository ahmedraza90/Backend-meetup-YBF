const axios = require('axios')

async function mixmax(email){
  try{
    var sendConfig = {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Token': "671d004a-2e6d-49cf-8b17-90e19df24535"
      },
      json:true,
    };
    var getTemplateConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Token': "671d004a-2e6d-49cf-8b17-90e19df24535"
      },
    };
    
    await axios(`https://api.mixmax.com/v1/snippets?search=Non Fungible Meetups Vol1`,getTemplateConfig)
    .then((res)=>{
      axios.post(`https://api.mixmax.com/v1/snippets/${res.data.results[0]._id}/send`,{ to: [{email}], variables: {}},sendConfig)
      .then((res)=>{console.log()})
      .catch((e)=>{
        console.log(e)
        process.exit()
      })
      
    })
  }catch(e){
    console.log("mixmax problem",e)
    process.exit()
  }

    
}

module.exports = {
    mixmax
}