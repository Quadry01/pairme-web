import { useStateContext } from "../context/contextProvider"

export const UserProfileModal= ()=>{
    const {profileModal, setProfileModal} = useStateContext()

    if (!profileModal) return null
    return (
        <div className="inset-0 fixed bg-black z-50 bg-opacity-30">
            <div className="absolute md:"></div>
        </div>
    )
}