import { InputGroup, FormControl, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import style from './cart.module.css'
import cart from './cart.png'
import person from './person.png'
import butSearch from './search.png'
import Header from '../../components/header/header'
import CardCart from '../../components/cart/comCart'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'

function Cart() {
  const navigate = useNavigate()
  const data = [
    {
      name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Headphone'
    },
    {
      name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Headphone'
    },
    {
      name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Headphone'
    }
  ]

  return (
    <>
      <Header />
      <div className="head">
        <InputGroup className={style.parent}>
          <FormControl
            className={style.input_search}
            placeholder="Tap To Search For Something"
            aria-label="Tap To Search For Something"
            aria-describedby="basic-addon2"
          />
          <Button className={style.btn_search} id="button-addon2">
            <img src={butSearch} alt="" />
          </Button>
          <div>
            <Button className={style.btn_w}>
              <img src={person} alt="" />
            </Button>
            <Button className={style.btn_w}>
              <img src={cart} alt="" />
            </Button>
          </div>
        </InputGroup>
        <div className={style.content}>
          <div className={style.title}>
            <div className={style.text}>Cart</div>
            <div className={style.sel}>
              <FormCheckInput className={style.select} inline type="checkbox" />
              <div className={style.text2}>Select All</div>
            </div>
          </div>
          <div className={style.cardCart}>
            <div>
              {data.map((v, k) => {
                return (
                  <CardCart
                    name={v.name}
                    type={v.type}
                    price={v.price}
                    img={v.image}
                  />
                )
              })}
            </div>
            <div>
              <Card className={style.card_total}>
                <Card.Body className={style.cardBody}>
                  <Card.Title className={style.total}>Total</Card.Title>
                  <div className={style.price}>
                    <Card.Text className={style.title_price}>
                      {' '}
                      Item Price
                    </Card.Text>
                    <Card.Text className={style.cost_price}> $0</Card.Text>
                  </div>
                  <div className={style.dsc}>
                    <Card.Text className={style.title_dsc}> Discount</Card.Text>
                    <Card.Text className={style.cost_dsc}>
                      $ {data.price}
                    </Card.Text>
                  </div>
                  <div>
                    <hr className={style.line} />
                  </div>
                  <div className={style.bill}>
                    <Card.Text className={style.title_bill}> Bill</Card.Text>
                    <Card.Text className={style.cost_bill}>
                      $ {data.price}
                    </Card.Text>
                  </div>
                  <Button
                    onClick={() => navigate(`/checkout`)}
                    className={style.but_checkout}
                    style={{ width: '97%' }}
                  >
                    Check Out
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
