import Wrapper from '../assets/wrappers/Navbar_xx'

const Navbar_xx = () => {
  return (
    <Wrapper>
      <header className='header'>
        <div
          className='header-row container'
          role='navigation'
          aria-label='Main'
        >
          <div className='header-left'>
            <div className='logo'>
              <h1>htchung_89</h1>
            </div>
          </div>
          <div className='header-right'>
            <ul className='main-menu'>
              <li className='menu-item'>
                <a href='#' className='active'>
                  Home
                </a>
              </li>

              <li className='menu-item mega-menu'>
                <a href='#'>Mega menu +</a>
                <div className='mega-menu-wrapper slideInUp'>
                  <div className='mega-menu-col'>
                    <h5>QUIZ1_XX</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>N1_xx</a>
                      </li>
                      <li>
                        <a href='#'>N2_xx</a>
                      </li>
                      <li>
                        <a href='#'>N3_xx</a>
                      </li>
                      <li>
                        <a href='#'>N4_xx</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>MIDTERM_XX</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>P1_xx</a>
                      </li>
                      <li>
                        <a href='#'>P2_xx</a>
                      </li>
                      <li>
                        <a href='#'>P3_xx</a>
                      </li>
                      <li>
                        <a href='#'>P4_xx</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>QUIZ_XX</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>BOOKPAGE_XX(NORMAL)</a>
                      </li>
                      <li>
                        <a href='/quiz2/q2_xx'>BOOKPAG2_(CONTEXT)</a>
                      </li>
                      <li>
                        <a href='#'>BOOKPAGE_XX(CONTEXT)</a>
                      </li>
                      <li>
                        <a href='#'>BOOKPAGE_XX(NORMAL)</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>FINAL_XX</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>S1_XX:MENU BASIC</a>
                      </li>
                      <li>
                        <a href='#'>S1_XX:MENU FILTER</a>
                      </li>
                      <li>
                        <a href='#'>S1_XX:MENU REFINE</a>
                      </li>
                      <li>
                        <a href='#'>S1_XX:MENU CONTEXT</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <a href='#'>Midterm +</a>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <a href='/mid_xx/p1_xx'>P1_xx</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/mid_xx/p2_xx'>P2_xx</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/mid_xx/p3_xx'>P3_xx</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/mid_xx/p4_xx'>P4_xx</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item dropdown'>
                <a href='#'>Quiz2 +</a>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <a href='/quiz2/q1_xx'>BookPage1_xx (normal)</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/quiz2/q2_xx'>BookPage2_xx (context)</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/quiz2/q3_xx'>Grocery_xx (context)</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/quiz2/q4_xx'>BlogJson_xx (normal)</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <a href='#'>Final_68 +</a>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <a href='/final/s1_68'>S1_68</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/final/s2_68'>S2_68</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/final/s3_68'>S3_68</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/final/s4_68'>S4_68</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <a href='#'>Contact</a>
              </li>
            </ul>
            <a
              href='#'
              id='hamburger-icon'
              className='mobile-toggler'
              aria-label='Mobile Menu'
            >
              <i className='fas fa-bars'></i>
            </a>
          </div>
          <div id='mobile-menu' className='mobile-menu hidden slideInDown'>
            <ul>
              <li className='menu-item'>
                <a href='#' className='active'>
                  Home
                </a>
              </li>

              <li className='menu-item mega-menu'>
                <a href='#'>Mega menu +</a>
                <div className='mega-menu-wrapper'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>Menu block item 1</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 2</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 3</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 4</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 5</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>Menu block item 1</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 2</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 3</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 4</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 5</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>Menu block item 1</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 2</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 3</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 4</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 5</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>Menu block item 1</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 2</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 3</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 4</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 5</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <a href='#'>Services +</a>
                <div className='sub-menu-wrapper'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <a href='#'>Service 1</a>
                    </li>
                    <li className='menu-item'>
                      <a href='#'>Service 2</a>
                    </li>
                    <li className='menu-item'>
                      <a href='#'>Service 3</a>
                    </li>
                    <li className='menu-item'>
                      <a href='#'>Service 4</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <a href='#'>Blog</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  )
}

export default Navbar_xx
