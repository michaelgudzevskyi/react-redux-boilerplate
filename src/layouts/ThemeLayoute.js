import React, { useState } from 'react'
// ant
import { Layout } from 'antd'

import ThemeHeader from './ThemeHeader'
import ThemeSidebar from './ThemeSidebar'

const { Content } = Layout

const ThemeLayoute = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => setCollapsed(!collapsed)

    return (
        <Layout>
            <ThemeSidebar collapsed={collapsed} />
            <Layout className="site-layout">
                <ThemeHeader toggle={() => toggle()} collapsed />
                <Content className="site-layout-background wrapper">Content</Content>
            </Layout>
        </Layout>
    )
}

export default ThemeLayoute
