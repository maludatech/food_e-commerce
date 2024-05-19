import "../styles/globals.css"
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Maluda Jollof",
  description: "Your Favorite Jollof Rice Resturant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className='main'>
            <div className='gradient'/>
          </div>
          <main className='app'>
            <Navbar/>
            {children}
            <Footer/>
          </main>
      </body>
    </html>
  )
}