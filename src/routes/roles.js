const components = {
    dashboard: {
        component: 'Dashboard',
        url: '/',
        title: 'Dashboard',
        icon: 'menu',
        menu: false,
    },
    initial: {
        component: 'AdminDashboard',
        url: '/admin',
        title: 'Início 1212',
        icon: 'menu',
        menu: true,
    },
    test: {
        component: 'AdminDashboard2',
        url: '/test',
        title: 'Início test',
        icon: 'menu',
        menu: true,
    },
}

// component's access to roles.
const rolesConfig = {
    admin: {
        routes: [components.dashboard, components.initial],
    },
    club: {
        routes: [components.initial, components.dashboard],
    },
    common: {
        routes: [components.test],
    },
}

export default rolesConfig
