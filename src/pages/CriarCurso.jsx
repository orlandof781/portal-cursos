import { useState } from "react";
import Textarea from "../components/Textarea.jsx";

const formInicial = { nome: "", ch: "", descricao: "" };

export default function CriarCurso() {
    const [form, setForm] = useState(formInicial);
    const [erros, setErros] = useState({});
    const [sucesso, setSucesso] = useState("");

    function alterar(evento) {
        const { name, value } = evento.target;
        setForm((anterior) => ({ ...anterior, [name]: value }));
        setErros((anterior) => ({ ...anterior, [name]: "" }));
        setSucesso("");
    }

    function validar() {
        const novosErros = {};
        if (form.nome.trim().length < 3) {
            novosErros.nome = "Informe pelo menos 3 caracteres.";
        }
        if (form.ch === "") {
            novosErros.ch = "Selecione a carga horária.";
        }
        if (form.descricao.trim().length < 10) {
            novosErros.descricao = "Descreva o curso com pelo menos 10 caracteres.";
        }
        return novosErros;
    }

    function enviar(evento) {
        evento.preventDefault();
        const novosErros = validar();
        setErros(novosErros);
        if (Object.keys(novosErros).length === 0) {
            setSucesso(`Curso "${form.nome.trim()}" sugerido com sucesso!`);
            setForm(formInicial);
        }
    }

    return (
        <section>
            <h1>Novo Curso</h1>
            <p>Preencha as informações do curso sugerido</p>
            <form onSubmit={enviar} noValidate>
                <label htmlFor="nome">Nome do curso</label>
                <input
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={alterar}
                    aria-invalid={!!erros.nome}
                    aria-describedby={erros.nome ? "erro-nome" : undefined}
                />
                {erros.nome && (
                    <small id="erro-nome" className="erro">
                        {erros.nome}
                    </small>
                )}

                <label htmlFor="ch">Carga horária</label>
                <select
                    id="ch"
                    name="ch"
                    value={form.ch}
                    onChange={alterar}
                    aria-invalid={!!erros.ch}
                    aria-describedby={erros.ch ? "erro-ch" : undefined}
                >
                    <option value="">Selecione a carga horária</option>
                    <option value="1200h">1200h</option>
                    <option value="2400h">2400h</option>
                </select>
                {erros.ch && (
                    <small id="erro-ch" className="erro">
                        {erros.ch}
                    </small>
                )}

                <Textarea
                    id="descricao"
                    name="descricao"
                    label="Descrição"
                    value={form.descricao}
                    onChange={alterar}
                    erro={erros.descricao}
                    maxLength={300}
                    placeholder="Conte o que o curso ensina e para quem ele é indicado"
                />

                <button type="submit">Cadastrar</button>
            </form>
            {sucesso && (
                <p className="sucesso" role="status">
                    {sucesso}
                </p>
            )}
        </section>
    );
}
