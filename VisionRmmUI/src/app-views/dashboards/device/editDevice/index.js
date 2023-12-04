import { useParams } from 'react-router-dom';
import DeviceForm from '../deviceForm';

const EditDevice = () => {
	const params = useParams();

	return (
		<DeviceForm mode="EDIT" param={params}/>
	)
}

export default EditDevice