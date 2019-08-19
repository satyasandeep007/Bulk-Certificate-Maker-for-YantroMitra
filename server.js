const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate3grade = require('./documents/template3grade');
const pdfTemplate2grade = require('./documents/template2grade');
const pdfTemplate2state = require('./documents/template2state');
const pdfTemplate3state = require('./documents/template3state');
const options = { format: 'A4',
                    orientation:'landscape'};


const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
   
   
   


    if(req.body.state.options==="2"&&req.body.state.certi==="Grade"){
        
        
    pdf.create(pdfTemplate2grade(req.body.state,req.body.number),options).toFile(`${req.body.number}.pdf`, (err) => {
       
        if(err) {
                    res.send(Promise.reject());
                }
        
                res.send(Promise.resolve());
            });

    }


    if(req.body.state.options==="2"&&req.body.state.certi==="State"){
        
        
        pdf.create(pdfTemplate2state(req.body.state,req.body.number),options).toFile(`${req.body.number}.pdf`, (err) => {
           
            if(err) {
                        res.send(Promise.reject());
                    }
            
                    res.send(Promise.resolve());
                });
    
        }


        if(req.body.state.options==="3"&&req.body.state.certi==="Grade"){
        
        
            pdf.create(pdfTemplate3grade(req.body.state,req.body.number),options).toFile(`${req.body.number}.pdf`, (err) => {
               
                if(err) {
                            res.send(Promise.reject());
                        }
                
                        res.send(Promise.resolve());
                    });
        
            }

            if(req.body.state.options==="3"&&req.body.state.certi==="State"){
        
        
                pdf.create(pdfTemplate3state(req.body.state,req.body.number),options).toFile(`${req.body.number}.pdf`, (err) => {
                   
                    if(err) {
                                res.send(Promise.reject());
                            }
                    
                            res.send(Promise.resolve());
                        });
            
                }




    
});









app.get('/fetch-pdf', (req, res) => {


    res.sendFile(`${__dirname}/${req.query.ID}.pdf`)
})

 if(process.env.NODE_ENV ===  "production"){
     app.use(express.static('client/build'));

     app.get('*',(req,res) => {
         res.sendFile(path.resolve(__dirname,"client","build","index.html"));
     }
     )
 }

app.listen(port, () => console.log(`Listening on port ${port}`));