import React,{Component,PropTypes} from 'react';

export default class Footer extends Component {


    render() {

        return (
            <p>
                {JSON.stringify(this.props.conditions)}
            </p>
        )
    }

}


