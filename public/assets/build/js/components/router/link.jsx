import {Link} from 'react-router';
import React,{Component} from 'react'
export default  class aLink extends Component {


    render() {

      return   <div>
            <ul>

                <li><Link to="/about">About</Link></li>
                <li><Link to="/repos">repos</Link></li>


            </ul>

        </div>
    }


}