import { Note } from "@material-ui/icons";

const ADD_ID_NOTE = "ADD_ID_NOTE";
const EDIT_NOTE = "EDIT_NOTE";
const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const EDIT_TITLE_NOTE = "EDIT_TITLE_NOTE";

let initialization = {
    Note:[

{id:'1',
    title:'Cтатья 1',
    note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{id:'2',
    title:'Статья 2',
    note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{id:'3',
    title:'Статья 3',
    note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

    ],


    IdForNote:'',
   
    
};

let AddNoteReducer = (state = initialization, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {

                ...state,
               ...state.Note.push({id:String(Math.floor(Math.random() * 1000)),title:action.result[0], note:action.result[1]})

            }

            case ADD_ID_NOTE:
            return {

                ...state,
                IdForNote: action.id
            };


            case EDIT_NOTE:
                return {
    
                    ...state,
                    Note:[...state.Note.map((p)=>{


                        if(action.id==p.id){
                            return    {...p, note:action.value}
                        }
                       return p
                    })]
                };



                case EDIT_TITLE_NOTE:
                    return {
        
                        ...state,
                        Note:[...state.Note.map((p)=>{
    
    
                            if(action.id==p.id){
                                return    {...p, title:action.value}
                            }
                           return p
                        })]
                    };

                case DELETE_NOTE:
                    return {
        
                        ...state,
                        Note:[...state.Note.filter(e =>                             
                            e.id !== action.id
                           
                           )]
                    };

        

        default:
            return state;
    }
}

export let addNote = (result) => ({type: ADD_NOTE, result});
export let addIdNote = (id) => ({type: ADD_ID_NOTE, id});

export let editNote = (value,id) => ({type: EDIT_NOTE, value,id});
export let deleteNote = (id) => ({type: DELETE_NOTE, id});

export let editTitleNote = (value,id) => ({type: EDIT_TITLE_NOTE, value,id});





export const addNoteThunk=(args)=>
   (dispatch)=>{        
        
            dispatch(addNote(args));       
            
    }


    export const addIdNoteThunk=(id)=>
   (dispatch)=>{       
        
            dispatch(addIdNote(id));        
    }



    export const editThunk=(value,id)=>
    (dispatch)=>{       
        
             dispatch(editNote(value,id));        
     }



     export const deleteThunk=(id)=>
     (dispatch)=>{       
          
              dispatch(deleteNote(id));        
      }


      export const editTitleThunk=(value,id)=>
     (dispatch)=>{       
          
              dispatch(editTitleNote(value,id));        
      }



      
export default AddNoteReducer;
