import axios from "axios";
import styling from "./PersonInfo.module.scss";
import spinner from "../../assets/spinner.svg";
import { useEffect, useState } from "react";
const url = "https://randomuser.me/api/";

const PersonInfo = () => {
  const [fetchPerson, setFetchPerson] = useState({});
  const [text1, setText1] = useState("My name is");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(fetchPerson);
  const ApiFetcher = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const person = response.data.results[0];
      //   console.log(person);
      const {
        email,
        phone,
        gender,
        dob: { age },
        picture: { large: image },
        name: { title, first: name, last: surname },
        location: { country },
        login: { password },
      } = person;
      const fullname = `${title} ${name} ${surname}`;
      const personData = {
        image,
        fullname,
        gender,
        email,
        phone,
        age,
        country,
        password,
      };
      //   console.log(personData);
      setFetchPerson(personData);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    ApiFetcher();
  }, []);

  return (
    <div className={styling.card}>
      <nav className={styling.navbar}></nav>
    </div>
  );
};

export default PersonInfo;
