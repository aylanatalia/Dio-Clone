import { MdEmail, MdLock } from "react-icons/md";
import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {api} from "../../service/api";

const schema = yup.object({
    email: yup.string().email('Email não é valido').required(),
    password: yup.string().min(3, 'No mínimo 3 caractéres').required(),
}).required();


const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });


    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if (data.length === 1) {
                navigate('/feed')
                return
            }

            alert('Usuário ou senha inválido')
        } catch (e) {
          "Houve um erro";
        }
    };

    const handleClickSignin = () => {
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name={email} control={control} errorMensage={errors.email.message} />;
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input placeholder="Senha" leftIcon={<MdLock />} type="password" name={senha} control={control} errorMensage={errors.senha.message} />
                            {errors.senha && <span>Senha é obrigatório</span>}
                            <Button title="Entrar" variant="secondary" type="submit" />
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
