import { Edu_AU_VIC_WA_NT_Pre, Sour_Gummy } from 'next/font/google';
import styles from './page.module.css';

const sourGummy = Sour_Gummy({ weight: '400', subsets: ["latin"] })
const edu = Edu_AU_VIC_WA_NT_Pre({ weight: '400', subsets: ["latin"] })



export default function Home() {
  return (
    <>
      <main className={styles.container}>


        <div className={`${styles.imgContainer} ${sourGummy.className} `}>
          <h1  >Transformez votre van en camping-car</h1>
          <p>Nous offrons des services de transformation de vans en camping-cars personnalisés selon vos besoins.</p>
        </div>
      </main>
    </>
  );
}
