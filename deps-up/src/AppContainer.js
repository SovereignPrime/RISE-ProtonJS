import React from 'react';
import { Row, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import App from './App'
import { loadRiseId, selectScreen, searchValue }  from './actions/general'
import { loadMessages }  from './actions/updates'

class AppContainer extends React.Component {
  

  render() {
    return (
      <App         
        general={this.props.general}
        loadRiseId={this.props.loadRiseId}
        selectScreen={this.props.selectScreen}
        searchValue={this.props.searchValue}
        loadMessages={this.props.loadMessages}
      />
    )
  }
}

const mapDispatchToProps = {
  loadRiseId,
  selectScreen,
  searchValue,
  loadMessages
}

const mapStateToProps = state => {
    return {
        general: state.general
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
