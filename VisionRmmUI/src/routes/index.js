import { Navigate, Route, Outlet, Routes as RouterRoutes } from 'react-router-dom';
import { AUTHENTICATED_ENTRY } from '../configs/AppConfig';
import { protectedRoutes } from '../configs/RoutesConfig';
import AppRoute from './AppRoute';
//import ProtectedRoute from './ProtectedRoute';

const Routes = () => {

	return (
		<RouterRoutes>
			<Route path="/" element={<Outlet />}>
				<Route path="/" element={<Navigate replace to={AUTHENTICATED_ENTRY} />} />
				{protectedRoutes.map((route, index) => {
					return (
						<Route 
							key={route.key + index} 
							path={route.path}
							element={
								<AppRoute
									routeKey={route.key} 
									component={route.component}
									{...route.meta} 
								/>
							}
						/>
					)
				})}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>			
		</RouterRoutes>
	)
}

export default Routes