import Container from "../../../components/Container/Container";
import Title from "../../../components/Title/Title";
import portfolio1 from "../../../assets/portfolio1.png";
import portfolio2 from "../../../assets/portfolio2.png";
import portfolio3 from "../../../assets/portfolio3.png";
import PortfolioCard from "./PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <Container>
      <Title title={"My Recent Work"} />
      <div className="grid gap-5 md:grid-cols-3 items-center">
        <PortfolioCard imageSrc={portfolio1} link={"https://musicmaestro-2b4f6.web.app/"} />
        <PortfolioCard imageSrc={portfolio2} link={"https://toy-tree.web.app/"} />
        <PortfolioCard imageSrc={portfolio3} link={"https://chip-recipe-client.web.app/"} />
      </div>
    </Container>
  );
};

export default Portfolio;
