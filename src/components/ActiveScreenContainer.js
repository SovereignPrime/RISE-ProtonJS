import React from 'react';
import { connect } from 'react-redux'

import ActiveScreen from './ActiveScreen'
import { selectScreen }  from '../actions/general'

class ActiveScreenContainer extends React.Component {
    render() {
      return (
        <ActiveScreen         
          activeScreen={this.props.activeScreen}
          selectScreen={this.props.selectScreen}
        />
      )
    }
}

const mapDispatchToProps = { //putActionsToProps
  selectScreen
}

const mapStateToProps = state => {
    return {
        activeScreen: state.general.activeScreen
    }
}

export default connect(mapStateToProps)(ActiveScreenContainer);
