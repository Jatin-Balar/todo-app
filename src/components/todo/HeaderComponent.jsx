import {Link} from 'react-router-dom'
import { useAuth } from './security/AuthContext'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react'

function HeaderComponent() {

    const authContext = useAuth()
    const {instance} = useMsal()
    const handleLogin = async()=>{
        try {
            let {idToken} = await instance.loginPopup();
            authContext.login(idToken)
        } catch (error) {
            console.error(error);
        }
        
    }

    const Logout = async () => {
        try {
            await instance.logoutPopup();
           authContext.logout()
        } catch (error) {
            console.error(error);
        }
    }
    return (
        
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.google.com">Google</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                  <AuthenticatedTemplate>
                                     <Link className="nav-link" to="/welcome/jatinbalar">Home</Link>
                                     </AuthenticatedTemplate>  
                                </li>
                                <li className="nav-item">
                                    <AuthenticatedTemplate>
                                         <Link className="nav-link" to="/todos">Todos</Link>
                                    </AuthenticatedTemplate>                                
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <UnauthenticatedTemplate>
                                    <button type="button" className="btn btn-dark btn-sm float-end" onClick={()=>handleLogin()}>Login</button> 
                                </UnauthenticatedTemplate>
                            </li>
                            <li className="nav-item">
                                <AuthenticatedTemplate>
                                    <button type="button" className="btn btn-dark btn-sm float-end" onClick={() => Logout()}>Logout</button>
                                </AuthenticatedTemplate>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default HeaderComponent