import {Router,Route,hashHistory} from 'react-router';


import React from 'react';

import {render} from 'react-dom';
import  About from 'component/router/about';
import  Repos from 'component/router/repos';
import  App from 'component/router/app';
import ALink from  'component/router/link'
render((

    <div>


        <Router history={hashHistory}>

            <Route path="/" component={App}>
                <Route path="/repos" component={Repos}/>
                <Route path="/about" component={About}/>
            </Route>


        </Router>

        </div >


            ), document.getElementById('app'));


            render(<ALink/>, document.getElementById('nav'))
