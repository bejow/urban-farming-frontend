import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default ({component: Component, user, ...rest}) => {
    console.log("uuuuuser", user)
    return (
        <Route
            {...rest}
            render ={(props) => user
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location }}}/>
            }
        />
    )
}