import "../App.css"
import { useState } from "react"
function Field() {
    const [length, setLength] = useState(8)
    const handleSlide = (e) => {
        setLength(parseInt(e.target.value))
    }
    const[passwords, setPasswords] = useState([]);
    return (
        <div className="container container-fluid mt-2 ps-0 pe-0 field">
            <div className="container w-50 container-fluid parts">
                {/* password field */}
                <p className="password-field"></p>
                {/* generate button */}
                <div className="buttons">
                    <button className="btn btn-sm generate-btn">Generate</button>
                    {/* copy button */}
                    <button className="btn btn-sm copy-btn">Copy</button>
                </div>
                {/* slider for taking the length of password */}
                <input type="range" className="form-range" min="8" max="128" id="customRange2" onChange={handleSlide} />
                {/* password length */}
                <p className="password-length">Password Length: {length}</p>
                <br />
                <div className="password-specifications">
                    <div><input type="checkbox" name="uppercase" id="uppercase" />
                        <label htmlFor="uppercase">Include Uppercase</label>
                    </div>
                    <div>
                        <input type="checkbox" name="lowercase" id="lowercase" />
                        <label htmlFor="lowercase">Include Lowercase</label>
                    </div>
                    <div>
                        <input type="checkbox" name="numbers" id="numbers" />
                        <label htmlFor="numbers">Include Numbers</label>
                    </div>
                    <div>
                        <input type="checkbox" name="symbols" id="symbols" />
                        <label htmlFor="symbols">Include Symbols</label>
                    </div>

                </div>
            </div>
            <div className="container w-50 container-fluid parts">
                <h2>PASSWORD HISTORY</h2>
                <div className="password-history">
                    <ul>
                        {passwords.map((password, index) => (
                            <li key={index}>{password}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Field
