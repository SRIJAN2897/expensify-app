import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin &&<p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
};


const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>Please login to see the details</p>}
            <WrapperComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the detials" />, document.getElementById('app'));