import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header className="header">
          <h1 className="head1">Vegetables</h1>
          <nav className="icon">
            <nav className="ic-fb">
              <img src="vegetables_picture/btn_facebook.png" alt="facebook" />
            </nav>
            <nav className="ic-ig">
              <img src="vegetables_picture/btn_instagram.png" alt="instagram" />
            </nav>
          </nav>
          <div className="line">|</div>
          <a href="#" className="btn-item-lo">LOGIN</a>
          <a href="#" className="btn-item-jo">JOIN</a>
        </header>

        <ul className="nav-list">
          <li className="nav-list-item nav-home">
            <a href="#" className="nav-list-item-link">Home</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-list-item-link">About us</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-list-item-link">vegetables</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-list-item-link">Online</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-list-item-link">Contact</a>
          </li>
        </ul>


        <img className="pumpkin" src="vegetables_picture/img_main_pumpkin.png" alt="pumpkin" />
        <article>


          <div className="head2">
            <div className="text1">
              <h5>Vegetables</h5>
            </div>
            <div className="text2">
              <h5>Contact</h5>
            </div>
          </div>

          <div className="article2">
            <div className="picture-all">
              <picture className="picuture"><img src="vegetables_picture/img_vegetables_carrot.png" alt="carrot" />
              </picture>
              <picture className="picuture"><img src="vegetables_picture/img_vegetables_corn.png" alt="corn" /></picture>
              <picture className="picuture"><img src="vegetables_picture/img_vegetables_pepper.png" alt="pepper" />
              </picture>
            </div>

            <aside className="aside">
              <div className="For">For any questions or suggestions about Vegetables, Vegetables Club or your online order
                you can contact Vegetables Customer Service by phone, email or post and we’ll be happy to help.
              </div>
              <hr />
              <div className="E-mail">
                E-mail : Vegetables@aaabbccc.com
                <br />
                PHONE : +886-123-456-789
              </div>
            </aside>
          </div>
        </article>
      </div>
      <footer className="foot">
        <p>Copyrights 2017 Vegetables cise / Design by Vegetables</p>
      </footer>
    </>
  )
}

export default App
