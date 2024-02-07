import './styles.css'
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa";
export default function Home() {
  return (
    <div className="container">
    
      <main>
        <h1>Login Page</h1>
        <form>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="name" placeholder="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" required />
          </div>
          <button type="submit">signup</button>
          <div className='toLogin'>
            have an account? <Link href="/login" className='log'>login</Link>
          </div>
          <div className="google">Or you can log in with <Link href="#"><FaGoogle style={{color:'blue'}}/></Link> </div>
        </form>
      </main>

    </div>
  );
}
