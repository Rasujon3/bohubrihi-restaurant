import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
    return {
        dishes: state.dishes,
        sample: state.sample,
    }
}

class Home extends Component {
    componentDidMount() {
        console.log("Home Props: ", this.props);
        this.props.dispatch({
            type: 'TEST',
            str: 'Sujon'
        })
    }
    componentDidUpdate() {
        console.log("Home Props Updated: ", this.props);
    }
    render() {
        document.title = "Fatafati Restaurant";

        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);