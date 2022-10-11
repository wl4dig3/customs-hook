// {type: [todo remove], payload: id }  ---> aquí hay que estar pendiente si enviar todo el objecto o sólo el id para enviarlo igual en todos los reducer

export const todoReducer = (initialState =  [], action) => {
    
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload] // si estamos agregando un nuevo todo, entonces la action tiene un payload
            
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload)

        case '[TODO] Toggle Todo':
            return initialState.map( todo =>  {
                if ( todo.id === action.payload) {
                    return {
                    ...todo,
                    done: !todo.done,
                }
                }
                return todo;
            })
    
        default:
            return initialState;
    }
}