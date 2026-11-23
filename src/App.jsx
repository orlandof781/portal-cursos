import { NavLink, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import CriarCurso from "./pages/CriarCurso.jsx";

export default function App() {
return (
<div className="container">
<header>
<strong>Portal de Cursos</strong>
<nav aria-label="Menu principal">
<NavLink to="/" end>Início</NavLink>
<NavLink to="/cadastro">Cadastro</NavLink>
    <NavLink to="/criarcurso">Novo Curso</NavLink>

</nav>
</header>
<main>
<Routes>
<Route path="/" element={<Inicio />} />
<Route path="/cadastro" element={<Cadastro />} />
    <Route path="/criarcurso" element={<CriarCurso />} />

    <Route path="*" element={<p>Página não encontrada.</p>} />
</Routes>
</main>
</div>
);
}