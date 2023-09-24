
import React from "react";
import { ContactPageLink, HomePageLink, ShoppingCartLink, SubscribePageLink } from "./MyLinks";
import { MenuPop } from "./Buttons";

export default function NavigationBar() {

    return (
        <section>
            <MenuPop />
            <article className="invisible sm:visible">
                <nav className="top-0 left-0 right-0 fixed z-50 bg-red-300/60 text-black p-5">
                    <ul className="flex flex-col md:flex-row lg:flex-row font-bold z-50 items-center lg:justify-evenly">
                        <li><HomePageLink /></li>
                        <li><ContactPageLink /></li>
                        <li><ShoppingCartLink productName={'Lint Remover'} productPrice={'10'}/></li>
                        <li><SubscribePageLink /></li>
                    </ul>
                </nav>
            </article>
            <article className="bg-[url('/images/2.png')] bg-cover bg-center px-2 sm:p-0 h-[50vh] md:h-[80vh] lg:h-[80vh] flex items-center justify-center mb-5">

                <div className='flex flex-col items-center justify-center text-center gap-2'>
                <h1 className='text-2xl fonst-bold border-y-2 border-red-500/60 py-1 px-2 rounded-lg sm:rounded-[0]'>Lint/dust removers just for you!</h1>
                <ShoppingCartLink 
                productName={'Lint Remover'}
                productPrice={'2'}
                />
                </div>
            </article>
        </section>
    )
}

