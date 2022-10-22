import React from 'react'
import CardOriginal from '../../components/card/cardOriginal'
import subscribe from '../../img/subscribe.png'
import homebanner from '../../img/homebanner.png'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import style from './style.module.css'
import img from '../../img/product-example.png'
import { BsPerson, BsBagCheck, BsSearch } from 'react-icons/bs'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

function Product() {
  const data = [
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Headphone'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Headphone'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Headphone'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Headphone'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Air Conditioner'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Air Conditioner'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Television'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Television'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Television'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Television'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Router'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Router'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Router'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Router'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Router'
    },
    {
      product_name: 'Sennheiser HD 25',
      price: 3000,
      rating: 4.9,
      image: '',
      type: 'Router'
    }
  ]
  return (
    <div className="App">
      <Header />
      <InputGroup className={style.parent}>
        <FormControl
          className={style.input_search}
          placeholder="Tap To Search For Something"
          aria-label="Tap To Search For Something"
          aria-describedby="basic-addon2"
        />
        <Button className={style.btn_search} id="button-addon2">
          <img src={BsSearch} alt="" />
        </Button>
        <div>
          <Button className={style.btn_w}>
            <img src={BsPerson} alt="" />
          </Button>
          <Button className={style.btn_w}>
            <img src={BsBagCheck} alt="" />
          </Button>
        </div>
      </InputGroup>
      <div className="container">
        <div className="row mb-5">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Headphone
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Air Conditioner
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Television
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
              >
                Router
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className="row">
              {data.map((v, k) => {
                if (v.type === 'Headphone') {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        product_name={v.product_name}
                        price={v.price}
                        rate={v.rating}
                        image={img}
                      />
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <div className="row">
              {data.map((v, k) => {
                if (v.type === 'Air Conditioner') {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        product_name={v.product_name}
                        price={v.price}
                        rate={v.rating}
                        image={img}
                      />
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <div className="row">
              {data.map((v, k) => {
                if (v.type === 'Television') {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        product_name={v.product_name}
                        price={v.price}
                        rate={v.rating}
                        image={img}
                      />
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabindex="0"
          >
            <div className="row">
              {data.map((v, k) => {
                if (v.type === 'Router') {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        product_name={v.product_name}
                        price={v.price}
                        rate={v.rating}
                        image={img}
                      />
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
