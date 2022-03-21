
import Header from '../sections/template-parts/header'

export default function Layout({ children }) {
    
    return(

  <>
    <Header/>
      
    {children}
</>
    );
}
