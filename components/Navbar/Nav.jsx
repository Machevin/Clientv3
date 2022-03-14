
import Link from 'next/link'
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

import { NavLink } from './NavLink';
import { userService } from 'services';

export const Nav = () => {
  const [user, setUser] = useState(null);
  

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();


    }, []);

    function logout() {
        userService.logout();
    }
    console.log(userService.userValue);
  return (
    // C:\Users\flore\New folder\next-js-11-registration-login-example\pages\Profile\profile.js
    <>
      <nav>
          <div className={styles.header}>  
            <ul className={styles.nav}>
                {/* <NavLink href="/OrderFormHistory/OrderFormHistory" exact className={styles.nav}>Order History</NavLink> */}
                <li className={styles.Title}><NavLink href="/" exact className={styles.Title}>FuelQuote</NavLink></li>
                <li className={styles.nav}><Link  href="/"><a>Home</a></Link></li>
                
                {user ? <li className={styles.nav}><NavLink href="/Profile/profile" exact className={styles.nav}>Profile</NavLink></li>:<li className={styles.nav}><NavLink href="/account/register" exact className={styles.nav}>Register</NavLink></li>}
                {user ? <li className={styles.nav}><a onClick={() => logout()}>Sign Out</a></li> : <li className={styles.nav}><NavLink href="/account/login" exact className={styles.nav}>Sign In</NavLink></li>}
            </ul>
            </div>
      </nav>
    </>
  );
};
