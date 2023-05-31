import css from "./HeroPage.module.css";
import Gallery from "../../components/Gallery/Gallery";
import Button from "../../components/Button/Button";
import Info from "../../components/Info/Info";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetHeroByIdQuery } from "../../redux/heroAPI";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";
import { useUpdateHeroMutation } from "../../redux/heroAPI";
import Loader from "../../components/Loader/Loader";
const Hero = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpadeModal] = useState(false);
  const [updateHero] = useUpdateHeroMutation();
  const toggleModal = (setShowModal) => {
    setShowModal((prevState) => !prevState);
  };
  const { heroId } = useParams();
  const { data, isFetching } = useGetHeroByIdQuery(heroId);
  let hero = {
    images: [],
  };
  if (!isFetching) {
    hero = data;
  }
  return data ? (
    <section className={css.container}>
      <h2 className={css.title}>{hero.nickname}</h2>
      <Info
        realName={hero.real_name}
        description={hero.origin_description}
        superpowers={hero.superpowers}
      />
      <p className={css.phrase}>{hero.catch_phrase}</p>
      <Gallery images={hero.images} nickname={hero.nickname} />
      <div className={css.buttonContainer}>
        <Button
          text={"Update Hero"}
          todo={() => {
            toggleModal(setShowUpadeModal);
          }}
          type={"button"}
        />
        <Button
          text={"Delete Hero"}
          todo={() => {
            toggleModal(setShowDeleteModal);
          }}
          denger={true}
          type={"button"}
        />
      </div>
      {showDeleteModal && (
        <ModalDelete
          heroId={heroId}
          toggleModal={() => {
            toggleModal(setShowDeleteModal);
          }}
        />
      )}
      {showUpdateModal && (
        <Modal
          toggleModal={() => {
            toggleModal(setShowUpadeModal);
          }}
        >
          <Form
            hero={hero}
            operation={updateHero}
            params={heroId}
            closeModal={() => {
              toggleModal(setShowUpadeModal);
            }}
          ></Form>
        </Modal>
      )}
    </section>
  ) : (
    <Loader />
  );
};
export default Hero;
