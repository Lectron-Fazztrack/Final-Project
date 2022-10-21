import React from 'react'
import logo from './logoFooter.png'
import { Container } from 'react-bootstrap'
import { Foot, Content } from '../style/footer'

function Footer() {
  return (
    <>
      <Foot>
        <Container>
          <Content>
            <div>
              <img
                alt=""
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              <p>
                {' '}
                <br />
                91 Spring Dr. Hudsonville, MI 49426
              </p>
              <hr /> <br />
            </div>
            <ul>
              {' '}
              How it Works
              <li>Select Product</li>
              <li>Make Payment</li>
              <li>Receive Product</li>
            </ul>
            <ul>
              {' '}
              Product
              <li>Headphone</li>
              <li>Air Conditioner</li>
              <li>Router</li>
              <li>Television</li>
            </ul>
            <ul>
              {' '}
              Help
              <li>About</li>
              <li>Contact Us</li>
              <li>Download App</li>
              <li>FAQs</li>
            </ul>
          </Content>
        </Container>
      </Foot>
    </>
  )
}

export default Footer
