import Header from "../../components/Header";
import { Column, Container, Title, TitleHighlight, } from "./styles";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3} >
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight>#RANKING 5 TOP DA SEMANA:</TitleHighlight>
                    <UserInfo percentual={50} nome="Ayla Natalia" image="https://avatars.githubusercontent.com/u/157905721?v=4" />
                    <UserInfo percentual={45} nome="Ayla Natalia" image="https://avatars.githubusercontent.com/u/157905721?v=4" />
                    <UserInfo percentual={40} nome="Ayla Natalia" image="https://avatars.githubusercontent.com/u/157905721?v=4" />
                    <UserInfo percentual={35} nome="Ayla Natalia" image="https://avatars.githubusercontent.com/u/157905721?v=4" />
                    <UserInfo percentual={30} nome="Ayla Natalia" image="https://avatars.githubusercontent.com/u/157905721?v=4" />
                </Column>
            </Container>
        </>
    );
}

export { Feed };
