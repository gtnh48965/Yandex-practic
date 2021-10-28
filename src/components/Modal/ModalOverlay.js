import React, {useEffect,useCallback} from 'react';
import ReactDOM from "react-dom";
import './ModalOverlay.css';
import Modal from "./Modal";

const modalRoot = document.getElementById("react-modals")

const ModalOverlay = (props) => {
    const {children,handleClickClose, header} = props
    const listen = useCallback((event) => {
        if (event.defaultPrevented) {
            return;
        }
        if (event.key === 'Esc' || event.key === 'Escape') {
            handleClickClose()
        }
    },[handleClickClose])

    useEffect(()=>{
        // Устанавливаем слушатель события при монтировании
        document.addEventListener("keydown", (event)=> listen(event));
        // Сбрасываем слушатель события при удалении компонента из DOM
        return () => {
            document.removeEventListener("keydown", (event)=> listen(event));
        }
    }, [listen])
    return ReactDOM.createPortal(
        <>
            <div onClick={
                (event) =>
                    (event.target.classList.value === ('ModalOverlay'))?
                        handleClickClose()
                        :null
                } className={'ModalOverlay'}>
                <Modal children={children} handleClickClose={handleClickClose} header={header}  />
            </div>
        </>
        ,
        modalRoot
    );
};

export default ModalOverlay;