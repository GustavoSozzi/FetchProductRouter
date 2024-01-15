import React from "react";
import styles from "./Produtos.module.css";
import foto from "./img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>bomgustavo10@gmail.com</li>
          <li>679848484167</li>
          <li>Rua Carinha que Mora logo Ali</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
