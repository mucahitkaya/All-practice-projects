import validationSchema from "../Validations/validations";
import { useSignUp } from "../Contexts/signUpContext";
import { useFormik } from "formik";

function SignUp({ signIn }) {
  const { setUserName } = useSignUp();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { firstName: "" },

    //submit olduğunda values değerini ekrana yazdırıyoruz
    onSubmit: (values) => {
      signIn(true);
      setUserName(values.firstName);
    },
    validationSchema,
  });

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        backgroundColor: "#bfe0f6",
        height: "100vh",
      }}
    >
      <div style={styles.signUpContainer}>
        <span style={styles.spanStyle}>Please enter your name</span>

        <br />

        <form onSubmit={handleSubmit}>
          <input
            style={styles.inputStyle}
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />

          <br />
          <br />

          <button
            style={styles.buttonStyle}
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  signUpContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#61A6D3",
    boxShadow: "rgba(0, 0, 0, 0.50) 1.95px 1.95px 2.6px",
    width: "400px",
    height: "400px",
    top: "50%",
    left: "50%",
    margin: "150px auto",
    borderRadius: "150px 0px 145px 10px",
  },

  inputStyle: {
    textAlign: "center",
    textColor: "#BE5D77",
    height: "26px",
    width: "200px",
    borderRadius: "40px",
    border: "2px solid rgba(73,151,170,0)",
  },
  buttonStyle: {
    letterSpacing: "1px",
    fontSize: "16px",
    color: "#BE5D77",
    backgroundColor: "white",
    height: "32px",
    width: "100px",
    borderRadius: "40px",
    border: "2px solid rgba(73,151,170,0)",
  },
  spanStyle: {
    fontSize: "18px",
    letterSpacing: "0.2px",
    color: "white",
  },
};
export default SignUp;
