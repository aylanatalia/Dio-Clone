import { MdEmail, MdLock } from "react-icons/md";
import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    
    const handleClickSignin = () =>{
        navigate('/feed')
    }

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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input placeholder="Senha" leftIcon={<MdLock />} type="password" />
                            <Button title="Entrar" variant="secondary" onClick={handleClickSignin} type="button"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci a minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                    
                </Column>
            </Container>
        </>
    );
}

export { Login };
