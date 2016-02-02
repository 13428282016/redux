import AddTodo from './add_todo.jsx';
import Footer from './footer.jsx';
import Todo from './todo.jsx';
import TodoList from './todo_list.jsx';

import React,{Component} from 'react';

export default  class App extends Component {


    render() {

        return (
            <div>
                <AddTodo
                    onAddClick={text =>
            console.log('add todo', text)
          }/>
                <TodoList
                    todos={[{
            text: 'Use Redux',
            status: 'PROGRESS'
          }, {
            text: 'Learn to connect it to React',
                  status: 'PROGRESS'
          }]}
                    onTodoClick={todo =>
            console.log('todo clicked', todo)
          }/>
                <Footer

                    conditions={{a:1}}

                    />
            </div>
        );

    }
}