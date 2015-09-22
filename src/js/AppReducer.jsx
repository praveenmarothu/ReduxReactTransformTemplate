/*-------------------------------------------*/

import * as redux  from 'redux';

/*-------------------------------------------*/


function todos( state = [] , action = {type : 'NO_ACTION' , text : "" })
{
    switch (action.type)
    {
        case 'ADD_TODO'   : return [ ...state, action.text ];
        default           : return state;
    }
}



export default redux.combineReducers( { todos } );

