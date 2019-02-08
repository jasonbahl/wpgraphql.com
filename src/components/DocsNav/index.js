import React from 'react'
import { docsNavList } from '../../utils/nav'
import { navigate } from 'gatsby'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu;

const getOpenKey = (docsNavList, path) => {
  const list = docsNavList.map( item => {
    if (path.includes( item.directory )) {
      return item.directory;
    } else {
      return null;
    }
  })

  return list.filter( (el) => {
    return el != null;
  })

}

const DocsNav = ({location}) => (
  <Menu
    theme="dark"
    mode="inline"
    defaultSelectedKeys={location && location.pathname ? location.pathname : null}
    defaultOpenKeys={ location && location.pathname ? getOpenKey(docsNavList, location.pathname ) : null }
    selectedKeys={location.pathname ? location.pathname : []}
    style={{ height: '100%' }}
  >
    {docsNavList.map( item => {
      return(
        <SubMenu key={item.directory} title={<span><Icon type={item.icon} />{item.title}</span>}>
          {item.items.map( subItem => {
            return <Menu.Item key={ item.directory + '/' + subItem.id } onClick={() => { navigate( item.directory + '/' + subItem.id ) }}>{subItem.title}</Menu.Item>;
          })}
        </SubMenu>
      );
    })}
  </Menu>
);

export default DocsNav;
