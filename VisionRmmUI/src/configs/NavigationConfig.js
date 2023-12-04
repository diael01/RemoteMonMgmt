import { DashboardOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from './AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-client',
      path: `${APP_PREFIX_PATH}/dashboards/client`,
      title: 'sidenav.dashboard.client',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-device',
      path: `${APP_PREFIX_PATH}/dashboards/device`,
      title: 'sidenav.dashboard.device',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
