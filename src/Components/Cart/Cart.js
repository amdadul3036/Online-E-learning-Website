import React from 'react';

const Cart = (props) => {
    const course = props.cart;
    // console.log(course)
    const total = course.reduce((total, price) => total + price.price , 0);
    const totalPrice = Number(total).toFixed(2);
    return (
        <div className="text-center bg-dark text-warning p-1">
            <h2 className="text-warning">CART</h2>
            <hr className="bg-danger"/>
            <h5>Enrolled Courses: <span className="text-white">{course.length}</span></h5>
            {
                course.map(course => 
                <div className="d-flex">
                    <p className="mr-auto p-2">{course.title}</p>
                    <h6 className="text-white p-2">${course.price}</h6>
                </div>)
            }
            <hr className="bg-danger"/>
            <div className="d-flex">
                <h4 className="mr-auto p-2">Total :</h4>
                <h6 className="text-white p-2">${totalPrice}</h6>
            </div>
        </div>
    );
};

export default Cart;