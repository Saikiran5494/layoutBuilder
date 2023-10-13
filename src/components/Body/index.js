// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <ul className="unordered-list">
                <li className="list">Item 1</li>
                <li className="list">Item 2</li>
                <li className="list">Item 3</li>
                <li className="list">Item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content-container">
              <h1 className="body-heading">Content</h1>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="body-heading">Right Navbar</h1>
              <div className="adds-container">
                <div className="adds">
                  <h1 className="add">Ad 1</h1>
                </div>
                <div className="adds">
                  <h1 className="add">Ad 2</h1>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
