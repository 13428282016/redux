import AddTodo from 'component/todo/add_todo.jsx';
import Footer from 'component/todo/footer.jsx';
import Todo from 'component/todo/todo.jsx';
import TodoList from 'component/todo/todo_list.jsx';
import React,{Component} from 'react';
import * as actions from 'action/todo';

import {connect} from 'react-redux';
  class App extends Component {


    render() {


        return (
            <div>
                <AddTodo
                    onAddClick={text =>{
            this.context.store.dispatch(actions.add(text));
            }
          }/>
                <TodoList
                    todos={this.props.todos}
                    onTodoClick={todo =>
           this.props.dispatch(actions.complete(todo))
          }/>
                <Footer
                    conditions={this.props.filters}

                    />
            </div>
        );

    }
}

App.contextTypes = {

    store: React.PropTypes.object
};


function select(state){


     console.log(state);
    return state;
}

export default connect(select)(App);