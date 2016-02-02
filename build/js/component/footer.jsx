import React,{Component,PropTypes} from 'react';

export default class Footer extends Component {


    render() {

        return (
            <p>
                {this.props.conditions}
            </p>
        )
    }

}


