import { useState } from "react";
import { questions } from "../questions";

export default function FlashCards() {

    const [selectedId, setSelectedId] = useState(null);

    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null);
    }

    return (

        <div>
            <h2>Some facts about React</h2>
            <div className="flashcards">
                {questions.map(question => (
                    <div
                        key={question.id}
                        className={question.id === selectedId ? 'selected' : ''}
                        onClick={() => handleClick(question.id)}>
                        <p>{question.id === selectedId ? question.answer : question.question}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
