import Footer from "@/components/footer/footer";
import Navigation from "@/components/navbar";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <>
      <Navigation/>
        {children}
      <Footer/>
    </>
   );
}
 
export default AuthLayout;