import React from 'react'
import PropTypes from 'prop-types'
// ant
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Header } = Layout

const ThemeHeader = ({ collapsed, toggle }) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
            })}
        </Header>
    )
}

export default ThemeHeader

ThemeHeader.propTypes = {
    collapsed: PropTypes.bool,
    toggle: PropTypes.func,
}

ThemeHeader.defaultProps = {
    collapsed: false,
    toggle: null,
}
