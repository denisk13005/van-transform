'use client'
import { Edu_AU_VIC_WA_NT_Pre } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
const edu = Edu_AU_VIC_WA_NT_Pre({ weight: '400', subsets: ["latin"] })

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const span2 = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      console.log(span2);

    }
  }, [isOpen])

  return (
    <header className={`${styles.header} ${edu.className}`}>
      <div className={styles.logo}>
        <Link href="/">Van2Camper</Link>
      </div>

      {/* Menu Full Width pour Desktop */}
      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <Link href="/">Accueil</Link>
        <Link href="/realisations">Réalisations</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Hamburger Menu pour Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isOpen ? styles.bar1 : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.bar2 : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.bar3 : ''}`}></span>
      </div>
    </header>
  );
}
