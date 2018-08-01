const Btn = (props) => (
        <span className="Btn">
            <a href={`${props.url}`} className={`Btn-link Btn${props.btnModifier}`}>
            {props.text}
            </a>
        </span>

)

export default Btn
