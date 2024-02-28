import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const getSittersContext = createContext();
const useSitter = () => useContext(getSittersContext);

function SittersProvider(props) {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState({
    experience: "",
    searchInput: "",
    dog: false,
    cat: false,
    bird: false,
    rabbit: false,
    rating: 0,
  });

  const [searchResult, setSearchResult] = useState({
    isLoading: false,
    isError: false,
    result: [],
  });

  const getSitters = async () => {
    try {
      // Set loading to true with a delay of 2 seconds
      setSearchResult({ ...searchResult, isLoading: true });
      setTimeout(async () => {
        const response = await axios.get(
          `http://localhost:4000/sitters?full_name=${searchInput.searchInput}&experience=${searchInput.experience}&rating=${searchInput.rating}&dog=${searchInput.dog}&cat=${searchInput.cat}&bird=${searchInput.bird}&rabbit=${searchInput.rabbit}`
        );
        // After the delay, update the search result
        setSearchResult({
          ...searchResult,
          isLoading: false,
          isError: false,
          result: response.data.data,
        });
      }, 2000); // 2000 milliseconds (2 seconds)
    } catch (error) {
      console.log(error);
      // Handle errors
      setSearchResult({
        ...searchResult,
        isLoading: false,
        isError: true,
      });
    }
  };

  const [getSitterInfo, setGetSitterInfo] = useState({});
  //sitterProfile useState()
  const [imgGallery, setImgGallery] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [postCode, setPostCode] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [service, setService] = useState("");
  const [myPlace, setMyPlace] = useState("");
  const [updateImg, setUpdateImg] = useState("");
  const [petType, setPetType] = useState({
    dog: false,
    cat: false,
    bird: false,
    rabbit: false,
  });

  const getSitterData = async () => {
    try {
      const result = await axios(`http://localhost:4000/sitters/sitterProflie`);
      // console.log(result);
      setGetSitterInfo(result.data);

      setName(getSitterInfo.full_name);
      setEmail(getSitterInfo.email);
      setIntroduction(getSitterInfo.introduction);
      setPhone(getSitterInfo.phone);
      setExperience(getSitterInfo.experience);
      setUpdateImg(getSitterInfo.profile_img);
      setTradeName(getSitterInfo.trade_name);
      setService(getSitterInfo.service);
      setMyPlace(getSitterInfo.my_place);
      setPetType({
        ...petType,
        dog: getSitterInfo.dog,
        cat: getSitterInfo.cat,
        bird: getSitterInfo.bird,
        rabbit: getSitterInfo.rabbit,
      });
      setImgGallery(getSitterInfo.image_gallery);
      setDistrict(getSitterInfo.district);
      setProvince(getSitterInfo.province);
      setPostCode(getSitterInfo.post_code);
      setSubDistrict(getSitterInfo.sub_district);
      setAddress(getSitterInfo.address_detail);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitSitter = async () => {
    const updateImage = updateImg;

    await axios.put(`http://localhost:4000/sitters/myProfile`, {
      full_name: name,
      profile_img: updateImage || getSitterInfo.profile_img,
      experience,
      phone,
      introduction,
      trade_name: tradeName,
      dog: petType.dog,
      cat: petType.cat,
      bird: petType.bird,
      rabbit: petType.rabbit,
      service,
      my_place: myPlace,
      address_detail: address,
      sub_district: subDistrict,
      district,
      province,
      post_code: postCode,
      image_gallery: imgGallery || getSitterInfo.image_gallery,
      is_active: isActive,
    });

    await getSitterData();
  };

  const handleStateChange = (fieldName, value) => {
    setSearchInput((prevSearchInput) => ({
      ...prevSearchInput,
      [fieldName]: value,
    }));
  };

  return (
    <getSittersContext.Provider
      value={{
        searchResult,
        setSearchResult,
        getSitters,
        searchInput,
        setSearchInput,
        handleStateChange,
        getSitterInfo,
        setGetSitterInfo,
        getSitterData,
        name,
        setName,
        nameError,
        setNameError,
        phone,
        setPhone,
        email,
        setEmail,
        introduction,
        setIntroduction,
        experience,
        setExperience,
        address,
        setAddress,
        district,
        setDistrict,
        subDistrict,
        setSubDistrict,
        province,
        setProvince,
        postCode,
        setPostCode,
        tradeName,
        setTradeName,
        service,
        setService,
        myPlace,
        setMyPlace,
        petType,
        setPetType,
        handleSubmitSitter,
        updateImg,
        setUpdateImg,
        imgGallery,
        setImgGallery,
        isActive,
        setIsActive,
      }}
    >
      {props.children}
    </getSittersContext.Provider>
  );
}

export { SittersProvider, useSitter };
