/**
 * Created by wmj on 2016/2/1.
 */
import React ,{Component,PropTypes} from 'react';

export default  class AddTodo extends Component {

    render() {
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
                <button onClick={e => this.handleRedoClick(e)}>
                    redo
                </button>
                <button onClick={e => this.handleUndoClick(e)}>
                    undo
                </button>
            </div>

        )
    }
    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    handleRedoClick(){

        this.props.onRedoClick();


    }
    handleUndoClick(){
        this.props.onUndoClick();

    }

}

AddTodo.propTypes={

    onAddClick:PropTypes.func.isRequired

};