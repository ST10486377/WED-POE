const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use((req,res,next)=>{ res.setHeader('Access-Control-Allow-Origin','*'); res.setHeader('Access-Control-Allow-Headers','Content-Type'); next(); });

app.post('/api/contact', (req,res)=>{
  console.log('Contact received:', req.body);
  // In production: validate, sanitize, store or send email.
  res.json({status:'ok', message:'Contact received'});
});

app.post('/api/enquiry', (req,res)=>{
  console.log('Enquiry received:', req.body);
  res.json({status:'ok', message:'Enquiry received', estimate: (req.body.quantity||1)*50});
});

app.listen(port, ()=> console.log('Server listening on', port));
