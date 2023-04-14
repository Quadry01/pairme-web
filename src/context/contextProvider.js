
import { createContext, useContext, useState, useRef, useEffect } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
  //setUp user
  const [user, setUser] = useState(null)
  //displaying singin popup
  const [showModal, setShowModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false)

  //For home scroll
  const homeRef = useRef(null)
  const accomodationRef = useRef(null)
  const roommateRef = useRef(null)

    //Getting current window size
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  
 

  return (
    <StateContext.Provider
      value={{
        showModal,
        setShowModal,
        userModal, 
        setUserModal,
        homeRef, 
        accomodationRef,
        roommateRef,
        windowSize,
        user,
        setUser,
        profileModal, 
        setProfileModal
        
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
