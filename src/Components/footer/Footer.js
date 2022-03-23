// import React from 'react'
// import "./Footer.css"

// export default function Footer() {
   
//     return (
//         <div className="footer">
//             StackRoute &copy;
//         </div>
//     )
// }
import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-center text-white relative-bottom"
      style={{ backgroundColor: "#333" }}
    >
      <div className="container p-4 pb-0">
        <section>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto text-dark">
                <p className="pt-2">
                  <strong style={{ color: "#fff" }}>
                    Sign up for our newsletter
                  </strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div className="col-auto">
                <button
                  data-testid="subscribe"
                  type="submit"
                  className="btn btn-dark"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div
        className="text-center text-light p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
         Designed by Nih@rik@:
        <a className="text-light" href=" ">
          {" "}
          www.newsOnline.com
        </a>
      </div>
    </footer>
  );
}