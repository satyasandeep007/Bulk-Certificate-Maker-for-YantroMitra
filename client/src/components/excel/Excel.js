import React, { Component } from 'react';
import './Excel.css';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { Col, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';
import axios from 'axios';
import { saveAs } from 'file-saver';


class Excel extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null,
      isToggleOn:true,
      options:2,
      certi:"State"
    }
    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);
    this.fileInput = React.createRef();
  }
  
  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
  
	

buttonPress = () => {

  if(this.state.rows){

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    
     for (let index = 1 ; index < this.state.rows.length; index++) {
      this.createAndDownloadPdf(index) 
       
     }

     
  }else{

  } 
}



  createAndDownloadPdf = (index) => {

      axios.post('/create-pdf',{state:this.state,number:index})
      .then(() => axios.get(`fetch-pdf?ID=${index}`, { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
          saveAs(pdfBlob, `${this.state.rows[index][1]}.pdf`);
        })

      
    }

    
  
  //----------------------------------------------------------

  renderFile = (fileObj) => {
      //just pass the fileObj as parameter
      ExcelRenderer(fileObj, (err, resp) => {
        if(err){
          console.log(err);            
        }
        else{
          this.setState({
            dataLoaded: true,
            cols: resp.cols,
            rows: resp.rows
          });
                  }
      }); 
      
  }

  fileHandler = (event) => {    
    if(event.target.files.length){
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      
      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false
        });
        this.renderFile(fileObj)
      
        
      }    
      else{
        this.setState({
          isFormInvalid: true,
          uploadedFileName: ""
        })
      }
    }               
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  openFileBrowser = () => {
    this.fileInput.current.click();
  }

 

  render() {
    return (
      <div>
            
        <Container>
        <form>
          <FormGroup row>
            <Label for="exampleFile" xs={6} sm={4} lg={2} size="lg">Upload</Label>          
            <Col xs={4} sm={8} lg={10}>                                                     
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button color="info" style={{color: "white", zIndex: 0}} onClick={this.openFileBrowser.bind(this)}><i className="cui-file"></i> Browse&hellip;</Button>
                  <input type="file" hidden onChange={this.fileHandler.bind(this)} ref={this.fileInput} onClick={(event)=> { event.target.value = null }} style={{"padding":"10px"}} />                                
                </InputGroupAddon>
                <Input type="text" className="form-control" value={this.state.uploadedFileName} readOnly invalid={this.state.isFormInvalid} />                                              
                <FormFeedback>    
                  <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
                    Please select a .xlsx file only !
                  </Fade>                                                                
                </FormFeedback>
              </InputGroup>     
            </Col>                                                   
          </FormGroup>   
        </form>

        {this.state.dataLoaded && 
        <div>
          <Card body outline color="secondary" className="restrict-card">
            
              <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
            
          </Card>  
        </div>}
        </Container>




        <div className="App">



        <p></p>
        
        <div >
  
  
  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" name="options" className="btn btn-secondary" value="2" onClick={this.handleChange}>2 Logos</button>
 
  <button type="radio" name="options" className="btn btn-secondary" value="3" onClick={this.handleChange}>3 Logos</button>

</div>
<p></p>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="radio" name="certi" className="btn btn-secondary" value="State" onClick={this.handleChange}>State</button>
 
  <button type="radio" name="certi" className="btn btn-secondary" value="Grade" onClick={this.handleChange}>Grade</button>


</div>




</div>


<p></p>
       <div>
       <button onClick={this.buttonPress}>{ this.state.isToggleOn ? 'Download PDFs' : 'Creating PDFs......'}</button>
       </div>
      
      </div>
    
      </div>
    );
  }
}

export default Excel;