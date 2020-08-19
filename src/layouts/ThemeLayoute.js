import React, { useEffect, useState } from 'react'
// ant
import { Layout } from 'antd'

import ThemeHeader from './ThemeHeader'
import ThemeSidebar from './ThemeSidebar'

import routesServices from '../routes/routesServices'

const { Content } = Layout

const ThemeLayoute = () => {
    const [generatedRoutes, setGeneratedRoutes] = useState(null)
    const routes = () => routesServices({ role: 'admin' })

    useEffect(() => {
        setGeneratedRoutes(routes())
    }, [])

    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => setCollapsed(!collapsed)

    return (
        <Layout>
            <ThemeSidebar collapsed={collapsed} />
            <Layout className="site-layout">
                <ThemeHeader toggle={() => toggle()} collapsed />
                <Content className="site-layout-background wrapper">{generatedRoutes}</Content>
            </Layout>
        </Layout>
    )
}

export default ThemeLayoute
