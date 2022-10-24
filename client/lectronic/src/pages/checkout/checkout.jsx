import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../../helpers/api'
import withAuth from '../../helpers/withAuth'
import { Button, Card, Form, Container } from 'react-bootstrap'
import style from './checkout.module.css'
import Header from '../../components/header/header'
import CardCart from '../../components/cart/comCart'
import Footer from '../../components/footer/footer'

function Checkout() {
  const [order, setOrder] = useState({})
  const [data, setData] = useState({})
  const params = useParams()

  const api = useApi()

  const newOrder = async () => {
    api
      .requests({
        method: 'POST',
        url: '/checkout',
        data: order
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getProduct = async () => {
    api
      .requests({
        method: 'GET',
        url: `/products/${params.id}`
      })
      .then((res) => {
        const { data } = res.data
        setOrder(data)
        setData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className={style.title}>
          <div className={style.text}>Checkout</div>
        </div>
        <div className={style.cardCart}>
          <div className={style.left}>
            <Card className={style.change}>
              <Card.Title className={style.title_deliv}>
                Delivery address
              </Card.Title>
              <div className={style.change_add}>
                <Form.Control
                  className={style.form}
                  name="address"
                  as="textarea"
                  placeholder="Enter Your Address"
                />
                <Button
                  className={style.but_change}
                  variant="outline-primary"
                  style={{ width: '40%', height: '40%' }}
                >
                  Change Address
                </Button>
              </div>
            </Card>
            <CardCart
              name={data.name}
              type={data.type}
              price={data.price}
              img={data.image}
            />
          </div>
          <div className={style.right}>
            <Card className={style.card_total}>
              <Card.Body className={style.cardBody}>
                <Card.Title className={style.total}>Total</Card.Title>
                <div className={style.price}>
                  <Card.Text className={style.title_price}>
                    {' '}
                    Item Price
                  </Card.Text>
                  <Card.Text className={style.cost_price}>
                    Rp {data.price}
                  </Card.Text>
                </div>
                <div className={style.dsc}>
                  <Card.Text className={style.title_dsc}> Discount</Card.Text>
                  <Card.Text className={style.cost_dsc}>
                    Rp {data.price}
                  </Card.Text>
                </div>
                <div>
                  <hr className={style.line} />
                </div>
                <div className={style.bill}>
                  <Card.Text className={style.title_bill}> Bill</Card.Text>
                  <Card.Text className={style.cost_bill}>
                    Rp {data.price}
                  </Card.Text>
                </div>
                <Button
                  onClick={newOrder}
                  className={style.but_checkout}
                  style={{ width: '97%' }}
                >
                  Pay Bills
                </Button>
                <Form.Select
                  className={style.but_payment}
                  style={{ width: '97%' }}
                >
                  <option value="" selected disabled hidden>
                    Choose Payment Method
                  </option>
                  <option value="Gopay">Gopay</option>
                  <option value="Ovo">OVO</option>
                  <option value="BCA">DANA</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Credit Card">Transfer Bank</option>
                </Form.Select>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default withAuth(Checkout)
