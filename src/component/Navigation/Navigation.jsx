//import styles from "./Navigation.module.css";

const Navigation = () => {
   //console.log(styles);
  return (
    <nav className="container">
        <div classname="logo">
            <img src="/images/conta.png" alt="do" width="40" height="45"/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  );
};

export default Navigation