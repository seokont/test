
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SidebarContainer from '../../test/src/Components/Sidebar/Sidebar'
import {Route, withRouter} from "react-router-dom";
import MainContainer from '../../test/src/Components/Main/Main'
import NewnoteContainer from '../../test/src/Components/Newnote/Newnote'



import {compose} from "redux";
import {connect} from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow:'none',
    height:'100vh'
   
  },
  paper: {
    padding: "35px",
    textAlign: "justify",
    color: "#fff",
    backgroundColor: "none",
    boxShadow: "none",
  },
}));

function Appp(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid  spacing={0}   style={{height:'100vh'}} 
             
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
              container
              direction="row"
              justify="space-between"
              alignItems="stretch">
      <Grid  style={{ backgroundColor:'#333'}}
      
      item 
      container
             
          xs={2}
          sm={2}
          md={2}
          lg={2}
          xl={2}
      
          container
          direction="row"
          justify="space-between"
          alignItems="stretch">   
          



          <SidebarContainer/>
        
      </Grid>





      <Grid  
      
      
      item 
      container
             
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
      
      >
        <Paper className={classes.paper}>
        <Route path={`/id${props.note.IdForNote}`} render={() => < MainContainer id={props.note.IdForNote}/>}/>          
          <Route path='/new' render={()=> <NewnoteContainer/>}/>   



        </Paper>
      </Grid>
      
    </Grid>
    
  </div>
  );
}

let mapStateToProps = (state) => ({

  note:state.note
  
  })
  
  let App = compose(connect(mapStateToProps, {
      
    
  }))(Appp);
  export default App;
  