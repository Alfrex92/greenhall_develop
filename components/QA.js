import FaqData from '../data/faqData.json'


const QA = (props) => (
    <div className="QA container">{
        FaqData.map((faq, index) => {
            return (
                <div key={faq.question} >
                    <p className="QA-question">・{faq.question}</p>
                    <hr/>
                    <p className="QA-answer">{faq.answer}</p>
                 </div>
            )
        })
    }
    <style jsx>{`

        .QA {
            margin: 0 auto 2rem;
        }
        @media screen and (min-width: 46.5rem) {
            .QA {
                width: 42.25rem;

                padding: 0 1rem;
                }
            }
        .QA-question {
            margin-top: 1rem;
            font-size: 1.2rem;
            font-weight:700;
            color: #00C69A;
        }

        hr {
            display: block;
            height: 1px;
            padding: 0;
            margin: .25em 0;
            border: 0;
            border-top: 1px solid #eceeef;
        }


    `}</style>

    </div>
)

export default QA
