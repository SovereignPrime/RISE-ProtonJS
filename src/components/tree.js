import React from 'react';
import TreeView from 'react-treeview';


export class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        if (this.props.label) {
            return (
                <TreeElement
                    label={this.props.label} 
                    active={this.state.active}
                >
                    {subtree}
                </TreeElement>
            )
        }
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
