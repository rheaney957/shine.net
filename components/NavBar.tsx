import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';
import buttonStyles from '../styles/Button.module.css';
import { SetStateAction } from 'react';
import Logo from '/public/images/logo.png';

export interface NavBarProps {
    menu: boolean;
    setMenu: React.Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({menu, setMenu}: NavBarProps)
{
    const router = useRouter();

    return (
        <div className={`${styles.navWrapper} ${menu ? styles.navWrapperOpen : ''}`}>
            <div className={styles.mobileHeader}>
                <Link href="./">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.mobileLogo} src={Logo.src} alt="shine-logo" />
                </Link>
                <ul className={styles.mobileSocials}>
                    <li><a href="https://www.tiktok.com/@shinebelfast" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-tiktok"></i></a>
                    </li>
                    <li><a href="https://twitter.com/ShineBelfast" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/ShineBelfastNI/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/shine.belfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
            <nav className={styles.navbar} onClick={e => e.stopPropagation()}>
                <div className={styles.navContainer}>
                    <ul className={styles.navMenu}>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link href="./" legacyBehavior>
                                <a className={router.pathname === "/" ? styles.active : styles.navLinks}>
                                    All Shows
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link href="./club-events" legacyBehavior>
                                <a className={router.pathname === "/club-events" ? styles.active : styles.navLinks}>
                                    Club Events
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link href="./comedy" legacyBehavior>
                                <a className={router.pathname === "/comedy" ? styles.active : styles.navLinks}>
                                    Comedy
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link href="./live-gigs" legacyBehavior>
                                <a className={router.pathname === "/live-gigs" ? styles.active : styles.navLinks}>
                                    Live Gigs
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link href="./help-and-FAQs" legacyBehavior>
                                <a className={router.pathname === "/help-and-FAQs" ? styles.active : styles.navLinks}>
                                    {"Help / FAQ's"}
                                </a>
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link href="https://shine.tickets" legacyBehavior>
                                <a className={styles.navLinks}>
                                    {"BUY TICKETS"}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.mailingSection}>
                <form id="nav-subscribe-form" action="//www.venuecloud.net/s/f/27/17" method="POST" className={styles.mailingForm}>
                    <input type="hidden" name="contact_permission" value="yes"/>
                    <input className={styles.mailingInput} type="text" name="firstname" placeholder="First Name" required />
                    <input className={styles.mailingInput} type="text" name="surname" placeholder="Surname" required />
                    <input className={styles.mailingInput} type="text" name="email" placeholder="Email" required />
                    <input type="hidden" id="source" name="source" value="website"/>
                    <input className={buttonStyles.primary} value='Join Mailing List' type="submit" name="btnSubmit" />
                </form>
            </div>
        </div>
    );
}
