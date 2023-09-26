
import React from 'react';
import { SiHomebridge } from 'react-icons/si';
import PopupState, { bindPopover, bindTrigger} from 'material-ui-popup-state';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { Button } from '@mui/material';
import { RiContactsFill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { MdNotificationAdd } from 'react-icons/md';
import Link from 'next/link';
import { ContactPageLink, HomePageLink, ShoppingCartLink, SubscribePageLink } from './MyLinks';
import { SubscribeForm } from './subscribeBox';

export function HeroBtn() {

    return (
        <div>
            
        </div>
    )
}

export function BtnField() {

  return (
    <blockquote className="flex gap-5 text-black text-sm sm:text-lg">
        <Link 
        href={"/contact"}
        className='border-y py-1 px-2 border-red-600/50 bg-red-300/30 rounded-lg hover:border-transparent font-bold flex gap-1 items-center justify-center'
        >Contact Us
          <RiContactsFill />
        </Link>
        <Link 
        href={
          {
              pathname:'/[carts]',
              query: { carts: 'cart', productname: 'Lint Remover', productprice: '2' }
          }
      }
        className='border-y py-1 px-2 border-red-600/50 bg-red-300/30 rounded-lg hover:border-transparent font-bold flex gap-1 items-center justify-center'>
          Shop Now<FaShoppingCart />
        </Link>
    </blockquote>
  )
}

export function MenuPop() {
    return (
      <section className='top-0 left-0 absolute max-w-[100px]'>
        <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <SiHomebridge 
            className='text-xl text-red-300/70 p-0.5 rounded-full bg-black visible sm:hidden top-1 left-1 fixed' {...bindTrigger(popupState)}/>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              // style={
              //   { width:'100px',background:'black'}
              // }
            >
                <article className="visible sm:hidden">
                    <nav className="top-0 left-0 w-[100px] fixed z-50 bg-white text-black p-5 border-l border-red-300/60">
                        <ul className="flex flex-col gap-5 md:flex-row lg:flex-row font-bold z-50 items-center lg:justify-evenly py-5">
                            <li><HomePageLink /></li>
                            <li><ContactPageLink /></li>
                            <li><ShoppingCartLink productName={'Lint Remover'} productPrice={'10'}/></li>
                            <li><SubscribePageLink /></li>
                        </ul>
                    </nav>
                </article>
            </Popover>
          </div>
        )}
      </PopupState>
      </section>
    );
  }

  export function SubscribePop() {
    return (
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <MdNotificationAdd className='text-2xl text-black' {...bindTrigger(popupState)} />
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <SubscribeForm />
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }

  export function CheckoutButton({productName,quantity,totalPrice,unitPrice}) {

    return (
      <Button style={
        {background: 'black', marginTop:'5px', color:'pink', marginBottom:'5px'}
      }
      >
        <Link href={
        {
          pathname:'/checkout/[checkout]',
          query: { checkout: 'cart', productname:productName, quantity:quantity, unitprice:unitPrice, totalprice:totalPrice }
      }
      }
       >Checkout</Link></Button>
    )
  }