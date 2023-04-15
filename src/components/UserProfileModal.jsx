import { useStateContext } from "../context/contextProvider"

export const UserProfileModal= ()=>{
    const {profileModal, setProfileModal} = useStateContext()
    const handleClose = (e) => {
        if(e.target.id === "container") setProfileModal(false)
    }


    return (<>
        {profileModal ? <div onClick={handleClose} id='container' className="inset-0 fixed bg-black z-50 bg-opacity-30"/>
        : null}
    
            <div className={`z-100 ${profileModal===false ?'translate-y-full md:translate-y-0 md:hidden':'translate-y-0'} ease-in-out duration-500 fixed h-[70%] w-full md:h-[85%] bottom-0 md:bottom-[7.5%] md:left-[30%]  md:w-[45%] rounded-t-2xl md:rounded-3xl bg-white`}>
            </div>
            </>)
}