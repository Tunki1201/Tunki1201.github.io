import React, {useState} from 'react';
import {css} from "@emotion/css";
import {Row} from "antd";
import {InView} from "react-intersection-observer";
import {Bounce} from "react-reveal";
import '../styles/contact.css';

function Contact() {
  const [show, setShow] = useState(false);

  const parallax = css`
    min-height: 512px;
    padding: 32px;
    background-color: rgba(0,0,0,0.5);
    background-image: url('/assets/images/contact-parallax.jpg');
    background-size: cover;
    background-blend-mode: darken;
  `;

  const title2 = css`
    font-family: Arial, serif;
    font-size: 8vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding-top: 20px;
    text-align: center;
    color: white;
  `;

  return (
    <InView onChange={inView => setShow(inView)}>
      <div className={parallax} id={'contact'}>
        <Row style={{minHeight:512}}>
          {
              show && (
                <Bounce>
                  <h2 className={title2}>CONTACT ME: <a href='https://www.linkedin.com/in/Tunki1120@gmail.com'target={'_blank'} rel="noreferrer">Tunki1201@gmail.com</a></h2>
                </Bounce>
              )
            }
        </Row>
      </div>
    </InView>
  )
}

export default Contact;
