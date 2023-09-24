
import Link from "next/link";
import { RiContactsFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

export default function Footer() {

    return (
        <section className="px-2 py-1 bottom-0 ease-in duration-300">
            <div className="border-y border-black rounded-lg px-2 bg-red-300/60 font-bold">
                <ul className="grid grid-cols-2 text-center lg:flex md:flex text-sm lg:justify-between md:justify-between items-center">
                    <li>
                    <Link 
                    href={"/[cart]?productPrice=10&productName=Lint Remover"}
                    className='py-1 px-2 font-bold flex gap-1 items-center justify-center'
                    >Order now
                        <FaShoppingCart />
                    </Link>
                    </li>
                    <li>
                    <Link 
                    href={"/contact"}
                    className='py-1 px-2 font-bold flex gap-1 items-center justify-center'
                    >Contact Us
                        <RiContactsFill />
                    </Link>
                    </li>
                    <li>
                        <Link href={"#"}>Returns & Refund</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Terms of use</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}