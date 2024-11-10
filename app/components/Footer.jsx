'use client'
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import styles from './Footer.module.css';
export default function Footer() {
  const router = useRouter()
  return (
    <footer className={styles.footerContainer}>
      <p>&copy; </p>
      <FaFacebook onClick={() => router.push('https://www.facebook.com/profile.php?id=61554680622442')} />
    </footer>
  );
}
