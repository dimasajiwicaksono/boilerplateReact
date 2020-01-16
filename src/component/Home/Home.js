import React, { Component } from 'react';

// <---CSS React FrameWork -->
// import { Components } from 'react-bootstrap';

// <---connect react-redux--->
// import { connect } from 'react-redux';



class Home extends Component {
    render() {
        return (
            <>
            <h1>Hello Wolrd</h1>
            </>
        )
    }
}



export default Home;


// <---Initialization state from redux store--->
// const mapStateToProps = (state) => {
//     return {
//         name: state.stateFromStore,
//     }
// }


// <--- dispatching/trigger signal to redux Actions -->
// const mapDispacthToProps = (dispatch) => {
//     return {
//         name: () => dispatch(funcNameFromActions()),
//     }
// }

// <--- connect all redux func to component -->
// export default connect(
//     mapStateToProps,
//     mapDispacthToProps
// )
//      (Home)



