import React,{Component} from 'react';
import ALink from  'component/router/link'

export default  class App extends Component{

    render(){

        return <div>
            <ALink/>
            {this.props.children}
        </div>
    }


}