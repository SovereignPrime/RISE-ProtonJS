import React from 'react';
import TreeView from 'react-treeview';


export class Tree extends React.Component {
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
    let isActive = this.state.activeItemId == item.id;
    const label2 = 
      (<span 
        className={`node custom-link noselect`} 
        onClick={(e) => this.setActiveItem(e, item)} 
        onDoubleClick={this.openTreeItem} 
      >
        <i className={`${icon}`}>{ item[itemName] } </i>
        
      </span>);

      var children = [];
      if (item[childrenKeyword] && Object.keys(item[childrenKeyword]).length !== 0) {
          children = item[childrenKeyword].map((childrenItem) => 
              {
                  return (
                      this.viewTree(childrenItem, childrenKeyword, itemName, treeName, icon)
                  )
              }
          )
      }
    
    return (
        <div key={`${treeName}-${item.id}`} >
            <TreeElement
                active={isActive}
                label={label2}
            >
                    {children}
            </TreeElement>
        </div>
      )
  }
}

export class TreeElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
    render() {
        let bg = this.props.active ? 'bg-yellow' : 'bg-light',
            class_ = `m-1 py-2 px-3 rounded-pill ${bg} custom-link`;
        let {
            children: children,
            label: label
        } = this.props;
        
        if (children && children.length != 0) {
            return (
                <TreeView 
                nodeLabel={label}
                itemClassName={class_}
            >
                    {children}
            </TreeView>
            )
        } else {
            return (
                <div className={class_}>
                    {label}
                </div>
            )
        }

    }
}
