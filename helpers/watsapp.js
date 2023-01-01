var axios = require('axios');

async function sendMessage(data) {
  var config = {
    method: 'post',
    url: `https://graph.facebook.com/v15.0/113206068304344/messages`,
    headers: {
      'Authorization': `Bearer EAAdZCRF0ZBDNQBAKdyQ1wVtNZBtMF5DBSw9SqQeO6hxL17TT9lJUua1eMxJ643v89KEnCWdPyZAZBx42TpVwNAhuCYlrRHTrKJVGYZBDdh1FPyoGfJII1cQM9UL3C4x16QZADUwL4ehGdbQogdmMgfuzM7ld94MeFZBT3VxuuZA5X4AXZCwc0yUDU2`,
      'Content-Type': 'application/json'
    },
    data: data
  };
  try{
    return await axios(config)
  }catch(e){
    return "AccessToken has expired"
  }
  
}

function getTextMessageInput(recipient, text) {
  return JSON.stringify({
    "messaging_product": "whatsapp",
    "preview_url": false,
    "recipient_type": "individual",
    "to": recipient,
    "type": "template",
    "template":{
      "name":"hello_world",
      "language":{
        "code": "en_US"
      }
    },
  });
}

module.exports = {
  sendMessage: sendMessage,
  getTextMessageInput: getTextMessageInput
};
