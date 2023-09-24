
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { ShoppingCartLink } from "./MyLinks";


export default function ProductPage() {

    const Prices = ['5','10', '20'];
    const stock = ['In stock'];

    const options = [Prices,stock];

    const [productPrices,setproductPrices] = React.useState(Prices);
    const [MyStock,setStock] = React.useState(stock);
    
    return (
        <section className="flex w-full flex-col gap-2 justify-center items-center lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 lg:px-2 md:px-2 my-5">
            {
                productPrices.map((item,index) => (
                    <article key={index} className="flex flex-col gap-2 p-2 items-center justify-center rounded-md border-2 border-red-300/40">
                        {
                            MyStock.map((stocks,stockIndex) => (
                                <div key={stockIndex} className="flex items-center flex-col gap-1">
                                    <div className="w-[200px] rounded-full">
                                        <Image 
                                        alt="product image"
                                        width={957}
                                        height={652}
                                        className="w-full h-auto"
                                        src={"/images/2.png"}/>
                                    </div>
                                    <div className="flex flex-row gap-3 text-sm">
                                        <ul className="font-bold">
                                            <li>Product name: </li>
                                            <li>Product price: </li>
                                            <li>Availability: </li>
                                            <li>Description: </li>
                                        </ul>
                                        
                                        <ul>
                                            <li>Lint Remover</li>
                                            <li>${item}</li>
                                            <li>{stocks}</li>
                                            <li>3 rollers are <br /> in a $5 pack</li>
                                        </ul>
                                    </div>
                                    <ShoppingCartLink 
                                    productName={`Lint Remover`}
                                    productPrice={item}/>
                                </div>
                            ))
                        }
                    </article>
                ))
            }
        </section>
    )
}