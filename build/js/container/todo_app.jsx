import AddTodo from 'component/todo/add_todo.jsx';
import Footer from 'component/todo/footer.jsx';
import Todo from 'component/todo/todo.jsx';
import TodoList from 'component/todo/todo_list.jsx';
import React,{Component} from 'react';
import * as actions from 'action/todo';
import {createSelector} from 'reselect';
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




const filterSelector=(state)=>state.filters;
const todoSelector=(state)=>state.todos;
/*测试reselect//如果filterSelector，todoSelector计算出来的值和上一次一样，那么filter,todos)=>{

return  {
    filters: "FILTERS"+JSON.stringify(filter),
    todos:todos.slice()
}});
这段代码不会被执行，只是返回上次结果
*/


 const select=   createSelector([
     filterSelector,todoSelector
 ],(filter,todos)=>{

     return  {
         filters: "FILTERS"+JSON.stringify(filter),
         todos:todos.slice()
     }


 });



export default connect(select)(App);