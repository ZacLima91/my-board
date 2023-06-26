import Head from "next/head";
import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />
        <section className={styles.callToAction} >
          <h1>
            Uma ferramenta para seu dia a dia Escreva, planeja e organize-se...
          </h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>
        <div className={styles.donaters}>
            <img src="https://akns-images.eonline.com/eol_images/Entire_Site/201355/rs_600x600-130605092843-600.DespMe2.mh.060513.jpg?fit=around%7C600:600&output-quality=90&crop=600:600;center,top" alt="Usuario 1" />
        </div>
      </main>
    </>
  );
}


