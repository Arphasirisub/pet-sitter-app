/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { usePets } from "../../../contexts/getPetsByOwnerId";

function Detail() {
  const { selectedPets } = usePets();
  return (
    <div
      css={css`
        width: 27%;
        height: 484px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 80px;
          border-bottom: 2px solid rgba(243, 243, 2431);
          justify-content: center;
          padding-left: 20px;
          font-size: 24px;
          font-weight: bold;
        `}
      >
        Booking Detail
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-left: 20px;
          height: 324px;
        `}
      >
        <div>
          <div
            css={css`
              font-size: 14px;
              color: rgb(123, 126, 143);
            `}
          >
            Petsitter:
          </div>
          <div></div>
        </div>
        <div>
          <div
            css={css`
              font-size: 14px;
              color: rgb(123, 126, 143);
            `}
          >
            Date & Time:
          </div>
          <div></div>
        </div>
        <div>
          <div
            css={css`
              font-size: 14px;
              color: rgb(123, 126, 143);
            `}
          >
            Duration:
          </div>
          <div></div>
        </div>
        <div>
          <div
            css={css`
              font-size: 14px;
              color: rgb(123, 126, 143);
            `}
          >
            Pet:
          </div>
          <div>
            {selectedPets.length > 0 ? (
              <>
                {selectedPets.map((pet, index) => (
                  <span key={index}>
                    {pet.pet_name}
                    {index !== selectedPets.length - 1 && ", "}
                  </span>
                ))}
              </>
            ) : (
              <div>-</div>
            )}
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          background-color: black;
          height: 80px;
          border-bottom: 2px solid rgba(243, 243, 2431);
          align-items: center;
          justify-content: space-between;
          padding-left: 20px;
          padding-right: 20px;
          color: white;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        `}
      >
        <div>Total</div>
        <div>600.00 THB</div>
      </div>
    </div>
  );
}
export default Detail;
