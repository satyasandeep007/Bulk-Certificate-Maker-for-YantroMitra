module.exports = ({ rows,options,certi },i) => {
   
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>king</title>
          <link href="https://fonts.googleapis.com/css?family=Cinzel|Montserrat&display=swap" rel="stylesheet">
    
          <style>
    
    .main{
          border: 15px  solid;
          border-color: dimgray; 
          margin-top:2%;
         
          padding:auto;                                                                 
    } 
         
          
          .body{
          text-align: center;
          margin-left: 25%;
          margin-right: 25%;                 
          margin-bottom: 2%;
          color: #393a4e;   
          font-family: 'Montserrat', sans-serif;
           
          line-height: 1.5em;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          }
    
         .title{
        
          text-align: center;
          font-family: 'Cinzel', serif;
          color : #2f3542;
          line-height-step: 1em;
    
          }     
    
          .awarded{                                                                                                                                                                                                                                                                                                                 
          text-align: center;
          color: #393a4e;   
          font-family: 'Montserrat', sans-serif;
          line-height: 1em; 
          }
    
          .name{
          text-align: center;
          font-family: 'Cinzel', serif;
          color : #c9a04b;
          font-size: 100%;
          }
    
    
    
    
                
          </style> 
          
    </head>
    
    <body>
      
          <div class="main">   
    
               
                
                <table style="width:100%;align-items:center;margin-top:4%;">
    
                <tr>
                <td style="text-align:center;"> <img  src="${rows[i][13]}"></td>
            
                <td style="text-align:center;"> <img  src="${rows[i][14]}"></td>
                </tr>
               
                </table>
    
    
                <div class="title">
    
                      <h2> CERTIFICATE OF APPRECIATION </h2>
                
                </div>
    
                <div class="awarded">
    
                      <h3>This certificate is awarded to </h3>
    
                </div>
    
                <div class="name">
    
                      <h1>${rows[i][1]}</h1>
    
                </div>
                <div class="body">
                 
                      <h3>        Of <b>"class ${rows[i][2]}", ${rows[i][4]}</b> for performance assessed as 
                                  grade <b>${rows[i][7]}</b> in <b>${rows[i][3]}</b>.
                                  Conducted at <b>${rows[i][6]}</b>, on <b>${rows[i][5]}</b>.
                      </h3>
                </div>
    
             
    
    
    <table style="width:100%;align-items:center;margin-top:0%;padding:0px;">
    
    <tr>
<td style="text-align:center;font-family: 'Montserrat', sans-serif;color : #c9a04b;padding:0px;font-size:100%;"><h3>${rows[i][9]}</h3></td>
    <td style="text-align:center;font-family: 'Montserrat', sans-serif;color : #c9a04b;padding:0px;font-size:100%;"><h3>${rows[i][11]}</h3></td>
    </tr>
    <tr>
        <td style="text-align:center;font-family: 'Montserrat', sans-serif;color: #393a4e;padding:0px;font-size:80%; ">${rows[i][10]}</td>
        <td style="text-align:center;font-family: 'Montserrat', sans-serif;color: #393a4e;padding:0px;font-size:80%; ">${rows[i][12]}</td>
      </tr>
    </table>
    
          
    </body>
    </html>     
        
               
        `;
    };