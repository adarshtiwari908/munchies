import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';

export default function Header() {
    return (
       <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='A Restaurant'/>
            <h1>The Munchies</h1>
        </div>
        <nav>
            <Button textOnly>cart (0)</Button>
        </nav>
       </header>
    );
}