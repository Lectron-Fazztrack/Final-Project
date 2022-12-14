import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./style.module.css";
import { BsBagCheck, BsSearch } from "react-icons/bs";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import CardHistory from "../../components/card/cardHistory";
import useApi from "../../helpers/api";
import "./style.css";

function History() {
  const [history, setHistory] = useState([]);
  const api = useApi();

  const getHistory = () => {
    api
      .req({
        method: "GET",
        url: `/histories`,
      })
      .then((res) => {
        const { data } = res.data;
        setHistory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="App">
      {console.log(history)}
      <Header />
      <InputGroup className={style.parent}>
        <FormControl
          className={style.input_search}
          placeholder="Tap To Search For Something"
          aria-label="Tap To Search For Something"
          aria-describedby="basic-addon2"
        />
        <Button className={style.btn_search} id="button-addon2">
          <BsSearch className={style.bs_icon} />
        </Button>
        <div>
          <Button className={style.btn_w}>
            <BsBagCheck className={style.bs_icon} />
          </Button>
        </div>
      </InputGroup>
      <div className="container">
        <div className="row">
          <div className="history-title">Shopping History</div>
        </div>
        <div className="row mb-5 mt-5">
          {history.map((v, k) => {
            return (
              <CardHistory
                id={v.id}
                name={v.Products.name}
                price={v.Products.price}
                type={v.Products.type}
                image={v.Products.image}
                total={v.Products.price}
              />
            );
          })}
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
  );
}

export default History;
