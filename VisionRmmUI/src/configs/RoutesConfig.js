import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from './AppConfig'


export const protectedRoutes = [
    {
        key: 'dashboard.client',
        path: `${APP_PREFIX_PATH}/dashboards/client`,
        component: React.lazy(() => import('../app-views/dashboards/client')),
    },
    {
        key: 'dashboard.addclient',
        path: `${APP_PREFIX_PATH}/dashboards/client/addClient`,
        component: React.lazy(() => import('../app-views/dashboards/client/addClient')),
    },
    {
        key: 'dashboard.editclient',
        path: `${APP_PREFIX_PATH}/dashboards/client/editClient/:id`,
        component: React.lazy(() => import('../app-views/dashboards/client/editClient')),
    },
    {
        key: 'dashboard.device',
        path: `${APP_PREFIX_PATH}/dashboards/device`,
        component: React.lazy(() => import('../app-views/dashboards/device')),
    },
    {
        key: 'dashboard.adddevice',
        path: `${APP_PREFIX_PATH}/dashboards/device/addDevice`,
        component: React.lazy(() => import('../app-views/dashboards/device/addDevice')),
    },
    {
        key: 'dashboard.editdevice',
        path: `${APP_PREFIX_PATH}/dashboards/device/editDevice/:id`,
        component: React.lazy(() => import('../app-views/dashboards/device/editDevice')),
    }
]