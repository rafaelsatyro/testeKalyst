"use client"
import React, { useState } from 'react';
import './Checkout.css';
import leftarrow from '../../../public/seta.png';
import circle from '../../../public/bola.png';
import pix2 from '../../../public/popup.png';
import boleto from '../../../public/boleto.png';
import boleto2 from '../../../public/boleto2.png';
import pix from '../../../public/pix.png';


const Checkout: React.FC = () => {
   const [paymentMethod, setPaymentMethod]  = useState('card');
  return (
    <div className='main-container'>
        <div className='left-side-container'>
            <div className='first-line-left-side'>
                <img src={leftarrow.src} alt="seta" className='left-arrow' />
                <img src={circle.src} alt="bola" className='circle'/>
                <h5 className='left-side-title'>Cube.</h5>
            </div>
            <div className='second-line-left-side'>
                <h5 className='left-side-subtitle'>Cube.</h5>
            </div>
            <div className='third-line-left-side'>
                <h5 className='left-side-price'>$549,90</h5>
            </div>
            <div className='fourth-line-left-side'>
                <div className='grey-block-offer'></div>
                <div className='fourth-line-offer-container'>
                    <p className='fourth-line-offer-title'>Offer</p>
                    <p className='fourth-line-offer-subtitle'>Offer description</p>
                </div>
                <p className='fourth-line-offer-price'>R$ 19,00</p>
            </div>
            <div className='fifth-line-left-side'>
                <div className='grey-block-offer'></div>
                <div className='fourth-line-offer-container'>
                    <p className='fourth-line-offer-title'>Offer</p>
                    <p className='fourth-line-offer-subtitle'>Offer description</p>
                </div>
                <p className='fourth-line-offer-price'>R$ 19,00</p>
            </div>
            <div className='sixth-line-left-side'>
                <p className='sixth-line-subtotal'>Subtotal</p>
                <p className='sixth-line-price'>R$ 99,00</p>
            </div>
            <div className='sixth-line-left-side-hr-container'>
                <hr className='sixth-line-hr'/>
            </div>
            <div className='seventh-line-left-side'>
                <p className='seventh-line-left-side-promotion-code'>Add promotion code</p>
            </div>
            <div className='eighth-line-left-side'>
                <p className='eighth-line-left-side-sales-tax'>Sales tax (6.5%)</p>
                <p className='eight-line-left-side-price'>R$ 99,00</p>
            </div>
            <div className='sixth-line-left-side-hr-container'>
                <hr className='sixth-line-hr'/>
            </div>
            <div className='nine-line-left-side'>
                <p className='nine-line-left-side-total'>Total</p>
                <p className='nine-line-left-side-price'>R$ 99,00</p>
            </div>
            <div className='tenth-line-left-side'>
                <p className='tenth-line-left-side-powered'>Powered by <strong>Checkout</strong></p>
                <p className='tenth-line-side-terms'>Terms</p>
                <p className='tenth-line-side-contact'>Contact</p>
            </div>
        </div>

        <div className='right-side-container'>    
           <div className='first-line-right-side'>
           {paymentMethod === 'card' ? (
                <>
                    <button className='first-line-right-side-pix' onClick={() => setPaymentMethod('pix')}>
                        <img src={pix.src} alt="pix" className='first-line-right-side-pix-icon' /> Pix
                    </button>
                    <button className='first-line-right-side-boleto' onClick={() => setPaymentMethod('boleto')}>
                        <img src={boleto.src} alt="boleto" className='first-line-right-side-boleto-icon' />Boleto
                    </button>
                </>
            ) : paymentMethod === 'pix' ? (
                <>
                    <button className='first-line-right-side-pix' onClick={() => setPaymentMethod('card')}>
                        <img src={pix.src} alt="pix" className='first-line-right-side-pix-icon' /> Cartão de Crédito
                    </button>
                    <button className='first-line-right-side-boleto' onClick={() => setPaymentMethod('boleto')}>
                        <img src={boleto.src} alt="boleto" className='first-line-right-side-boleto-icon' />Boleto
                    </button>
                </>
            ) : (
                <>
                    <button className='first-line-right-side-pix' onClick={() => setPaymentMethod('pix')}>
                        <img src={pix.src} alt="pix" className='first-line-right-side-pix-icon' /> Pix
                    </button>
                    <button className='first-line-right-side-boleto' onClick={() => setPaymentMethod('card')}>
                        <img src={boleto.src} alt="boleto" className='first-line-right-side-boleto-icon' /> Cartão de Crédito
                    </button>
                </>
            )}
        </div>
           {paymentMethod === 'pix' ?
            <>
            <div className='second-line-right-side'>
                <hr className='second-line-right-side-hr' />
                <p className='second-line-right-side-pay-with-card'>Pix</p>
                <hr className='second-line-right-side-hr' />
            </div>
            <div className='third-line-right-side'>
               <img src={pix2.src} alt="popup" />
            </div>
            </>
            :
            (paymentMethod === 'boleto') ?
            <>
                <div className='second-line-right-side'>
                    <hr className='second-line-right-side-hr' />
                    <p className='second-line-right-side-pay-with-card'>Boleto</p>
                    <hr className='second-line-right-side-hr' />
                </div>
                <div className='third-line-right-side'>
                    <img src={boleto2.src} alt="popup" className='img-boleto-popup' />
                </div>
                <div className='second-line-right-side'>
                    <hr className='second-line-right-side-hr' />
                    <p className='second-line-right-side-pay-with-card'>Boleto</p>
                    <hr className='second-line-right-side-hr' />
                </div>
                <div className='boleto-line-right-side'>
                    <button className='button-imprimir'>Imprimir</button>
                    <button className='button-copiar'>Copiar</button>
                </div>
            </>
            :
            <>
            <div className='second-line-right-side'>
                <hr className='second-line-right-side-hr' />
                <p className='second-line-right-side-pay-with-card'>Or pay with card</p>
                <hr className='second-line-right-side-hr' />
            </div>
            <div className='third-line-right-side'>
                <p className='third-line-right-side-contact-title'>Contact information</p>
                <input type="text" className='third-line-right-side-email-input' placeholder='email.@example.com' />
                <input type="text" className='third-line-right-side-phone-input' placeholder='(00) 0 0000-0000' />
            </div>
            <div className='fourth-line-right-side'>
                <p className='fourth-line-right-side-contact-title'>Card information</p>
                <input type="text" className='fourth-line-right-side-card-input' placeholder='1234 1234 1234 1234' />
                <div className='fourth-line-right-side-inputs-row'>
                    <input type="text" className='fourth-line-right-side-month-and-year-input' placeholder='MM / YY' />
                    <input type="text" className='fourth-line-right-side-cvc-input' placeholder='CVC' />
                </div>
            </div>
            <div className='fifth-line-right-side'>
                <p className='fifth-line-right-side-contact-title'>Name on card</p>
                    <input type="text" className='fifth-line-right-side-name-on-card-input' />
            </div>
            <div className='sixth-line-right-side'>
                <p className='fifth-line-right-side-contact-title'>Installments</p>
                <select name="" id="" className='fifth-line-right-side-installments-select'>
                    <option value="">8x de $ 12,37</option>
                    <option value="">9x de $ 12,37</option>
                    <option value="">10x de $ 12,37</option>
                </select>
            </div>
            <div className='seventh-line-right-side'>
                <button className='seventh-line-right-side-button'>Pagar</button>
            </div>  
            <div className='mobile-terms-line'>
                <p className='powered-text-mobile'>Powered by <strong>Checkout</strong></p>
                <p className='terms-text-mobile'>Terms</p>
                <p className='contact-text-mobile'>Contact</p>
            </div>
            </>
            }
        </div>
    </div>
  );
}

export default Checkout;



