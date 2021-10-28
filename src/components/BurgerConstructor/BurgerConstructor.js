import "./BurgerConstructor.css"
import React, {useState} from "react";
import {Button,DragIcon, ConstructorElement,CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ModalOverlay from "../Modal/ModalOverlay";

const BurgerConstructor = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    };
    const handleClickClose = () => {
        setOpen(false)
    };

    return (
        <section className='right-section'>
            <div className='d-flex flex-column align-items-end' style={{  gap: '16px' }}>
                <div className='pr-4'>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                    />
                </div>
                <div className='ingredients_list' style={{  gap: '16px' }} >
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='m-2'>
                            <DragIcon type="primary" />
                        </span>
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                        />
                    </div>
                </div>
                <div className='pr-4'>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                    />
                </div>
            </div>
            <footer>
                <div className='button'>
                </div>
                <div className='summ_price'>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon style={{width: '33px'}} type="primary" />
                </div>
                <div className='button'>
                    <Button onClick={()=> handleClickOpen()} type="primary" size="large">
                        Оформить заказ
                    </Button>
                    {open&& <ModalOverlay handleClickClose={handleClickClose}  header={''}/>}
                </div>
            </footer>
        </section>
    )
};
export default BurgerConstructor;

BurgerConstructor.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
}