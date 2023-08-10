import { useState } from "react";
import { faqs } from "../fags";
import AccordionItem from "./AccordionItem";

export default function App() {
    return (
        <div>
            <Accordion data={faqs} />
        </div>
    );
}

function Accordion({ data }) {

    const [curOpen, setCurOpen] = useState(null);
    return (
        <div className='accordion'>
            {data.map((el, i) => (
                <AccordionItem
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    title={el.title}
                    num={i + 1}
                    key={el.title}>{el.text}</AccordionItem>
            ))}

            <AccordionItem
                curOpen={curOpen}
                onOpen={setCurOpen}
                title='React'
                num={100}
                key='test'>
                <p>I am all about</p>
                <ul>
                    <li>Components</li>
                    <li>State</li>
                    <li>Props</li>
                    <li>JSX</li>
                    <li>Controlled elements</li>
                </ul></AccordionItem>
        </div>);
}

