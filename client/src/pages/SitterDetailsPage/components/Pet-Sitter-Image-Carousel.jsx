/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Carousel() {
  const [sitterData1, setSitterData1] = useState(null);
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/sitters/${param.id}`
        );
        setSitterData1(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching sitter details:", error);
      }
    };

    fetchData();
  }, [param.id]); // Add param.id to the dependency array

  return (
    <>
      {sitterData1 && sitterData1.image_gallery && (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          css={css`
            width: 100%;
          `}
        >
          {sitterData1.image_gallery.map((item, index) => (
            <SwiperSlide key={index}>
              <Stack className="comment-reviewer" width="80%" spacing={2}>
                <img
                  height={480}
                  width={640}
                  alt={`image_gallery_${index}`}
                  src={item}
                />
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default Carousel;
