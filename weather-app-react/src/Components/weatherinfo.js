import { useLocation } from "../Contexts/locationContext";
import { useSignUp } from "../Contexts/signUpContext";
function WeatherInfo() {
  const { data } = useLocation();

  const { userName } = useSignUp();

  function display() {
    return data.map((item) => {
      return (
        <div style={styles.parentDiv}>
          <span style={styles.spanStyle} key={item.id}>
            {item.name}
            <span style={{ display: "block" }}>{item.email}</span>
            <span>{item.phone}</span>
            <span>{item.geo}</span>
          </span>
        </div>
      );
    });
  }

  console.log(data);
  return (
    <>
      <h2 style={styles.h2Style}>
        Merhaba {userName} gardaş hoşgelmişen spagetti code maruz kalmışsan?{" "}
      </h2>
      <hr></hr>
      <div style={styles.grandParentDiv}>{display()}</div>
    </>
  );
}
const styles = {
  parentDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDE6D",
    boxShadow: "rgba(0, 0, 0, 0.50) 1.95px 1.95px 2.6px",
    width: "300px",
    height: "300px",
    top: "50%",
    left: "50%",
    margin: "20px",
    borderRadius: "5px",
  },
  spanStyle: {
    fontSize: "18px",
    letterSpacing: "0.2px",
    color: "#3D31B2",
  },
  grandParentDiv: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  h2Style: {
    letterSpacing: "0.2px",
    color: "#FFE793",
  },
};

export default WeatherInfo;
