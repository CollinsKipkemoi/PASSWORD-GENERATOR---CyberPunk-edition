# SECURE PASSWORD GENERATOR - Cyberpunk Edition (REACT + VITE)

This is a web application that generates random passwords based on user specifications. It is built using React and Vite.

## Features

- Generate random passwords based on user-defined length
- Include uppercase letters, lowercase letters, special characters, and/or numbers in the generated passwords
- Utilizes the `zxcvbn` and `secure-random-password` JavaScript libraries for password generation and strength evaluation

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Heisenberg-x1/PASSWORD-GENERATOR---CyberPunk-edition.git
```

2. Navigate to the project directory:

```bash
cd password-generator
```

3. Install dependencies:

```bash
npm install
or
npm i

```

## Usage

1. Start the development server:

```bash
npm run dev
```

1. Open your web browser and navigate to the local server address (e.g. `http://localhost:3000`)
1. Specify the desired password length and select the desired options (uppercase, lowercase, special characters, numbers)
1. Click the "Generate Password" button to generate a random password
1. Copy the generated password to use it for your desired purpose

## Credits

- This project utilizes the `zxcvbn` library for password strength evaluation. More information can be found [here](https://github.com/dropbox/zxcvbn).
- The `secure-random-password` library is used for generating random passwords. More information can be found [here](https://github.com/rackerlabs/secure-random-password).

## License

This project is licensed under the [MIT License](LICENSE).
Developed by [Heisenberg-x1](https://github.com/Heisenberg-x1)
