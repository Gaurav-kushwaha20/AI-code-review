import './App.css'
import prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css"
import 'prismjs/components/prism-jsx.js'
import Editor from 'react-simple-code-editor'
import {useEffect, useState} from "react";
import axios from "axios";
import MarkDownRenderer from "./Components/MarkDownRenderer.jsx";



function App() {
    const [review, setReview] = useState('Checking your code...');
    const [code, setCode] = useState(`share your code`);
    
    useEffect(() => {
        // prism.highlightAll()
    }, []);

    const sendRequest = async () => {
        const response = await axios.post('http://localhost:3000/ai/get-review', {code})
        setReview(response.data.data)

    }

    return (<>
        <main>
            <div className={'left'}>
                <div className={'code'}>
                    <Editor value={code}
                            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                            onValueChange={code => setCode(code)} padding={10} style={{
                        color: "#FFFFFF",
                        fontFamily: "'Fira Code', Consolas, Menlo, monospace",
                        fontSize: '18px',
                        lineHeight: '25px',
                        height: '100%',
                        width: '100%',

                    }}/>


                </div>
                <button onClick={sendRequest}>Review</button>
            </div>

            <div className={'right'}>
                <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
                    <MarkDownRenderer content={review} />
                </div>
            </div>

        </main>
    </>)
}

export default App
