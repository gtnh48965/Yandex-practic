import React from 'react';
import './Modal.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const Modal = (props) => {
    const { children, header, handleClickClose } = props;
    return (
        <>
            <section className={'modal-self'}>
                <header className='modal-self_header mt-10 mr-10 ml-10'>
                    <CloseIcon onClick={()=>handleClickClose()} type="primary" />
                    <p className="text text_type_main-large">
                        {header}
                    </p>
                </header>
                {header===''?
                    <main className={'modal-self_main mt-3'}>
                        <p className="text text_type_digits-large modal-self_main__order mb-3">034536</p>
                        <p className="text text_type_main-medium">
                            идентификатор заказа
                        </p>
                        <img className='mt-15 mb-15' src="./images/done.png" alt=""/>
                        <p className="modal-self_main__info text text_type_main-medium mb-1">
                            Ваш заказ начали готовить
                        </p>
                        <p className="mb-30 modal-self_main__info text text_type_main-medium text_color_inactive">
                            Дождитесь готовности на орбитальной станции
                        </p>
                    </main>
                    :
                    <main className={'modal-self_main mb-15'}>
                        <img src={children.image_large} alt=""/>
                        <p className="text text_type_main-medium mb-3 mt-3">
                            {children.name}
                        </p>
                        <div className='modal-self_main__list mt-3'>
                            <div className='modal-self_main__element'>
                                <p className="mb-1 text text_type_main-default text_color_inactive">
                                    Калории,ккал</p>
                                <p className="text text_type_digits-default text_color_inactive">
                                    {children.calories}</p>
                            </div>
                            <div className='modal-self_main__element'>
                                <p className="mb-1 text text_type_main-default text_color_inactive">
                                    Белки, г</p>
                                <p className="text text_type_digits-default text_color_inactive">
                                    {children.calories}</p>
                            </div>
                            <div className='modal-self_main__element'>
                                <p className="mb-1 text text_type_main-default text_color_inactive">
                                    Жиры, г</p>
                                <p className="text text_type_digits-default text_color_inactive">
                                    {children.calories}</p>
                            </div>
                            <div className='modal-self_main__element'>
                                <p className="mb-1 text text_type_main-default text_color_inactive">
                                    Углеводы, г</p>
                                <p className=" text text_type_digits-default text_color_inactive">
                                    {children.calories}</p>
                            </div>
                        </div>
                    </main>
                }

            </section>
        </>
    );
};

export default Modal;