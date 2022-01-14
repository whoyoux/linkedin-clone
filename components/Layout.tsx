import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
