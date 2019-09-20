import React from 'react';
import { connect } from 'react-redux'


import UpdatesScreen from './UpdatesScreen'
import { loadSubjects, selectSubject, loadMessages }  from '../../actions/updates'


class UpdatesScreenContainer extends React.Component {
  

  render() {
    return (
      <UpdatesScreen         
        updates={this.props.updates}
        loadSubjects={this.props.loadSubjects}
        selectSubject={this.props.selectSubject}
        loadMessages={this.props.loadMessages}
      />
    )
  }
}

const mapDispatchToProps = {
  loadSubjects, 
  selectSubject,
  loadMessages
}

const mapStateToProps = state => {
    return {
        updates: state.updates
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatesScreenContainer);
