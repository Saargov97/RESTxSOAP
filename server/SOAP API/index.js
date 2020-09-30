const soap = require('soap');
const express = require('express');
const app = express();

const service = { 
  ws: { 
    gateway: {
        getSmgw : function (args) { 
          console.log(`Received args with payload equals to ${args.payload}`);
          return { response: 'Response from getSmgw' };
        },
        addSmgw : function (args) { 
          console.log(args);
        },
        deleteSmgw : function (args) { 
          console.log(args);
        } 
    }
  }
};

const xml = require('fs').readFileSync('WebServiceGateway.wsdl', 'utf8');

app.listen(3000);
soap.listen(app, '/WebServiceGateway', service, xml);

app.get('/test', async (req, res) => {
  const url = 'http://localhost:3000/WebServiceGateway?wsdl';
  const soapClient = await soap.createClientAsync(url);
  
  // Print all available methods
  console.log(soapClient.describe().ws.gateway);

  soapClient.getSmgw({ payload: 1 },function(err, response){
      if (err) return res.status(400).json(err);
      return res.status(200).json(response);
  });
});