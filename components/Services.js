import servicesData from "../data/servicesData.json"

const Services = (props) => (
    <section className="Service container ComponentSeparation">
        <ul className="Services-list">
            {
                servicesData.map((services,index) => {
                    return (
                        <li className="Services-item" key={services.name}>
                            <div className={`Services-${services.name} Services-img`}></div>
                            <p className="Services-name">{services.service}</p>
                        </li>
            )           
                })
            }
        </ul>
    </section>


)

export default Services