import React, { PropTypes } from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="cointainer-fluid">
                <p>Header here...</p>
                {this.props.childrenF}
            </div>
        );
    }
}
App.PropTypes = {
    children : PropTypes.object.isRequired
};

export default App;