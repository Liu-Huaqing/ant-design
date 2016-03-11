import React from 'react';
import Menu, { Item, Divider, SubMenu, ItemGroup } from 'rc-menu';
import animation from '../common/openAnimation';

function noop() {
}

const AntMenu = React.createClass({
  getDefaultProps() {
    return {
      prefixCls: 'ant-menu',
      onClick: noop,
      onOpen: noop,
      onClose: noop,
      className: '',
      theme: 'light',  // or dark
    };
  },
  getInitialState() {
    return {
      openKeys: []
    };
  },
  handleClick(e) {
    this.setState({
      openKeys: []
    });
    this.props.onClick(e);
  },
  handleOpenKeys(e) {
    this.setState({
      openKeys: e.openKeys
    });
    this.props.onOpen(e);
  },
  handleCloseKeys(e) {
    this.setState({
      openKeys: e.openKeys
    });
    this.props.onClose(e);
  },
  render() {
    let openAnimation = this.props.openAnimation || this.props.openTransitionName;
    if (!openAnimation) {
      switch (this.props.mode) {
        case 'horizontal':
          openAnimation = 'slide-up';
          break;
        case 'vertical':
          openAnimation = 'zoom-big';
          break;
        case 'inline':
          openAnimation = animation;
          break;
        default:
      }
    }

    let props = {};
    const className = `${this.props.className} ${this.props.prefixCls}-${this.props.theme}`;

    // Fix rc-menu bug which do not remove undefined children
    let children = this.props.children.filter(function(item){return !!item; });

    if (this.props.mode !== 'inline') {
      // 这组属性的目的是
      // 弹出型的菜单需要点击后立即关闭
      // 另外，弹出型的菜单的受控模式没有使用场景
      props = {
        openKeys: this.state.openKeys,
        onClick: this.handleClick,
        onOpen: this.handleOpenKeys,
        onClose: this.handleCloseKeys,
        openTransitionName: openAnimation,
        className,
        children
      };
    } else {
      props = {
        openAnimation,
        className,
        children
      };
    }
    return <Menu {...this.props} {...props} />;
  }
});

AntMenu.Divider = Divider;
AntMenu.Item = Item;
AntMenu.SubMenu = SubMenu;
AntMenu.ItemGroup = ItemGroup;

export default AntMenu;
