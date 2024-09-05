# Certificate DApp

A decentralized application (DApp) that allows users to issue and verify certificates using blockchain technology. This application is built with React, Solidity, and Ethereum blockchain via Infura.

## Features

- **Issue Certificate**: issue certificates with details like candidate name, course, grade, and issue date.
- **Search Certificate**: Users can search for a certificate by its ID and view the associated details.
- **Blockchain-based Verification**: Certificates are stored on the blockchain, ensuring authenticity and immutability.

## 🧰 Built With
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> &nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> &nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://soliditylang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/ethereum/solidity/develop/docs/logo.svg" alt="solidity" width="40" height="40"/> </a> &nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ethereum.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg" alt="ethereum" width="40" height="40"/></a>


## 📢📢📢 Prerequisites
- NodeJS 16.x

## Getting Started 🚀

Follow these steps to set up the project locally.

## 1. Clone the repository

First, clone the repository from GitHub:

```bash
git clone https://github.com/sujinbabups/certificate-dapp.git

```
## 2. Navigate into the project directory
```bash
cd certificate-dapp
```
## 3. Set up environment variables

Create a .env file in the root directory to store your sensitive data. Add the following content, replacing your_infura_project_id and your_private_key with the actual values
```bash
REACT_APP_INFURA_PROJECT_ID=your_infura_project_id
REACT_APP_PRIVATE_KEY=your_private_key
```
## 4. Build and run the Docker containers
Build the Docker images for the project using the following command
``` bash
docker compose build
```
Then, run the containers
```
docker compose up
```

This will set up and run your certificate DApp in a Docker container. The app will be accessible on http://localhost:3000.
## 5. Stop the application
To stop the running containers, use
``` bash
docker-compose down
```

## Demo 📹


    
## 📦 Planned Updates
- MetaMask Compatability
- UI Updates
- Mobile View
- Production Release
- Desktop App

## 🎗️ Contributing

inspiration, and innovation. Every contribution you offer is deeply valued.

Should you have ideas to enhance this, kindly fork the repository and initiate a pull request. Alternatively, you can open an issue and tag it with enhancement. Remember to star the project! Many thanks!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/<feature_name>)
3. Commit your Changes (git commit -m '<feature_name>_added')
4. Push to the Branch (git push origin feature/<feature_name>)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT license - see the LICENSE.md file for details.