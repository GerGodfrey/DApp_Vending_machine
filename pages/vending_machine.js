import Head from 'next/head'
import { useState} from 'react'
import "bulma/css/bulma.css";
import Web3 from 'web3';
import styles from "../styles/vending_machine.module.css";

const VendingMachine = () => {
    const [error,setError] = useState('')
    let web3 
    const connectWalletHandler = async () => {
        // alert("connecting to wallet");
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            try{
                await window.ethereum.request({ method: 'eth_requestAccounts' })
                web3 = new Web3(window.ethereum) 
            }catch (err){
                setError(err.message)
            }
        }else{
            console.log("Please install metamask")
        }
    }

    return (
        <div className={styles.main}>
            <Head>
                <title>Vending Machine DApp</title>
                <meta name="description" content="A blockchain vending machine app" />
            </Head>
            <nav className="navbar mt-4 mb-4">
                <div className="navbar-brand">
                    <h1> Vending Machine </h1>
                </div>
                <div className="navbar-end">
                    <button onClick= {connectWalletHandler} className ="button is-primary"> Connect Wallet </button>
                </div>
            </nav>
            <section>
                <div className="container">
                    <p> placeholder text</p>
                </div>
            </section>
            <section>
                <div className="container has-text-danger">
                    <p>{error}</p>
                </div>
            </section>
        </div>
    )
}


export default VendingMachine
