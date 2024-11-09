import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import Header from "../../components/Header";
import { CadastroText, Column, Container, JaTemContaText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";

const Cadastro = () => {
    const navigate = useNavigate();

    const handleGoToFeed = () => {
        navigate('/feed');
    }

    const handleClickSignin = () => {
        navigate('/login');
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                placeholder="Nome completo" 
                                leftIcon={<MdPerson />} 
                                name="nome" 
                            />
                            <Input 
                                placeholder="E-mail" 
                                leftIcon={<MdEmail />} 
                                name="email" 
                            />

                            <Input 
                                placeholder="Senha" 
                                leftIcon={<MdLock />} 
                                type="password" 
                                name="password" 
                            />

                            <Button title="Criar minha conta" variant="secondary" onClick={handleGoToFeed} />
                        </form>
                        <Row>
                            <CadastroText>
                                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </CadastroText>
                            <CadastroText>
                                Já tenho conta. <JaTemContaText onClick={handleClickSignin}>Fazer login</JaTemContaText>
                            </CadastroText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { Cadastro };
