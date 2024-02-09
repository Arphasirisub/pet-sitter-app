/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function Carousel() {
  const [sitterData, setSitterData] = useState(null);
  const param = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/sitters/${param.id}`
      );
      setSitterData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching sitter details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {sitterData && sitterData.image_gallery ? (
        <Swiper
          slidesPerView={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          css={css`
            width: 1280px;
          `}
        >
          {sitterData.image_gallery?.map((item, index) => (
            <SwiperSlide key={index}>
              <Stack className="comment-reviewer" width="80%" spacing={2}>
                <img
                  alt={`image_gallery_${index}`}
                  src={item}
                  height="240px"
                  width="415px"
                  css={css`
                    object-fit: cover;
                    margin: auto;
                  `}
                />
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <CircularProgress color="warning" />
      )}
    </>
  );
}

export default Carousel;
