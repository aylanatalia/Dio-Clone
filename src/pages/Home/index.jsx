import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import banner from "../../assets/banner.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleClickSignin = () =>{
        navigate('/login');
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title> 
                        <TitleHighLight>
                            Implemente <br />
                        </TitleHighLight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias usadas pelas empresas mais inovadoras do mundo e encare seu novo 
                        desafio profissional, evoluindo em comunidade com os melhores experts
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignin} />
                </div>
                <div>
                    <img src={banner} alt="Banner principal mostrando um jovem usando um celular" />
                </div>
            </Container>
        </>
    );
}

export  { Home };
