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
        title: 'AdminDashboard',
        icon: 'menu',
        menu: true,
    },
    partners: {
        component: 'Partners',
        url: '/partners',
        title: 'partners',
        icon: 'menu',
        menu: true,
    },
}

// component's access to roles.
const rolesConfig = {
    admin: {
        routes: [components.dashboard],
    },
    club: {
        routes: [components.partners, components.dashboard],
    },
    common: {
        routes: [components.initial],
    },
}

export default rolesConfig
