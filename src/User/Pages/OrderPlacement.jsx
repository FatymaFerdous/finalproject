import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext/context';
import { useState, useContext } from 'react';
import Cart from './Cart';
import axios from 'axios';


export default function OrderPlacement() {

  const { cart_state, cart_dispatch } = useContext(CartContext)

  const [isLoading, setIsLoading] = useState(false);


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")

  const [trackingId, setTrackingId] = useState("")
  const [status, setStatus] = useState([])

  const bill = cart_state.cart.reduce((accumulator, product) => accumulator + (product.price * product.productQuantity), 0)


  const checkOut = (e) => {

    e.preventDefault()

    const payload = {
      items: cart_state.cart,
      customerName: name,
      customerEmail: email,
      customerContact: contact,
      customerAddress: address,
      total : total
    }
    console.log(payload)
    setIsLoading(true);

    axios.post('http://localhost:3000/api/create-order', payload)
      .then((json) => {
        console.log(json.data)
        setIsLoading(false);
        if (json.data.message == 'Order Placed Successfully') {
          alert("Order placed Successfully");
          setName("")
          setEmail("")
          setContact("")
          setAddress("")

          cart_dispatch({
            type: 'CLEAR_CART'
          })
        }
      })
      .catch((err) => console.log(err))
  }


  const getStatus = (e) => {

    e.preventDefault()

    axios.get(`http://localhost:2800/api/order-by-id/${trackingId}`)
      .then((json) => {
        console.log(json.data.order.Status)
        if (json.data.order.Status == 'Delivered') {
          alert("Status: Delivered")
        }
        if (json.data.order.Status == 'pending') {
          alert("Status: Pending")
        }

        setTrackingId("")
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Tracking Id")

      })

  }

  return (
    <>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-7" style={{ color: "#000268" }}>
            <h2>Getting Your Order</h2>
            <hr className='w-75' />
            <h4 >Shipping Information</h4>
            <div className='FormControl'>


              <Form onSubmit={checkOut}>
                <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1" >
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control value={name} onChange={(e) => setName(e.target.value)} type='text' />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Complete Address</Form.Label>
                  <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} as="textarea" rows={2} type='text' />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Phone no</Form.Label>
                  <Form.Control value={contact} onChange={(e) => setContact(e.target.value)} type='text' />
                </Form.Group>
                <div>You will be get an email on Successfully placed order</div>
                <div className="d-flex">
                  <Button
                    className='w-50 mt-3'
                    variant="secondary"
                    type="submit"
                  >Place Order</Button>
                  <span>
                    {
                      isLoading ? (<OrderLoader />) : (true)
                    }
                  </span>
                </div>
              </Form>


              <Form onSubmit={getStatus} >
                <Form.Group className="mb-3 w-50 mt-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Tracking ID:</Form.Label>
                  <Form.Control value={trackingId} onChange={(e) => setTrackingId(e.target.value)} type='text' />
                </Form.Group>

                <Button
                  className='w-50 mt-3'
                  variant="secondary"
                  type="submit"
                >Check!</Button>


              </Form>

              <div>

              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h2>Order Summary</h2>
            <hr className="w-75" />

            <div className="shadow-lg p-2 rounded order-summary" >
              <Cart data={cart_state.cart} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}