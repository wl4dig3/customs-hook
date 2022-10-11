import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
  }

export const useTodos = () => {

    const initialState = [
      // {
      //   id: new Date().getTime(),
      //   desription: "Recolectar la piedra del alma",
      //   done: false,
      // },
      // {
      //   id: new Date().getTime() * 2.5,
      //   desription: "Recolectar la piedra del poder",
      //   done: false,
      // },
    ];

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);


  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter( todo => !todo.done).length
  

    const handledNewTodo = (todoo) => {
        // console.log({todo});
        const action = {
          type: '[TODO] Add Todo',
          payload: todoo,
        }
        dispatch( action )
      };
    
      const handledDeleteTodo = (id) => {
        // console.log(id)
        dispatch({
          type: '[TODO] Remove Todo',
          payload: id,
        });
      };
    
      const handleToggleTodo = (id) => {
        console.log('toggle->',id)
        dispatch({
          type: '[TODO] Toggle Todo',
          payload: id,
        });
      }

    return {
        todos,
        handleToggleTodo,
        handledDeleteTodo,
        handledNewTodo,
        initialState,
        init,
        todosCount,
        pendingTodosCount,
    }
}
