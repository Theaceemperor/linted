
import Link from "next/link";
import { FaShoppingCart } from 'react-icons/fa';
import { SiHomebridge } from 'react-icons/si';
import { RiContactsFill } from 'react-icons/ri';
import { SubscribePop } from "./Buttons";
import { GiSpades } from "react-icons/gi";
import { Button } from "@mui/material";


export function ShoppingCartLink({productPrice,productName,style}) {

    return (
        <Link href={
            {
                pathname:'/[carts]',
                query: { carts: 'cart', productname:productName, productprice:productPrice }
            }
        }>
            <FaShoppingCart className={`text-xl text-black ${style}`}/>
        </Link>
    )
}

export function HomePageLink({style}) {

    return (
        <Link href={'/'}>
            <SiHomebridge className={`text-2xl text-black ${style}`}/>
        </Link>
    )
} 

export function ContactPageLink({style}) {

    return (
        <Link href={'/contact'}>
            <RiContactsFill className={`text-2xl text-black ${style}`}/>
        </Link>
    )
} 

export function SubscribePageLink({style}) {

    return (
        <SubscribePop />
    )
} 

export function PromoLink({color}) {

    return (
        <div className="flex items-center justify-center px-1 my-5">
            <Button 
            style={{
                background:'black',color:'pink'
            }}
            href={"https://spadeshub.vercel.app/web-development/dashboard"}
            >
                <i className={`text-sm flex items-center justify-center px-1${color}`}>Wedsite developed by s<GiSpades />des</i>
            </Button>
        </div>
    )
}
