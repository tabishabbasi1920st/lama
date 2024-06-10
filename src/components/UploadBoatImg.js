import { useRef, useState } from "react";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";

const UploadBoatImg = ({ formData, setFormData }) => {
  const [img, setImg] = useState(null);
  const imageInputRef = useRef();
  const [loading, setLoading] = useState(false);

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "images_preset");

    try {
      const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      const resourceType = "image";
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const options = {
        method: "POST",
        body: data,
      };

      const response = await fetch(api, options);
      const fetchedData = await response.json();
      const { secure_url } = fetchedData;
      setLoading(false);
      return secure_url;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const imageUrl = await uploadFile("image");
      setFormData((prevData) => ({
        ...prevData,
        chatBotUrl: imageUrl,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const renderLoader = () => {
    return (
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#fff"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  };

  return (
    <BotContainer>
      <BotDp onClick={() => imageInputRef.current.click()}>
        <img src={formData.chatBotUrl} className="bot-img" />
      </BotDp>
      <div>
        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          id="img"
          onChange={(e) => setImg(e.target.files[0])}
          style={{ display: "none" }}
        />
        <UploadImageButton
          onClick={() => {
            img !== null && handleSubmit();
          }}
        >
          {loading ? (
            renderLoader()
          ) : (
            <>
              <span>Upload Image</span>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0417 23.3333V11.4479L12.25 15.2396L10.2084 13.125L17.5 5.83334L24.7917 13.125L22.75 15.2396L18.9584 11.4479V23.3333H16.0417ZM8.75004 29.1667C7.94796 29.1667 7.26108 28.8808 6.68942 28.3092C6.11775 27.7375 5.8324 27.0511 5.83338 26.25V21.875H8.75004V26.25H26.25V21.875H29.1667V26.25C29.1667 27.0521 28.8809 27.739 28.3092 28.3106C27.7375 28.8823 27.0512 29.1677 26.25 29.1667H8.75004Z"
                  fill="white"
                />
              </svg>
            </>
          )}
        </UploadImageButton>
        <p className="recommended-txt">Recommended Size: 48x48px</p>
      </div>
    </BotContainer>
  );
};

export default UploadBoatImg;

const BotContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;

  .recommended-txt {
    font-size: 14px;
    margin-top: 5px;
    color: #3c3c3c;
  }
`;

const BotDp = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #d9d9d9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .bot-img {
    height: 100px;
  }
`;

const UploadImageButton = styled.button`
  height: 50px;
  width: 175px;
  justify-content: center;
  font-size: 1.1rem;
  font-family: "Roboto";
  background-color: #7e22ce;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
