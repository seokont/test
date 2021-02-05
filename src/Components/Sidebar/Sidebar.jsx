import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import { NavLink } from "react-router-dom";
import {addIdNoteThunk} from '../../Reducer/add-reducer';
import s from '../Sidebar/Sidebar.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: '0 45%',
      
    },
  }));
const Sidebar =(props)=>{

    const classes = useStyles();
const idDispatch = (id)=>{

props.addIdNoteThunk(id)


}
    return (

        <div>

{props.note.Note.map(n=><div style={{padding:'15px 0px', color:'#fff'}}><NavLink className={s.ssilka} onClick={()=>idDispatch(n.id)} to={`/id${n.id}`}>{n.title}</NavLink></div>)}

<NavLink to='/new'><Button style={{textAlign:'center'}}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add
      </Button></NavLink>
        </div>
    )
}















let mapStateToProps = (state) => ({

note:state.note

})

let SidebarContainer = compose(connect(mapStateToProps, {
    addIdNoteThunk
  
}))(Sidebar);
export default SidebarContainer; 
