import { useEffect } from "react"


export default function LoginForm(){

    useEffect(()=>{
        const container = document.getElementById('container') as HTMLElement;
        const registerBtn = document.getElementById('register') as HTMLElement;
        const loginBtn = document.getElementById('login') as HTMLElement;
        
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });
        
        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    }, [])

    return <>
    <style>
        {`
      

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    
    background: url("gradient.png") no-repeat center center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}

.container {
    
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
    width: 798px;
    max-width: 100%;
    min-height: 480px;
}

.container p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
    color: #5c3d2e; /* Soft coffee brown */
}

.container span {
    font-size: 12px;
    color: #fff; /* Soft coffee brown */
}

.container a {
    
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

.container button {
    
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.container button.hidden-custom {
    background-color: transparent;
    border-color: #fff;
}

.container form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

.container input {
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.active .sign-in {
    transform: translateX(100%);
}

.sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
}

@keyframes move {
    0%, 49.99% {
        opacity: 0;
        z-index: 1;
    }
    50%, 100% {
        opacity: 1;
        z-index: 5;
    }
}

.social-icons {
    margin: 20px 0;
}

.social-icons a {
    border: 1px solid blue-sky; /* Light brown */
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    height: 40px;
    color: #8b634b; /* Light brown */
}

.toggle-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
}

.container.active .toggle-container {
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
}

.toggle {
    
    height: 100%;
    background: linear-gradient(to right, #1100ff, #a400ff); /* Light to medium brown gradient */
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.container.active .toggle {
    transform: translateX(50%);
}

.toggle-panel {
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-left {
    transform: translateX(-200%);
}

.container.active .toggle-left {
    transform: translateX(0);
}

.toggle-right {
    right: 0;
    transform: translateX(0);
}

.container.active .toggle-right {
    transform: translateX(200%);
}

        `}
    </style>

    <div className="container bg-[url('gradient2.png')]" id="container">
        <div className="form-container sign-up">
            <form className="bg-[url('gradient2.png')]">
                <h1 className="text-2xl">Créer un compte</h1>
                <div className="social-icons flex justify-center">
                <a href="#" className="social overflow-hidden">
                        <img src="facebook.jpg" alt="" />
                    </a>
                    <a href="#" className="social overflow-hidden">
                        <img src="google.png" alt="" />
                    </a>
                    <a href="#" className="social overflow-hidden">
                        <img src="linkedin.png" alt="" />
                    </a>
                </div>
                <span>Ou utilise ton email et ton mot de passe</span>
                <input type="text" placeholder="Nom" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Mot de passe" />
                <button style={{borderColor: '#fff'}} className="border border-[#fff]">S'inscrire</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form>
                <h1 className="text-2xl">Connexion </h1>
                <div className="social-icons flex justify-center">
                <a href="#" className="social overflow-hidden">
                        <img src="facebook.jpg" alt="" />
                    </a>
                    <a href="#" className="social overflow-hidden">
                        <img src="google.png" alt="" />
                    </a>
                    <a href="#" className="social overflow-hidden">
                        <img src="linkedin.png" alt="" />
                    </a>
                </div>
                <span>Ou utilise ton email et ton mot de passe</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Mot de Passe" />
                <a href="#">Mot de passe oublié ?</a>
                <button className="border border-[#fff]" style={{borderColor: '#fff'}}>Se Connecter</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left bg-sky-600">
                    <h1>Bienvenue !</h1>
                    <p className="text-white italic capitalize" style={{color: '#fff'}}>Créer un compte pour acceder à la plateforme</p>
                    <button className="hidden-custom" id="login">Connexion</button>
                </div>
                <div className="toggle-panel toggle-right bg-sky-600">
                    <h1>Bonjour !</h1>
                    <p className="text-white italic capitalize" style={{color: '#fff'}}>Nous sommes ravis de vous revoir</p>
                    <button className="hidden-custom" id="register">Inscription</button>
                </div>
            </div>
        </div>
    </div>
    </>
}