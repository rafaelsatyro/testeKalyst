import React from 'react';
import './Checkout.css';
import leftarrow from '../../../public/seta.png';
import circle from '../../../public/bola.png'
import boleto from '../../../public/boleto.png'
import pix from '../../../public/pix.png';

const Checkout: React.FC = () => {
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
                <button className='first-line-right-side-pix'><img src={pix.src} alt="pix" className='first-line-right-side-pix-icon'/>  Pix</button>
                <button className='first-line-right-side-boleto'><img src={boleto.src} alt="boleto" className='first-line-right-side-boleto-icon' />Boleto</button>
           </div>
            <div className='second-line-right-side'>
                <hr className='second-line-right-side-hr'/>
                <p className='second-line-right-side-pay-with-card'>Or pay with card</p>
                <hr className='second-line-right-side-hr'/>
            </div>
            <div className='third-line-right-side'>
                <p className='third-line-right-side-contact-title'>Contact information</p>
                <input type="text" className='third-line-right-side-email-input' placeholder='email.@example.com'/>
                <input type="text" className='third-line-right-side-phone-input' placeholder='(00) 0 0000-0000'/>
            </div>
            <div className='fourth-line-right-side'>
                <p className='fourth-line-right-side-contact-title'>Card information</p>
                <input type="text" className='fourth-line-right-side-card-input' placeholder='1234 1234 1234 1234'/>
                <div className='fourth-line-right-side-inputs-row'>
                <input type="text" className='fourth-line-right-side-month-and-year-input' placeholder='MM / YY'/>
                <input type="text" className='fourth-line-right-side-cvc-input' placeholder='CVC'/>
                </div>
            </div>
            <div className='fifth-line-right-side'>
                <p className='fifth-line-right-side-contact-title'>Name on card</p>
                <input type="text" className='fifth-line-right-side-name-on-card-input'/>
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
            

        </div>
    </div>
     /*
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
      Lado Esquerdo - Sumário do Pedido 
      <div className="flex-1 flex flex-col justify-between p-8 bg-white">
        <div className='pl-28 pr-28'>
            <div className="flex items-center pt-14 gap-2.5">
               
                <h1 className="text-4xl font-bold ">Cube.</h1>
            </div>
          <div className="flex flex-col flex pt-16 pl-8">
            <p className="text-3xl font-bold text-slate-300 font-light">Cube.</p>
            <p className="text-4xl font-bold pt-2">$549,90</p>
          </div>

          {/* Lista de ofertas 
          <div className="space-y-2 pt-16">
            <div className="flex items-center pl-20 ">
             
                <div className='flex flex-col pr-52'> 
                    <p className="text-gray-600">Offer</p>
                    <p className="text-gray-600">Offer Description</p>
                </div>
                <p>RS 19,00</p>
            </div>
          </div>

          <div className="space-y-2 pt-16">
            <div className="flex items-center pl-20 ">
             
                <div className='flex flex-col pr-52'> 
                    <p className="text-gray-600">Offer</p>
                    <p className="text-gray-600">Offer Description</p>
                </div>
                <p>RS 19,00</p>
            </div>
          </div>

          <div className='flex justify-between pr-32 pl-20 pt-14 '>
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-600">R$ 38,00</p>
          </div>
          <div className='pr-32 pl-20 pt-4' >
             <hr />
          </div>

          <div className='flex justify-between pr-32 pl-20 pt-14 '>
                <p className="text-gray-600">Sales tax(6.5%)</p>
                <p className="text-gray-600">R$ 38,00</p>
          </div>
          <div className='pr-32 pl-20 pt-4' >
             <hr />
          </div>

          <div className='flex justify-between pr-32 pl-20 pt-10 '>
                <p className="text-2xl font-bold">Total</p>
                <p className="text-2xl font-bold">R$ 38,00</p>
          </div>
        </div>
    </div>
*/
    
      /* Lado Direito - Detalhes do Pagamento 
      <div className="flex-1 bg-gray-50 p-8">
        <div className="flex flex-col pt-14">
          <button className="mb-6 w-full bg-black text-white py-3 px-4 rounded-xl">
            Pix
          </button>
          <div className="border-t pt-6">
            <p className="text-lg  mb-4 text-gray-600">Contact information</p>
            <input className="form-input mb-4 p-2 border w-full rounded-xl" placeholder="email@example.com" />
            <input className="form-input mb-4 p-2 border w-full rounded-xl" placeholder="(00) 0 0000-0000" />
            <p className="text-lg  mb-4 text-gray-600">Card information</p>
            <input className="form-input mb-4 p-2 border w-full rounded-xl" placeholder="1234 1234 1234 1234" />
            <div className="flex space-x-2">
              <input className="form-input mb-4 p-2 border flex-1 rounded-xl" placeholder="MM / YY" />
              <input className="form-input mb-4 p-2 border flex-1 rounded-xl" placeholder="CVC" />
            </div>
            <input className="form-input mb-4 p-2 border w-full rounded-xl" placeholder="Name on card" />
            <select className="form-select mb-6 p-2 border w-full rounded-xl">
              <option className='text-gray-600'>Installment</option>
              {/* Opções de parcelamento
            </select>
            <button className="w-full bg-black text-white py-3 px-4 rounded-xl">Pagar</button>
          </div>
        </div>
      </div>
    </div>*/
  );
}

export default Checkout;
