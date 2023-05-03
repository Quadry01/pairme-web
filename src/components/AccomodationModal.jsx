import AccomodationInfo from "../components/AccomondationIfo/AccomodationInfo";
import { useStateContext } from "../context/contextProvider";




export const AccommodationModal = ({accommodateInfo}) => {

  const { accommodateModal, setAccommodateModal } = useStateContext();
  const handleClose = (e) => {
    if (e.target.id === "container") setAccommodateModal(!accommodateModal);
  };

  return (
    <div>
      {!accommodateModal ? (
        <div
          onClick={handleClose}
          id="container"
          className="inset-0 fixed bg-black z-50 bg-opacity-30"
        />
      ) : null}

      <div
        className={`z-100 ${
          accommodateModal
            ? "translate-y-full md:translate-y-0 md:hidden"
            : "translate-y-0"
        } ease-in-out duration-300 fixed h-[70%] w-full md:h-[92%] bottom-0 md:bottom-[4%] md:left-[30%]  md:w-[45%] rounded-t-2xl md:rounded-3xl bg-white overflow-y-auto overflow-x-hidden`}
      >
        <AccomodationInfo accommodateInfo={accommodateInfo} />
      </div>
    </div>
  );
};
