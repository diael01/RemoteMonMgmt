import { useParams } from 'react-router-dom';
import ClientForm from '../clientForm';

const EditClient = () => {
	const params = useParams();

	return (
		<ClientForm mode="EDIT" param={params}/>
	)
}

export default EditClient