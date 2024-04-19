import Footer from "@/components/Shared/Footer/Footer";


const DashboardLayout = ({children}) => {
    return (
        <div>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;