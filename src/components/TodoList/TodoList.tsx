import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <TodoInfo todo={todo} />
          </div>
        );
      })}
    </>
  );
};
