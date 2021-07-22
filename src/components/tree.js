import React from 'react';
import TreeView from 'react-treeview';


export default class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemId: null
    };
    this.openTreeItem = this.openTreeItem.bind(this)
    this.setActiveItem = this.setActiveItem.bind(this)
    this.viewTree = this.viewTree.bind(this)
  } 

  openTreeItem(e) {
    let parent = e.target.parentElement.closest(".node"); 
    if (parent && parent.previousSibling) {
      parent.previousSibling.click()
    }
  }

  setActiveItem(e, item){
    this.setState(
      {activeItemId: item.id}
    )
    this.props.selectAction(item)
  }

  render() {
    var {
      itemName: itemName,
      childrenKeyword: childrenKeyword,
      treeName: treeName,
      icon: icon,
      data: data
    } = this.props

    let tree = 
      data.map((item) => 
        { 
          return (
            this.viewTree(item, childrenKeyword, itemName, treeName, icon)
          )
        }
      );
    return(
      <div id={treeName} className=''>
        {tree}
      </div>
    );
  }

  viewTree(item, childrenKeyword, itemName, treeName, icon='') {
    let mbActive = this.state.activeItemId == item.id ? 'active-tree-item' : '';
    const label2 = 
      (<span 
        className={`node custom-link ${mbActive} noselect`} 
        onClick={(e) => this.setActiveItem(e, item)} 
        onDoubleClick={this.openTreeItem} 
      >
        <i className={`${icon}`}>{ item[itemName] } </i>
        
      </span>);
    var currentItem;
    if (item[childrenKeyword] && Object.keys(item[childrenKeyword]).length !== 0) {
      const children = 
        item[childrenKeyword].map((childrenItem) => 
          {
            return (
                this.viewTree(childrenItem, childrenKeyword, itemName, treeName, icon)
            )
          }
        )
      currentItem = (
          <TreeView
              defaultCollapsed={true}
              nodeLabel={label2}
          itemClassName={'m-1 py-2 px-3 rounded-pill bg-light custom-link'}
          >
          {children}
        </TreeView>
      )
    } else {
        currentItem = (<div className='m-1 py-2 px-3 rounded-pill bg-light custom-link'>label2</div>)
    }
    
    return (
        <div key={`${treeName}-${item.id}`} >{currentItem}</div>
    )
  }
}
