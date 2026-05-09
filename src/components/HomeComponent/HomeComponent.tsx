import Button from "@mui/material/Button";
import "./HomeComponent.css";
import Knot from "../../assets/Knot.png";
import HyperBolic from "../../assets/HyperBolic.png";
import Fractal from "../../assets/Fractal.png";
import TorusFibr from "../../assets/TorusFibr.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

enum ModalType {
  KNOT = "Knot",
  TORUS = "Torus",
  HYPERBOLIC = "Hyperbolic",
}
const IAS_URL =
  "https://github.com/mcwiga/Master-Thesis/blob/main/thesis/master.pdf";
const KNOT_URL = "https://github.com/mcwiga/KnotGeneratorMengerSponge";
const ISOM_IMMER_URL =
  "https://github.com/mcwiga/NegativelyCurvedMetrics/blob/main/presentation/main.pdf";

function generateModalText(modalType: ModalType | undefined) {
  const style = {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(400px, 60%)",
    bgcolor: "rgba(20, 16, 36, 0.9)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  switch (modalType) {
    case ModalType.KNOT:
      return (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Embedding Knots Into Fractals
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            It was shown in a paper published by highschoolers that you can
            embed every knot inside a certain fractal called the Menger sponge!
            In this project, I wrote a program using the Godot game engine where
            you can draw a knot and it will embed this in the Menger sponge
            following the ideas of the paper.
          </Typography>
          <Button
            variant="outlined"
            style={{ marginTop: "15px" }}
            href={KNOT_URL}
          >
            Go to project
          </Button>
        </Box>
      );
    case ModalType.TORUS:
      return (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Classificaiton of Lagrangian Fibrations over Compact Surfaces
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lagrangian fibrations are fundamental objects in mathematical
            physics. A vast range of examples of these are given via completely
            integrable Hamiltonian systems. They are also of interest to
            mathematicians and are abundent in the field of symplectic geometry.
            Closely related to this, they can be realised as symplectic
            realisations of the zero Poisson structure of a manifold. My thesis
            involved classifying these fibrations over compact surfaces.
          </Typography>
          <Button
            variant="outlined"
            style={{ marginTop: "15px" }}
            href={IAS_URL}
          >
            Go to project
          </Button>
        </Box>
      );
    default:
      return (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Isometric Immersions of Negatively Curved Metrics
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            It would be nice if we were able to see the hyperbolic plane with
            our own eyes. Unfortunately, Hilberts theorem states that there is
            no immersion of the hyperbolic plane into Euclidean three space and
            so we shall never be able to completely visyualize this object! This
            project looked at why this is the case and also the generalisations
            to immersions into different ambient manifolds.
          </Typography>
          <Button
            variant="outlined"
            style={{ marginTop: "15px" }}
            href={ISOM_IMMER_URL}
          >
            Go to project
          </Button>
        </Box>
      );
  }
}

function EmblaCarousel() {
  const [modalType, setModalType] = useState(ModalType.KNOT);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [open, setOpen] = useState(false);
  const handleModalOpen = (modalType: ModalType) => {
    setModalType(modalType);
    return setOpen(true);
  };
  const handleModalClose = () => setOpen(false);

  /*
  For Carousel scrolling
  const goToPrev = () => emblaApi?.scrollPrev(true);
  const goToNext = () => emblaApi?.scrollNext(true);
*/
  useEffect(() => {
    console.log("TADA");
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {generateModalText(modalType)}
      </Modal>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <img
              className="embla__slide"
              onClick={() => handleModalOpen(ModalType.KNOT)}
              style={{
                width: "10%",
              }}
              src={Fractal}
            ></img>
            <img
              onClick={() => handleModalOpen(ModalType.TORUS)}
              className="embla__slide"
              style={{ width: "10%" }}
              src={TorusFibr}
            ></img>
            <img
              onClick={() => handleModalOpen(ModalType.HYPERBOLIC)}
              className="embla__slide"
              style={{ width: "10%" }}
              src={HyperBolic}
            ></img>
            <img
              onClick={() => handleModalOpen(ModalType.KNOT)}
              className="embla__slide"
              style={{ width: "10%" }}
              src={Knot}
            ></img>
          </div>
        </div>

        {/* <button className="embla__prev" onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className="embla__next" onClick={goToNext}>
        Scroll to next
      </button> */}
      </div>
    </>
  );
}

export function HomeComponent() {
  const GITHUB_URL = "https://github.com/mcwiga";
  const CV_URL =
    "https://docs.google.com/document/d/1l-FV4Es6rTgw6fXr_l6Riz07DM9wSOMD1NYpdaMTYyw/edit?usp=sharing";
  return (
    <>
      <div style={{ width: "50%", paddingBottom: "20px" }}>
        Hi! I'm Michael and I enjoy music, mathematics and creating
        visualisations! Slide through some of my projects below and click on
        them for more information!
      </div>
      <EmblaCarousel></EmblaCarousel>
      <div className="contentArea">
        To see some more projects I have worked on check out my github!
      </div>
      <div className="buttons">
        <Button variant="contained" href={GITHUB_URL}>
          Github
        </Button>
        <Button variant="outlined" href={CV_URL}>
          My CV
        </Button>
      </div>
    </>
  );
}
