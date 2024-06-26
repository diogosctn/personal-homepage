'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image';
import githubIcon from "../../_assets/icons/github-icon.svg";
import linkedinIcon from "../../_assets/icons/linkedin-icon.svg";
import instagramIcon from "../../_assets/icons/instagram-icon.svg";
import styles from './header.module.scss';

const Header = () => {
    const [_window, setWindow] = useState<null | Window>(null)
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setWindow(window)
    }, [])

    const isActive = (path: string) => _window?.location?.pathname === path;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={menuOpen ? styles.menuOpen + ' ' + styles.header : styles.header}>
            <nav>
                <div>
                    <a href="/" className={styles.logo}>&lt;diogosctn/&gt;</a>
                    <button className={styles.hamburger} onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
                <ul className={styles.linkList}>
                    <li className={`${styles.link} ${isActive("/about") && styles.linkActive}`}>
                        <div></div>
                        <a href="/about">sobre</a>
                        <div></div>
                    </li>
                    <li className={`${styles.link} ${isActive("/projects") && styles.linkActive}`}>
                        <div></div>
                        <a href="/projects">projetos</a>
                        <div></div>
                    </li>
                </ul>
                <ul className={styles.iconList}>
                    <li className={styles.icon}>
                        <Image
                            priority
                            src={githubIcon}
                            alt="Link to GitHub"
                        />
                    </li>
                    <li className={styles.icon}>
                        <Image
                            priority
                            src={linkedinIcon}
                            alt="Link to LinkedIn"
                        />
                    </li>
                    <li className={styles.icon}>
                        <Image
                            priority
                            src={instagramIcon}
                            alt="Link to Instagram"
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
