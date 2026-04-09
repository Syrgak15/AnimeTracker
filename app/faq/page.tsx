import Accordion from "@/components/MUI-components/Accordion/Accordion"
import "./style.css"

export default function FaqPage() {
    return (
        <div className="faq">
            <div className="faq-content">
                <div className="faq-title">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="faq-accordion">
                    <Accordion/>
                </div>
            </div>
        </div>
    )
}