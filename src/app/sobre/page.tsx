import Styles from "./styles.module.scss";
import { Title, Container } from "../components";
export default function Sobre() {
    return (
        <Container>
            <Title component="Title" title="Sobre mim" />
            <p className={Styles.Paragrafo}>
                Olá! Sou uma entusiasta da tecnologia com uma trajetória
                diversificada no desenvolvimento web. Possuo formação em Gestão
                da Tecnologia da Informação e estou em constante aprimoramento,
                atualmente cursando uma Pós-Graduação em Arquitetura de Software
                na Fiap.
            </p>
            <p className={Styles.Paragrafo}>
                Minha jornada inclui uma série de cursos extras que ampliaram
                meu repertório, desde Gestão Ágil com Scrum até o aprofundamento
                em tecnologias como React, React Native, Next.JS e Docker. Com
                habilidades sólidas em HTML, CSS (incluindo SASS e Bootstrap),
                JavaScript (também com frameworks como React), além de
                experiência em ASP.NET MVC e conhecimento em Node.js para o
                desenvolvimento tanto front-end quanto full-stack, possuo uma
                base sólida para enfrentar desafios variados.
            </p>
            <p className={Styles.Paragrafo}>
                Minha experiência profissional abrange diferentes empresas, onde
                pude contribuir de maneira significativa.
            </p>
            <p className={Styles.Paragrafo}>
                Busco constantemente ampliar meus conhecimentos e habilidades na
                área de tecnologia, sempre pronta para contribuir com o
                crescimento da empresa e da equipe. Sou apaixonada por aprender,
                trabalhar em equipe e resolver problemas de forma criativa e
                eficiente.
            </p>
            <p className={Styles.Paragrafo}>
                Estou entusiasmada com as oportunidades que o futuro reserva e
                ansiosa para aplicar meu conhecimento e experiência em projetos
                desafiadores e inovadores.
            </p>
        </Container>
    );
}
