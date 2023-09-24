import NavigationBar from "./NavBar";
import Footer from "./Footer";
import { Header } from "./Meta";
import { AdsNotification } from "./ads";
import { PromoLink } from "./MyLinks";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <NavigationBar />
            <AdsNotification alertTitle={"Use Spades Dev!"}>
                <span>Did you know with just $150 you could get a professional website built with spades, and as fast as possible</span>
            </AdsNotification>
                <main>{children}</main>
            <PromoLink />
            <Footer />
        </>
    )
}