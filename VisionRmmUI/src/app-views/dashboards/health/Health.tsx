import ApiStatus from "../../../apiStatus";
import { useFetchHealth } from "../../../hooks/HealthHooks";
import ValidationSummary from "../../../ValidationSummary";


const GetHealth = () => {
    const { data, status, isSuccess } = useFetchHealth();
    
    if (!isSuccess) 
      return <ApiStatus status={status}></ApiStatus>;
  
    return (   
      <div>
        {data}
      </div>          
    );
};

export default GetHealth;