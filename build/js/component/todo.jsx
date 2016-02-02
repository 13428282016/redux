import React,{Component,PropTypes} from 'react';

export default class Todo extends Component {

    render() {
        return (

            <li>
                onClick={this.props.onClick}
                style={{
                textDecoration: this.props.status == 'COMPLETED' ? 'line-through' : 'none',
                cursor: this.props.status == 'COMPLETED' ? 'default' : 'pointer'

            }}
                {this.props.text}
            </li>
        )


    }


}



Todo.propTypes={

    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    status:PropTypes.string.isRequired

};