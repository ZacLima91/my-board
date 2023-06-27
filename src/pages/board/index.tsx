import Head from "next/head";
import styles from "./styles.module.scss";
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from "react-icons/fi";
import { SupportButton } from "@/src/components/SupportButton";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db, firebase } from "@/src/services/firebaseConnection";


interface BoardProps {
  user: {
    name: string;
    id: string;
  };
}

export default function Board({ user }: BoardProps) {
  const [input, setInput] = useState("");

  async function handleAddTask(e: FormEvent) {
    e.preventDefault();
    
    if(input == ''){
      alert("Preencha alguma tarefa")
      return
    }

    await firebase.firestore().collection('tarefas').add({
      created: new Date(),
      tarefa: input,
      userId: user.id,
      name: user.name
    }).then((doc)=>{
      console.log("CADASTRADO COM SUCESSO!")
    }).catch((err)=>{
      console.log("ERRO AO CADASTRAR", err)
    })
  }

  return (
    <>
      <Head>
        <title>Minhas tarefas - Board</title>
      </Head>
      <main className={styles.container}>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Digite sua tarefa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <FiPlus size={25} color="#17181f" />
          </button>
        </form>

        <h1>Você tem 2 tarefas!</h1>

        <section>
          <article className={styles.taskList}>
            <p>
              Aprender criar projetos usando NextJS e aplicando firebase como
              back.
            </p>
            <div className={styles.actions}>
              <div>
                <div>
                  <FiCalendar size={20} color="#FFB800" />
                  <time>17 Julho 2021</time>
                </div>
                <button>
                  <FiEdit2 size={20} color="#FFF" />
                  <span>Editar</span>
                </button>
              </div>
              <button>
                <FiTrash size={20} color="#FF3636" />
                <span>Excluir</span>
              </button>
            </div>
          </article>
        </section>
      </main>
      <div className={styles.vipContainer}>
        <h3>Obrigado por apoiar esse projeto.</h3>
        <div>
          <FiClock size={28} color="#FFFFFF" />
          <time>Última doação foi a 3 dias.</time>
        </div>
      </div>

      <SupportButton />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const user = {
    name: session.user?.name,
    id: session.user?.id,
  };

  return {
    props: {
      user,
    },
  };
};
