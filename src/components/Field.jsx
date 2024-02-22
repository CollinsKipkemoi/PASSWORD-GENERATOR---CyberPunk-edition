import "../App.css"
import { useState } from "react"
import zxcvbn from 'zxcvbn';
import { MdDeleteOutline } from "react-icons/md";
import securePassword from 'secure-random-password';


function Field() {
    const [length, setLength] = useState(8)
    const [generatedPassword, setGeneratedPassword] = useState('')
    const [passwords, setPasswords] = useState([]);
    const handleSlide = (e) => {
        setLength(parseInt(e.target.value))
    }

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Text copied to clipboard');
        } catch (err) {
            console.log('Failed to copy text: ', err);
        }
    }

    const generate = () => {
        const uppercase = document.getElementById('uppercase').checked;
        const lowercase = document.getElementById('lowercase').checked;
        const numbers = document.getElementById('numbers').checked;
        const symbols = document.getElementById('symbols').checked;
        const characters = [
            lowercase ? securePassword.lower : '',
            uppercase ? securePassword.upper : '',
            numbers ? securePassword.digits : '',
            symbols ? securePassword.symbols : '',
        ].filter(Boolean);
        const password = securePassword.randomPassword({
            length: length,
            characters: characters.length ? characters : [securePassword.lower, securePassword.upper],
        });
        console.log(password);
        const result = zxcvbn(password);
        console.log(result.score);
        setPasswords([...passwords, password]);
        setGeneratedPassword(password);
        return password;
    }
    return (
        <div className="container container-fluid mt-2 ps-0 pe-0 field">
            <div className="container w-50 container-fluid parts">
                {/* password field */}
                <p className="password-field">{generatedPassword}</p>
                {/* generate button */}
                <div className="buttons">
                    <button className="btn btn-sm generate-btn" onClick={generate}>Generate</button>
                    {/* copy button */}
                    <button className="btn btn-sm copy-btn" onClick={
                        () => copyToClipboard(generatedPassword)
                    
                    }>Copy</button>
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
                <p className="clear" onClick={() => setPasswords([])}>{passwords.length !== 0 ? `clear history ` : ""}
                    {
                        passwords.length !== 0 ? <MdDeleteOutline className="delete-icon" /> : ""

                    }</p>
            </div>
        </div>
    )
}

export default Field
