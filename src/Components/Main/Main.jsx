import {React,useState} from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { deleteThunk } from "../../Reducer/add-reducer";
import { editThunk } from "../../Reducer/add-reducer";
import { editTitleThunk } from "../../Reducer/add-reducer";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Field, reduxForm, reset, formValueSelector } from "redux-form";

import Button from "@material-ui/core/Button";
import { Satellite } from "@material-ui/icons";
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
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Main = (props) => {

  const [order, setOrder] = useState(false);

  const [ordertitle, setOrdertitle] = useState(false);


  const classes = useStyles();


  const handleChange=(event)=> {
    
    props.editThunk(event.target.value,event.target.id);
  }


  const handleChangetitle=(event)=> {
    debugger
    props.editTitleThunk(event.target.value, event.target.id);
  }

  const deleteNote = (id) => {
    props.deleteThunk(id);
  };



  const onclick=()=>{

    setOrder(true)
  }


  const onclickTitle=()=>{

    setOrdertitle(true)
  }

  const onblur=()=>{

    setOrder(false)

  }

  const onblurTitle=()=>{

    setOrdertitle(false)

  }

  return (
    <div>
      <Grid
        spacing={0}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid
          item
          container
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
        >
          {props.note.Note.map((n) =>
            props.id == n.id ? (
              <span key={n.id} style={{ color: "#000" }}>
                <DeleteIcon
                  style={{ color: "#000" }}
                  onClick={() => deleteNote(n.id)}
                />
              </span>
            ) : (
              ""
            )
          )}
        </Grid>

        <Grid item container xs={6} sm={6} md={6} lg={6} xl={6}>
          {/* <EditIcon style={{ color: "#000" }} /> */}
        </Grid>
      </Grid>

      {props.note.Note.map((n) =>
        props.id == n.id ? (
          <span style={{ color: "#000" }}>
            


{ordertitle==true?<input onBlur={onblurTitle} minlength="4" maxlength="80" type='text' value={n.title} id={n.id} onChange={handleChangetitle} />: <h1 onClick={onclickTitle}>{n.title}</h1>}
           


{order==true?<textarea onBlur={onblur} rows="20" cols="100" value={n.note} id={n.id} onChange={handleChange} ></textarea>: <p onClick={onclick}>{n.note}</p>}


<h5>*Для редактирования текста, нажмите по тексту</h5>
            ​
          </span>
        ) : (
          ""
        )
      )}
    </div>
  );
};

let mapStateToProps = (state) => ({
  note: state.note,
});

let MainContainer = compose(
  connect(mapStateToProps, {
    editThunk,
    deleteThunk,
    editTitleThunk,
  })
)(Main);
export default MainContainer;
