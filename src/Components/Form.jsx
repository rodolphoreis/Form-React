import { useState } from "react";
import Swal from "sweetalert2";
import styles from "./Form.module.css";

const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [morada, setMorada] = useState("");
  const [telefone, setTelefone] = useState("");
  const [desenvolvedor, setDesenvolvedor] = useState("");
  const [sobre, setSobre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /* -------- Limpar o formulário -----------*/
    setNome("");
    setEmail("");
    setDataNascimento("");
    setMorada("");
    setTelefone("");
    setDesenvolvedor("");
    setSobre("");
    /* ----------------- Alert -------------------*/
    Swal.fire({
      title: "Formulário Enviado",
      text: "Obrigado por preencher o formulário de candidatura! Apreciamos o seu interesse e entraremos em contato em breve.",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Fechar",

      customClass: {
        popup: styles["alert"],
      },
    });
  };

  return (
    <>
      <div className={styles.img_topo}>
        <img src="/topo1.png" alt="" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <h1>Trabalhe Conosco</h1>
        <label>
          <span>Nome</span>
          <input
            type="text"
            className={styles.input_nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
            value={nome}
            required
          />
        </label>
        <div className={styles.Div_Email_Age}>
          <label>
            <span>Email</span>
            <input
              type="text"
              className={styles.input_email}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>

          <label>
            <span>Data de Nascimento</span>
            <input
              type="date"
              className={styles.age}
              onChange={(e) => setDataNascimento(e.target.value)}
              value={dataNascimento}
              required
            />
          </label>
        </div>
        <label>
          <span>Morada</span>
          <input
            type="text"
            className={styles.morada}
            onChange={(e) => setMorada(e.target.value)}
            value={morada}
            required
          />
        </label>
        <div className={styles.Div_Tel_Dev}>
          <label>
            <span>Telefone</span>
            <input
              type="number"
              className={styles.input_tel}
              onChange={(e) => setTelefone(e.target.value)}
              value={telefone}
              required
            />
          </label>
          <label>
            <span>Desenvolvedor</span>
            <select
              name="Front"
              className={styles.dev}
              onChange={(e) => setDesenvolvedor(e.target.value)}
              value={desenvolvedor}
            >
              <option value="Front">Front-end</option>
              <option value="Back">Back-end</option>
              <option value="Mobile">Mobile</option>
            </select>
          </label>
        </div>
        <label>
          <span>Fale sobre você</span>
          <textarea
            name="sobre"
            onChange={(e) => setSobre(e.target.value)}
            value={sobre}
            required
          ></textarea>
        </label>
        <div className={styles.Div_Botoes}>
          <button className={styles.btn_enviar} type="submit">
            Enviar
          </button>
        </div>
      </form>

      <div className={styles.img_rodape}>
        <img src="/rodape.png" alt="" />
      </div>
    </>
  );
};

export default Form;
