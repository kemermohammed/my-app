import './styles.css'
import { FaGoogle } from "react-icons/fa";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <main className="content">
        <h1>Solar Gas Station Information</h1>
        <div className="button-container">
          <Link href="/login">
            <div className="option login-option">Login</div>
          </Link>
          <Link href="/create">
            <div className="option signup-option">Create Account</div>
          </Link>
          <div className="google">Or you can log in with <Link href="#"><FaGoogle style={{color:'blue'}}/></Link> </div>
        </div>
      </main>
    </div>
  );
}
