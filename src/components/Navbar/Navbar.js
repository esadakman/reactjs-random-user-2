import styling from "./Navbar.module.scss";
import cw from "../../assets/cw.svg";

const Navbar = () => {
  return (
    <div className={styling.container}>
      <nav className={styling.navbar}>
        <img className={styling.img} src={cw} alt="clarusway" />
      </nav>
    </div>
  );
};

export default Navbar;
