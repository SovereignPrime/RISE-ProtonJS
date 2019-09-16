import React from 'react';
import TreeView from 'react-treeview';


export default class Tree extends React.Component {
  // constructor(props) {
  //   super(props);
  // } 


  render() {
    let itemName = this.props.itemName
    let childrenKeyword = this.props.childrenKeyword
    let treeName = this.props.treeName
    let tree = 
      this.props.data.map((item) => 
        { 
          return (
            viewTree(item, childrenKeyword, itemName, treeName)
          )
        }
      );
    return(
      <div id={treeName} className=''>
        {tree}
      </div>
    );
  }
}

function viewTree(item, childrenKeyword, itemName, treeName) {
  const label2 = (<span className='node custom-link'>{item[itemName]}</span>);
  var currentItem;
  if (item[childrenKeyword] && Object.keys(item[childrenKeyword]).length !== 0) {
    const children = 
      item[childrenKeyword].map((childrenItem) => 
        {
          return (
              viewTree(childrenItem, childrenKeyword, itemName)
          )
        }
      )
    currentItem = (
      <TreeView defaultCollapsed={true} nodeLabel={label2} >
        {children}
      </TreeView>
    )
  } else {
    currentItem = label2;
  }
  
  return (
      <div key={`${treeName}-${item.id}`} >{currentItem}</div>
  )
}

