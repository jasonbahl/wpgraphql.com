import React from 'react'
import Link from 'gatsby-link'
import { Layout, Menu, Icon, Row, Col } from 'antd'
import logo from '../../assets/img/logo-horizontal.png'
import styled from 'styled-components'
import Search from '../Search'
const { Header } = Layout;
const SubMenu = Menu.SubMenu;


const Logo = styled.div`
  float:left;
  >*>img {
    height 45px;
    width: auto;
  }
`;

const SiteHeader = () => (
  <Header className="header" >
    <Row>
      <Col xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
        <Logo>
          <Link to="/" >
            <img src={logo} />
          </Link>
        </Logo>
      </Col>
      <Col xxl={10} xl={9} lg={9} md={8} sm={0} xs={0}>
        <Search/>
      </Col>
      <Col xxl={10} xl={10} lg={10} md={10} sm={0} xs={0}>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px', float:'right' }}
        >
          <SubMenu title={<span><Icon type="file" /> Docs</span>}>
            <Menu.Item key="/about">
              <Link to="/getting-started/about"><Icon type="setting" /> Getting Started</Link>
            </Menu.Item>
            <Menu.Item key="/tutorials">
              <Link to="/tutorials/exploring-graphql"><Icon type="edit" /> Tutorials</Link>
            </Menu.Item>
            <Menu.Item key="/recipes">
              <Link to="/recipes/posts"><Icon type="code-o" /> Recipes</Link>
            </Menu.Item>
            <Menu.Item key="/reference">
              <Link to="/reference/actions-filters"><Icon type="book" /> Reference</Link>
            </Menu.Item>
            <Menu.Item key="/faq">
              <Link to="/faq/extending"><Icon type="question-circle-o" /> FAQ</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="github">
            <a href="https://github.com/wp-graphql/wp-graphql" target="_blank">Github <Icon type="github" /></a>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </Header>
);

export default SiteHeader;