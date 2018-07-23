import Links from './Links'

export default (props) => (
    <div className="MobileMenu">
        <div className="MobileMenu-close">
            <i className="i-close" onClick={props.onClick}></i>
        </div>
        <Links/>
    </div>
)