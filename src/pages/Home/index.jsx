import styled from "styled-componentes";
import Banner from "../../componentes/Banner";
import CourseSection from "../../componentes/CourseSection";
import Modal from "../../componentes/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../Context";
import Popup from "../../componentes/Popup";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 100px;

  @media (width > 1024px) {
    padding-bottom: 0;
  }
`;

const DivStyles = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 2.4rem;
  font-weight: bold;
  background-color: var(--main-background-black);
  color: var(--secondary-white);
  padding-top: 40px;
  padding-bottom: 140px;

  @media (width > 1024px) {
    padding-bottom: 0;
  }
`;

const Home = () => {
  const { categories, selectedVideo, setSelectedVideo, videos, popup } =
    useContext(GlobalContext);

  const categoriesWithVideos = categories.filter((categoria) =>
    videos.some((video) => video.Categoria === categoria.nombre)
  );

  return (
    <HomeContainer>
      <Banner />
      {videos.length > 0 ? (
        categoriesWithVideos.map((category) => (
          <CourseSection key={category.id} category={category} />
        ))
      ) : (
        <DivStyles>No hay videos que mostrar</DivStyles>
      )}
      <Modal video={selectedVideo} closeModal={() => setSelectedVideo(null)} />
      {popup.show && <Popup message={popup.message} type={popup.type} />}
    </HomeContainer>
  );
};

export default Home;
