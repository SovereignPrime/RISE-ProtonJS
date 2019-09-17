import React from 'react';
import TreeView from 'react-treeview';


export default class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemId: undefined
    };
    this.openTreeItem = this.openTreeItem.bind(this)
    this.viewTree = this.viewTree.bind(this)
  } 

  openTreeItem(e) {
    if (e.target.previousSibling) {
      e.target.previousSibling.click()
    }
    let id = (e.currentTarget.getAttribute('data-id'))
    console.log(id);
    this.setState(
      {activeItemId: id}
    )
  }

  render() {
    let itemName = this.props.itemName
    let childrenKeyword = this.props.childrenKeyword
    let treeName = this.props.treeName
    let tree = 
      this.props.data.map((item) => 
        { 
          return (
            this.viewTree(item, childrenKeyword, itemName, treeName)
          )
        }
      );
    return(
      <div id={treeName} className=''>
        {tree}
      </div>
    );
  }

  viewTree(item, childrenKeyword, itemName, treeName) {
    let mbActive = this.state.activeItemId == item.id ? 'active-tree-item' : '';
    const label2 = 
    (<span className={`node custom-link ${mbActive}`} onClick={this.openTreeItem} data-id={item.id}>
      {item[itemName]} 
    </span>);
    var currentItem;
    if (item[childrenKeyword] && Object.keys(item[childrenKeyword]).length !== 0) {
      const children = 
        item[childrenKeyword].map((childrenItem) => 
          {
            return (
                this.viewTree(childrenItem, childrenKeyword, itemName)
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
}
