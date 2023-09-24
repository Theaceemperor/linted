
import Link from "next/link";
import Layout from "./layout";
import { BtnField } from "./Buttons";

export default function MyCta() {

    return (
       <section className="my-5 px-2">
            <div className="flex justify-center items-center">
                <div className="bg-[url('/images/2.png')] bg-cover bg-center rounded-md flex flex-col items-center justify-center gap-5 shadow-lg h-[40vh] text-center text-red-600 px-2 py-5">
                    <h1 className="text-xl bg-black/50 text-rose-300/70 font-bold px-2 rounded-lg text-center py-1">Book our services, Anywhere in the world Today</h1>
                    <BtnField />
                </div>
            </div>
       </section>
    )
}


MyCta.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }