import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useStateContext } from "../context/contextProvider";

export const SignInModal = () => {

    const navigate = useNavigate()
    const {showModal, setShowModal, setUser, userStatus}= useStateContext()
    const [name, setName] = useState('')
    const [password, setPassword] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (!name || !password){ 
        return
        }else{
        setUser({name: name, password: password, status:userStatus})
        setShowModal(false)
        navigate('/user')
        }
    }

    const handleClose = (e) => {
        if(e.target.id === "container") setShowModal(false)
    }

    if (!showModal) return null
    return(
        <div id = "container" onClick={handleClose} className = {`inset-0 fixed bg-black z-50 transition-all ease-in-out duration-300 ${showModal? 'bg-opacity-30': 'bg-opacity-0'}`}>
            <div className="bg-white rounded-3xl h-72 w-80 md:w-96 md:h-80 flex flex-col items-center space-between pt-11 px-8 absolute top-20 right-7 md:top-28 md:right-[20%]">
                <div className="text-lg md:text-xl font-bold text-blue">PairMe</div>
                <div className="w-full mt-6">
                    <form onSubmit={handleFormSubmit} className="text-xs md:text-base flex flex-col items-center gap-y-5 md:gap-y-7">
                        <input placeholder="name" required value={name} onChange = {(e)=> setName(e.target.value)} className="w-full h-10 px-3 outline-none rounded-xl ring-1 ring-blue required:border-red-500" type="text" />
                        <input placeholder="password" required value={password} onChange = {(e)=> setPassword(e.target.value)} className="w-full outline-none h-10 px-3 rounded-xl ring-1 ring-blue required:border-red-500" type="password" />
                        <button type="submit" className="bg-blue h-10 w-20 md:h-12 md:w-24 text-xs md:text-sm text-white rounded-full tracking-wider">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}