const Btn = (props) => (
        <div className="Btn">
            <a href={`/${props.url}`} className={`Btn-link ${props.btnModifier}`}>
            {props.text}
            </a>
        </div>
       
)

export default Btn

