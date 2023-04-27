import { useStateContext } from "../context/contextProvider"
import{BsFillPatchExclamationFill} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


export const LogoutModal = ()=> {
    const { logoutModal, setLogoutModal, setUser, user } = useStateContext();
    const navigate = useNavigate()

    const handleLogout = ()=>{
        setLogoutModal(false)
        setUser(null)
        navigate('/')

    }

    if (!logoutModal) return null
    return(
        <div id='logoutContainer' onClick={(e)=> e.target.id==='logoutContainer'? setLogoutModal(false):null} className="inset-0 flex items-center justify-center fixed bg-black z-100 bg-opacity-30">
            <div className="md:p-20 p-7 text-xs md:text-base flex flex-col justify-center items-center gap-y-2 bg-white text-white rounded-xl md:rounded-3xl md:h-2/4 h-[33.3%] aspect-square">
                <div className="text-gray-700 md:text-red-500 text-5xl md:text-8xl"><BsFillPatchExclamationFill/></div>
                <div className="md:mt-4 mt-2 text-blue text-center">Are you sure you want to log out of your account?</div>
                <div><button onClick={handleLogout} className="md:mt-2 bg-blue rounded-full text-xxs md:text-xs md:w-20 md:h-9 w-14 h-6">Logout</button></div>
            </div>
        </div>
    )
}