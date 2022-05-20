import React from "react";
import Layout from "../components/layout/Layout";
// import pageHeader from "components/layout/PageHeader";
import AddForm from "../components/forms/AddForm";
import Heading from "../components/typography/Heading";
import { StyledContainer } from "../styles/containers/StyledContainer.styled";
import { Container } from "react-bootstrap";

function add() {
  return (
    <Layout>
      {/* <pageHeader title="Add new stay" /> */}
      <StyledContainer className="p-4 mb-4">
        <Container className="py-4">
          <Heading className="mt-5" size="1">
            Create stay
          </Heading>
          <AddForm className="mt-5" />
        </Container>
      </StyledContainer>
    </Layout>
  );
}

export default add;
// const [submitted, setSubmitted] = useState(false);
// const [auth, setAuth] = useContext(AuthContext);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);
// //
// const imgUpload1 = useRef(null);
// const imgUpload2 = useRef(null);
// const imgUpload3 = useRef(null);
// const imgUpload4 = useRef(null);

// const [img1, setImg1] = useState();
// const [img2, setImg2] = useState();
// const [img3, setImg3] = useState();
// const [img4, setImg4] = useState();

// let http = useAxios();
// function previewImage(event) {
//   setImg1(URL.createObjectURL(event.target.files[0]));
//   setImg2(URL.createObjectURL(event.target.files[0]));
//   setImg3(URL.createObjectURL(event.target.files[0]));
//   setImg4(URL.createObjectURL(event.target.files[0]));
// }

// const {
//   register,
//   handleSubmit,
//   control,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(schema),
// });

// let imgArray = {
//   image_1: 1234,
//   image_2: 1234,
//   image_3: 1234,
//   image_4: 1234,
// };

// // console.log(imgArray);

// async function onSubmit(data) {
//   const formData = new FormData();
//   const formData2 = new FormData();
//   const formData3 = new FormData();
//   const formData4 = new FormData();
//   let file1 = imgUpload1.current.files[0];
//   let file2 = imgUpload2.current.files[0];
//   let file3 = imgUpload3.current.files[0];
//   let file4 = imgUpload4.current.files[0];

//   formData.append("title", "Ny data");
//   formData.append("caption", "riktig data her og");
//   formData.append("file", file1);
//   //
//   formData2.append("title", "nummer 2 data");
//   formData2.append("caption", "riktig data her og");
//   formData2.append("file", file2);
//   //
//   formData3.append("title", "nummer 2 data");
//   formData3.append("caption", "riktig data her og");
//   formData3.append("file", file3);
//   //
//   formData4.append("title", "nummer 2 data");
//   formData4.append("caption", "riktig data her og");
//   formData4.append("file", file4);

//   await http.post(MEDIA_URL, formData).then(response => {
//     const thisID = response.data.id;
//     imgArray.image_1 = thisID;
//   });

//   await http.post(MEDIA_URL, formData2).then(response => {
//     const thisID = response.data.id;
//     imgArray.image_2 = thisID;
//   });

//   await http.post(MEDIA_URL, formData3).then(response => {
//     const thisID = response.data.id;
//     imgArray.image_3 = thisID;
//   });

//   await http.post(MEDIA_URL, formData4).then(response => {
//     const thisID = response.data.id;
//     imgArray.image_4 = thisID;
//   });

//   // console.log(imgArray);

//   await http.post(MEDIA_URL, formData3).then(response => {
//     const thisID = response.data.id;
//     // console.log(thisID);
//   });

//   await http.post(MEDIA_URL, formData4).then(response => {
//     const thisID = response.data.id;
//     // console.log(thisID);
//   });

//   // this needs to go straight under the post and id to get stored in images
//   data = {
//     status: "publish",
//     title: data.title,

//     fields: {
//       title: data.title,
//       stay_description: data.description,
//       price: data.price,
//       featured: data.featured,
//       address: {
//         full_address: data.full_address,
//         short_description: data.short_description,
//       },
//       nice_to_know: {
//         check_in: data.check_in,
//         checkout: data.checkout,
//         nice_text: data.text,
//         handicap_friendly: data.handicap_friendly,
//         no_smoking: data.no_smoking,
//       },
//       room: {
//         room_info: data.room_info,
//         room_type: data.room_type.value,
//         stay_type: data.stay_type.value,
//       },
//       stars: data.stars.value,
//       stay_includes: {
//         wifi: data.wifi,
//         kitchen: data.kitchen,
//         free_parking: data.free_parking,
//         breakfast: data.breakfast,
//         swimming_pool: data.swimming_pool,
//         pet_friendly: data.pet_friendly,
//       },
//       image: {
//         image_1: imgArray.image_1,
//         image_2: imgArray.image_2,
//         image_3: imgArray.image_3,
//         image_4: imgArray.image_4,
//       },
//     },
//   };
//   // });

//   await http
//     .post(API_URL, data)
//     .then(response => {
//       // console.log(response.data);
//     })
//     .catch(error => {
//       setError(error.toString());
//     });
//   setSubmitted(true);
// }

/* {submitted}

      <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          label="stay_title"
          type="text"
          style={{ height: "35px" }}
          placeholder="title"
          {...register("title")}
        />
        <br />
        <input
          label="price"
          type="text"
          style={{ height: "35px" }}
          placeholder="price"
          {...register("price")}
        />
        <br />
        <textarea label="description" placeholder="description" {...register("description")} />
        <br />
        <br />
        <input
          label="full_address"
          type="text"
          style={{ height: "35px" }}
          placeholder="full_address"
          {...register("full_address")}
        />
        <br />
        <input
          label="short_description"
          type="text"
          style={{ height: "35px" }}
          placeholder="short_description"
          {...register("short_description")}
        />
        <br />
        <input
          label="check_in"
          type="text"
          style={{ height: "35px" }}
          placeholder="check_in"
          {...register("check_in")}
        />
        <br />
        <input
          label="checkout"
          type="text"
          style={{ height: "35px" }}
          placeholder="checkout"
          {...register("checkout")}
        />
        <br />
        <input
          label="text"
          type="text"
          style={{ height: "35px" }}
          placeholder="text"
          {...register("text")}
        />
        <br />
        <input
          label="room_info"
          type="text"
          style={{ height: "35px" }}
          placeholder="room_info"
          {...register("room_info")}
        />
        <br />
        <Controller
          name="room_type"
          style={{ height: "35px" }}
          control={control}
          render={({ field }) => (
            <Select
              name="room_type"
              options={ROOMS}
              defaultValue={{ value: "0", label: "Type of room" }}
              {...field}
            />
          )}
        />
        <br />
        <Controller
          name="stay_type"
          style={{ height: "35px" }}
          control={control}
          render={({ field }) => (
            <Select
              name="stay_type"
              options={STAYS}
              defaultValue={{ value: "0", label: "Stay type" }}
              {...field}
            />
          )}
        />
        <br />
        <Controller
          name="stars"
          style={{ height: "35px" }}
          control={control}
          render={({ field }) => (
            <Select
              name="stars"
              options={REVIEW}
              defaultValue={{ value: "0", label: "How many stars" }}
              {...field}
            />
          )}
        />
        <br />
        <input type="checkbox" name="featured" {...register("featured")} />
        <label htmlFor="featured">Featured</label>
        <input type="checkbox" name="wifi" {...register("wifi")} />
        <label htmlFor="wifi">Wifi</label>
        <input type="checkbox" name="kitchen" {...register("kitchen")} />
        <label htmlFor="kitchen">kitchen</label>
        <input type="checkbox" name="free_parking" {...register("free_parking")} />
        <label htmlFor="free_parking">free_parking</label>
        <input type="checkbox" name="breakfast" {...register("breakfast")} />
        <label htmlFor="breakfast">breakfast</label>
        <input type="checkbox" name="swimming_pool" {...register("swimming_pool")} />
        <label htmlFor="swimming_pool">swimming_pool</label>
        <input type="checkbox" name="pet_friendly" {...register("pet_friendly")} />
        <label htmlFor="pet_friendly">pet_friendly</label>
        <input type="checkbox" name="no_smoking" {...register("no_smoking")} />
        <label htmlFor="no_smoking">no_smoking</label>
        <input type="checkbox" name="handicap_friendly" {...register("handicap_friendly")} />
        <label htmlFor="handicap_friendly">handicap_friendly</label>

        <br />
        <br />
        <br />
        <div className="img-div" style={{ position: "relative", width: "50vw", height: "36.66vw" }}>
          {img1 ? (
            <Image src={img1} alt="image" layout="fill" objectFit="cover" {...register("images")} />
          ) : (
            <Image src={image_test} alt="image" layout="fill" objectFit="cover" />
          )}
        </div>
        <input
          id="imgUpload1"
          name="image_1"
          type="file"
          ref={imgUpload1}
          onChange={previewImage}
        />
        <br />
        <br />
        <div className="img-div" style={{ position: "relative", width: "50vw", height: "36.66vw" }}>
          {img2 ? (
            <Image src={img2} alt="image" layout="fill" objectFit="cover" {...register("images")} />
          ) : (
            <Image src={image_test} alt="image" layout="fill" objectFit="cover" />
          )}
        </div>
        <input
          id="imgUpload2"
          name="image_2"
          type="file"
          ref={imgUpload2}
          onChange={previewImage}
        />
        <br />
        <br />
        <br />
        <br />
        <div className="img-div" style={{ position: "relative", width: "50vw", height: "36.66vw" }}>
          {img3 ? (
            <Image src={img3} alt="image" layout="fill" objectFit="cover" {...register("images")} />
          ) : (
            <Image src={image_test} alt="image" layout="fill" objectFit="cover" />
          )}
        </div>
        <input
          id="imgUpload3"
          name="image_3"
          type="file"
          ref={imgUpload3}
          onChange={previewImage}
        />
        <br />
        <br />
        <div className="img-div" style={{ position: "relative", width: "50vw", height: "36.66vw" }}>
          {img4 ? (
            <Image src={img4} alt="image" layout="fill" objectFit="cover" {...register("images")} />
          ) : (
            <Image src={image_test} alt="image" layout="fill" objectFit="cover" />
          )}
        </div>
        <input
          id="imgUpload4"
          name="image_4"
          type="file"
          ref={imgUpload4}
          onChange={previewImage}
        />
        <br />
        <br />
        <button type="submit">{submitted ? "sending.." : "send"}</button>
      </form> */
