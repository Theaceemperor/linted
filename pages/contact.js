import MyCta from "@/components/Cta";
import ContactForm from "@/components/contactForm";
import Blogcontent from "@/components/faq";
import MyH1 from "@/components/text";


export default function ContactUs() {

    return (
        <>
            <main>
                <div className="flex items-center justify-center">
                    <MyH1 text={'Contact Us'}
                    />
                </div>
                <ContactForm />

                <div className="flex flex-col items-center justify-center">
                    <h3>FAQ</h3>
                    <Blogcontent header={'How to become a distributor'}
                    >
                        <span>
                            You can easily contact us to become a distributor/affiliate. If your request is approved we well contact you
                        </span>
                    </Blogcontent>
                    <Blogcontent header={'How to order'}
                    >
                        <span>
                            You can easily contact us to become a distributor/affiliate. If your request is approved we well contact you
                        </span>
                    </Blogcontent>
                    <Blogcontent header={'How to use a Lint remover'}
                    >
                        <span>
                            You can easily contact us to become a distributor/affiliate. If your request is approved we well contact you
                        </span>
                    </Blogcontent>
                </div>

                <MyCta />
            </main>
        </>
    )
}