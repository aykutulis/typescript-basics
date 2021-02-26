import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTodos, deleteTodo} from '../actions'
import {StoreState} from '../reducers'

export const App = (): JSX.Element => {

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const todos = useSelector((state:StoreState) => state.todos)

  useEffect(() => {
    setLoading(false)
  }, [todos])

  const fetchHandler = (): void => {
    setLoading(true)
    dispatch(fetchTodos())
  }

  const deleteHandler =  (id: number): void => {
    dispatch(deleteTodo(id))
  }

  const renderList = (): JSX.Element[] => {
    return todos.map((todo) => {
      return <div onClick={() => deleteHandler(todo.id)} key={todo.id}>{todo.title}</div>
    })
  }
  
    return (
      <div>
        <button onClick={fetchHandler}>Fetch</button>
        {loading ? <div>LOADING...</div> : renderList()}
      </div>
    )
  
}
