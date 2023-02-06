import React , {useState , useEffect} from 'react'
import Footer from './Footer'
import Loading from './Loading';
import Navbar from './Navbar'
import useIntro from '../hooks/useIntro'
// import  "../../dist/output.css"
const Layout = ({ children }) => {
 
  const [loading, setLoading] = useState();
  const firstLoad = useIntro()
  useEffect(() => {
    
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    
  }, []);


  if(loading && firstLoad){
    return(<Loading/>)
  }
  else {
  return (
    <div className="" >
      <Navbar />
      {/* <hr className='container mx-auto h-1 bg-darkBlue' /> */}
      <div className="container mx-auto h-[2.5px] scroll-smooth rounded-full bg-darkBlue "></div>

      {children}

      <Footer />

    </div>
  )
}
}


export default Layout