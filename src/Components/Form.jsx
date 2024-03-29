import Swal from "sweetalert2";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().min(3, "Nome é obrigatório"),
  email: z
    .string()
    .refine((value) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value), {
      message:
        "O endereço de e-mail não pode conter letras maiúsculas ou espaços",
    })
    .refine((value) => value.trim().length > 0, {
      message: "E-mail é obrigatório",
    }),
  data_de_nascimento: z.string().refine((data) => data.length >= 10, {
    message: "Data de nascimento é obrigatória",
  }),
  morada: z.string().min(6, "Morada é obrigatório"),
  telefone: z.string().min(10, "Telefone deve conter no mínimo 9 dígitos"),
  desenvolvedor: z.string().min(3, "Desenvolvedor é obrigatório"),
  sobre: z.string().min(10, "Campo obrigatório"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const createUser = (data) => {
    console.log(data);
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
    reset();
  };

  return (
    <>
      <div className={styles.img_topo}>
        <img src="/topo1.png" alt="" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(createUser)}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <h1>Trabalhe Conosco</h1>
        <label>
          <span>Nome</span>
          <input
            type="text"
            className={styles.input_nome}
            {...register("nome")}
            required
          />
          <span style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}>
            {errors.nome?.message}
          </span>
        </label>

        <div className={styles.Div_Email_Age}>
          <label>
            <span>Email</span>
            <input
              type="text"
              className={styles.input_email}
              {...register("email")}
              required
            />
            <span
              style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}
            >
              {errors.email?.message}
            </span>
          </label>

          <label>
            <span>Data de Nascimento</span>
            <input
              type="date"
              className={styles.age}
              {...register("data_de_nascimento")}
              required
            />
            <span
              style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}
            >
              {errors.data_de_nascimento?.message}
            </span>
          </label>
        </div>
        <label>
          <span>Morada</span>
          <input
            type="text"
            className={styles.morada}
            {...register("morada")}
            required
          />
          <span style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}>
            {errors.morada?.message}
          </span>
        </label>
        <div className={styles.Div_Tel_Dev}>
          <label>
            <span>Telefone</span>
            <input
              type="number"
              className={styles.input_tel}
              {...register("telefone")}
              required
            />
            <span
              style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}
            >
              {errors.telefone?.message}
            </span>
          </label>
          <label>
            <span>Desenvolvedor</span>
            <select
              name="Front"
              className={styles.dev}
              {...register("desenvolvedor")}
            >
              <option value="Front">Front-end</option>
              <option value="Back">Back-end</option>
              <option value="Mobile">Mobile</option>
            </select>
            <span
              style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}
            >
              {errors.desenvolvedor?.message}
            </span>
          </label>
        </div>
        <label>
          <span>Fale sobre você</span>
          <textarea name="sobre" {...register("sobre")} required></textarea>
          <span style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}>
            {errors.sobre?.message}
          </span>
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
