
import { createContext, useContext, useState, useRef, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
  //setUp user
  const [userStatus, setUserStatus] = useState('findingRoommate')
  const [user, setUser] = useState(null)
  //displaying singin popup
  const [showModal, setShowModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [hideNavItem, setHideNavItem] = useState(false);
  const [roommateModal, setRoommateModal] = useState(true);
  const [accommodateModal, setAccommodateModal] = useState(true)

  //For home scroll
  const homeRef = useRef(null)
  const accomodationRef = useRef(null)
  const roommateRef = useRef(null)

  //toast coming soon

  const showToastMessage = () => {
    toast.info('Feature Coming Soon!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose : 1000,
        hideProgressBar: true
    });
};

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
        showToastMessage,
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
        setProfileModal,
        userStatus, 
        setUserStatus,
        logoutModal, 
        setLogoutModal,
        hideNavItem,
        setHideNavItem,
        setRoommateModal, 
        roommateModal,
        accommodateModal, 
        setAccommodateModal
        
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
