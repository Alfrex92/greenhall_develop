const Btn = (props) => (
        <div className="Btn">
            <a  target="_blank" href={`${props.url}`} className={`Btn-link Btn${props.btnModifier}`}>
            {props.text}
            </a>
        </div>

)

export default Btn
