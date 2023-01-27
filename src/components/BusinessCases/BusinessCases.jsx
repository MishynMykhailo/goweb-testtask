import React, { useState } from "react";
import s from "./BusinessCases.module.css";
import buisnessCasesImages from "../data/buisnessCasesImages";
import ImagePictures from "../ImagePictures";
import Modal from "../Modal";
import nextArrowModal from "../../images/gallery/next.png";
import prevArrowModal from "../../images/gallery/prev.png";
const BusinessCases = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [photoId, setPhotoId] = useState(null);
  const toggleMode = () => {
    setIsOpenModal((prevState) => {
      return !prevState;
    });
  };
  const modalButtonHandler = (e) => {
    const { name } = e.currentTarget;

    switch (name) {
      case "nextArrowModalBtn":
        setPhotoId((prevState) => {
          const { id } = prevState;
          const nextPhotoId = id + 1;

          if (nextPhotoId === buisnessCasesImages.length) {
            return buisnessCasesImages.find((item) => {
              return item.id === nextPhotoId;
            });
          } else {
            return buisnessCasesImages.find((item) => {
              return item.id === nextPhotoId;
            });
          }
        });
        break;
      case "prevArrowModalBtn":
        setPhotoId((prevState) => {
          const { id } = prevState;
          const prevPhotoId = id - 1;

          if (prevPhotoId <= 1) {
            return buisnessCasesImages.find((item) => {
              return item.id === prevPhotoId;
            });
          } else {
            return buisnessCasesImages.find((item) => {
              return item.id === prevPhotoId;
            });
          }
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={s.div} id="Cases">
      <div className={s.padding}>
        <p className={s.preH2}>This is what we do</p>
        <h2 className={s.h2}>Business Cases</h2>
        <p className={s.postH2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={s.ul}>
          {buisnessCasesImages.map(
            ({ id, jpg1x, jpg2x, webp1x, webp2x, alt }) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    setIsOpenModal(true);
                    setPhotoId({ id, jpg1x, alt });
                  }}
                >
                  <ImagePictures
                    key={id}
                    jpg1x={jpg1x}
                    jpg2x={jpg2x}
                    webp1x={webp1x}
                    webp2x={webp2x}
                    alt={alt}
                    className={s.img}
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
      {isOpenModal && (
        <Modal onClose={toggleMode}>
          <div className={s.modalDiv}>
            <div>
              <img key={photoId.id} src={photoId.jpg1x} alt={photoId.alt} />
              <p className={s.modalText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, sapiente!
              </p>
            </div>
            <div className={s.nextArrowModalDiv}>
              <button
                type="button"
                className={s.nextArrowModalBtn}
                name="nextArrowModalBtn"
                onClick={(e) => modalButtonHandler(e)}
                style={{
                  visibility:
                    photoId.id === buisnessCasesImages.length
                      ? "hidden"
                      : "visible",
                }}
              >
                <img src={nextArrowModal} alt="next" />
              </button>
            </div>
            <div className={s.prevArrowModalDiv}>
              <button
                type="button"
                className={s.prevArrowModalBtn}
                name="prevArrowModalBtn"
                onClick={(e) => modalButtonHandler(e)}
                style={{
                  visibility: photoId.id <= 1 ? "hidden" : "visible",
                }}
              >
                <img src={prevArrowModal} alt="prev" />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BusinessCases;
