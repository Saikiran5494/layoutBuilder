// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNav = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNav = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="top-container">
          <h1 className="layout">Layout</h1>
          <div className="checkbox-group-container">
            <div className="checkbox-label-con ">
              <input
                checked={showContent}
                type="checkbox"
                id="content"
                className="input"
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>

            <div className="checkbox-label-con ">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                id="leftNavbar"
                className="input"
                onChange={onChangeLeftNav}
              />
              <label htmlFor="leftNavbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-label-con ">
              <input
                checked={showRightNavbar}
                type="checkbox"
                id="rightNavbar"
                className="input"
                onChange={onChangeRightNav}
              />
              <label htmlFor="rightNavbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
