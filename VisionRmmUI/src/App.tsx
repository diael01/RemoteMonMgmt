import { useEffect, useState } from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { AUTH_TOKEN, THEME_CONFIG } from './configs/AppConfig';
import useFetchUser from "./hooks/UserHooks";
import Layouts from './layouts';
import store from "./store";
import Login from "./app-views/login";
import { Claim } from "./types/claim";


const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};


function  App() {  
  const { data, isSuccess } = useFetchUser();
  const [sid,setSid] = useState<string>();  
  const [success,setSuccess] = useState<boolean>();
  useEffect(() => {
  
     if(data) {     
     setSid(data.find(n=>n.type==="sid")?.value);   
     sessionStorage.setItem(AUTH_TOKEN, sid!);
     setSuccess(isSuccess);
     }
  });
 
  return (
    <Provider store={store}>
    <BrowserRouter>
    {/* {!success && <Login />} 
   
     {data && data?.map((h: Claim) => ( 
        <div>     
          <p>key:{h.type}</p>
          <p>value:{h.value}</p>  
        </div>    
     ))} */}
    
        {/* <div hidden={!success}>       */}
        <div>
            <ThemeSwitcherProvider 
                themeMap={themes} 
                defaultTheme={THEME_CONFIG.currentTheme} 
                insertionPoint="styles-insertion-point"
              >           
                <Layouts/>           
                </ThemeSwitcherProvider>        
            </div>  
    
    </BrowserRouter>   
    </Provider>
  );
}

export default App;


