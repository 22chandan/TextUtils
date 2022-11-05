export default function About(props) {
  // const [myStyle, setMystyle] = useState({
  //   backgroundColor: props.mode,
  //   color: props.mode === "white" ? "black" : "white",
  // });
  // const [prebtn, postBtn] = useState("Enable Dark Mode");
  // const ToggleBtn = () => {
  //   if (myStyle.color === "white") {
  //     setMystyle({
  //       backgroundColor: "",
  //       color: "black",
  //     });
  //     postBtn("Enable Dark Mode");
  //   } else {
  //     setMystyle({
  //       backgroundColor: "black",
  //       color: "white",
  //       border: "1px solid white",
  //     });
  //     postBtn("Enable Light Mode");
  //   }
  // };
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1 className="my-4">About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
              >
                What is TextUtils?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
              >
                <strong>
                  {" "}
                  TextUtils:- A Text analyzer is an online tool for complete
                  text analysis
                </strong>
                . Check the number of characters, spaces, words,To Convert in
                UpperCase,To lower Case, Copy and Remove Extra Spaces.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
              >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "#042743",
                }}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-4">
          <button type="button" className="btn btn-primary" onClick={ToggleBtn}>
            {prebtn}
          </button>
        </div> */}
      </div>
    </div>
  );
}
