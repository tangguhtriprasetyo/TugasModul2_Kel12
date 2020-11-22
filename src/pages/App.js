import { Card, Gap, StyledLink } from "../components";
import { Layout } from "antd";
import "./App.scss";
import Tangguh from "../assets/tangguh.jpg";
import Kemit from "../assets/kemit.jpg";

const { Header, Content, Footer } = Layout;
const today = new Date();
const year = today.getFullYear();

function App() {
  return (
    <Layout className="main-page">
      <Header className="navbar">
        <p className="title">Tugas Modul 2 Kelompok 12</p>
        <div className="link-wrapper">
          <StyledLink label="Home " href="#" />
          <Gap width={20} />
          <StyledLink label="Pimpa " href="#" />
        </div>
      </Header>
      <Content className="content">
        <Card nama="Tangguh Tri Prasetyo" nim="21120117130082" photo={Tangguh} />
        <Card nama="Alvin Elian Abbiyi" nim="21120117130051" photo={Kemit} />
      </Content>
      <Footer style={{ textAlign: "center", color: "#004643", margin: "24px", fontWeight: "bold" }}>
        @{year} Dibuat Sama Kelompok 12
      </Footer>
    </Layout>
  );
}

export default App;
