import { Dropdown } from 'antd';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import styled from '@emotion/styled';
import { FONT_SIZES, FONT_WEIGHT, MEDIA_QUERIES, SPACER } from '../../constants/ThemeConstant';
import useFetchUser from '../../hooks/UserHooks';

const Icon = styled.div(() => ({
	fontSize: FONT_SIZES.LG
}))

const Profile = styled.div(() => ({
	display: 'flex',
	alignItems: 'center'
}))

const UserInfo = styled('div')`
	padding-left: ${SPACER[2]};

	@media ${MEDIA_QUERIES.MOBILE} {
		display: none
	}
`

const Name = styled.div(() => ({
	fontWeight: FONT_WEIGHT.SEMIBOLD
}))

const Title = styled.span(() => ({
	opacity: 0.8
}))

const MenuItemSignOut = (props) => 
{
	const { data, isSuccess } = useFetchUser();			
	const [url,setUrl] = useState("");
 	useEffect(() => {
		if(data) {     					
			setUrl(data.find((n)=>n.type==="bff:logout_url")?.value);				
		}
	 });  

	const handleSignOut = () => {	
		console.log("url:"+url);
		sessionStorage.removeItem(AUTH_TOKEN);
		return false;		
	} 

	return (
		<div>
		<a href={url} onClick={handleSignOut}>Sign Out</a>	
	</div>
						
	)
}

const items = [
	{
		key: 'Sign Out',
		label: <MenuItemSignOut label="Sign Out" />,
	}
]

export const NavProfile = ({mode}) => {
	const { data, isSuccess } = useFetchUser();	
	const [name,setName] = useState("");
	const [role,setRole] = useState("");

 	useEffect(() => {
		if(data) {     		
			setName(data.find((n)=>n.type==="name")?.value);
			setRole(data.find((n)=>n.type==="role")?.value);				
		}
	 });  	 
	return (
		<Dropdown placement="bottomRight" menu={{items}} trigger={["click"]}>
			<NavItem mode={mode}>					
				<Profile>					
					<UserInfo className="profile-text">
						<Name>{name}</Name>
						<Title>{role}</Title>
					</UserInfo>
				</Profile>
			</NavItem>
		</Dropdown>
	);
}

export default NavProfile
