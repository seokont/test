import React  from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {addNoteThunk} from '../../Reducer/add-reducer';





import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Field, reduxForm, reset, formValueSelector } from "redux-form";

import Button from "@material-ui/core/Button";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";


// import { myInputsField } from "./../../forinput/newinput";
// import s from "./BalanceTransfer.module.css";
// import TextField from "@material-ui/core/TextField";

// import NativeSelect from "@material-ui/core/NativeSelect";
// import InputBase from "@material-ui/core/InputBase";



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#1a1a1a",
      padding: "15px",
      border: "1px solid #FEF4B0!important",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const Newnote =(props)=>{

    const classes = useStyles();

    return (

        <div>





<form className={classes.form} noValidate onSubmit={props.handleSubmit}>
          <Field
            component="input"
            type="text"
            placeholder="Title"
            style={{
             
              
              padding: "15px",
              
            }}
            name={"title"}
          >
            
          </Field>
         


          <Field
          type='textarea'
          component="textarea" 
            style={{
              
             
              width: "99%",
              height:'250px',
              marginTop:'50px'
              
            }}
            name={"note"}
          >
            
          </Field>

          <Button
            size="large"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Go
          </Button>
         
        </form>

        </div>
    )
}

















const afterSubmit = (result, dispatch) => {
    dispatch(reset("addnote"));
  };
  
  let AddNote = reduxForm({
    form: "addnote",
    onSubmitSuccess: afterSubmit,
  })(Newnote);
  
  const MaimC = (props) => {
    const onSubmit = (values) => {
      let args = [values.title, values.note];
  
      props.addNoteThunk(args);
    };
  
    return (
      <div>
        <AddNote {...props} onSubmit={onSubmit} />
      </div>
    );
  };




















let mapStateToProps = (state) => ({

    note:state.note
    
    })
    
    let NewnoteContainer = compose(connect(mapStateToProps, {
        
      addNoteThunk
    }))(MaimC);
    export default NewnoteContainer;
    