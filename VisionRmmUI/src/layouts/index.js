import React, { lazy, Suspense, memo } from 'react'
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import Loading from '../components/shared-components/Loading';
import { lightTheme, darkTheme } from '../configs/ThemeConfig';
import { resources } from '../lang';
import useBodyClass from '../utils/hooks/useBodyClass';
import Routes from '../routes';
import { AUTH_TOKEN } from '../configs/AppConfig';

const AppLayout = lazy(() => import('./AppLayout'));
const AuthLayout = lazy(() => import('./AuthLayout'));

const Layouts = () => {

	//const token = sessionStorage.getItem(AUTH_TOKEN);
	
	const blankLayout = useSelector(state => state.theme.blankLayout);

	//const Layout = token && !blankLayout ? AppLayout : AuthLayout;
	const Layout = AppLayout ;
	
	const locale = useSelector((state) => state.theme.locale);

	const direction = useSelector((state) => state.theme.direction);

	const currentTheme = useSelector((state) => state.theme.currentTheme);

	const currentAppLocale = resources[locale];

	useBodyClass(`dir-${direction}`);

	const themeConfig = currentTheme === 'light' ? {...lightTheme} : {...darkTheme}

	return (
	
			
	 <ConfigProvider  theme={themeConfig}  direction={direction} locale={currentAppLocale.antd}>
			<Suspense fallback={<Loading cover="content"/>}>
				 <Layout>
					 <Routes /> 
				</Layout> 
			</Suspense>  
		</ConfigProvider> 
	)
}

export default memo(Layouts)