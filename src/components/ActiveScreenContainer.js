import React from 'react';
import { connect } from 'react-redux'

import ActiveScreen from './ActiveScreen'


class ActiveScreenContainer extends React.Component {
    render() {
      return (
        <ActiveScreen         
          activeScreen={this.props.activeScreen}
        />
        )
    }
}

// const mapDispatchToProps = { //putActionsToProps

// }

const mapStateToProps = state => {
    return {
        activeScreen: state.general.activeScreen
    }
}

export default connect(mapStateToProps)(ActiveScreenContainer);
