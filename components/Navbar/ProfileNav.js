import Link from 'next/link'
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

import  NavLink  from './NavLink';
import { userService } from 'services';

const ProfileNav = () => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
      const subscription = userService.user.subscribe(x => setUser(x));
      return () => subscription.unsubscribe();


  }, []);

  function logout() {
      userService.logout();
  }
  return (
    <>
      <nav>
          <div >  
            <ul className={styles.nav}>
                <li className={styles.Title}><NavLink href="/" exact className={styles.Title}>FuelQuote</NavLink></li>
                <li className={styles.nav}><NavLink href="/FuelQuote" exact className={styles.nav}>Place Order</NavLink></li>
                <li className={styles.nav}><NavLink href="/Profile/profile" exact className={styles.nav}>Profile</NavLink></li>
                <li className={styles.nav}><Link onClick={() => logout()}>Sign Out</Link></li>
            </ul>
            
          </div>
            
      </nav>
    </>
  );
};


export default ProfileNav;