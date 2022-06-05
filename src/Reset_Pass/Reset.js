import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../img/login-right.png";
import styles from "./Reset.module.css";

const Forget = () => {
  return (
    <Fragment>
      <section className={styles.reset}>
        <div class={styles.block}>
          <div class={styles.reset_image}>
            <img src="/images/reset.jpg" alt="reset image" />
          </div>
          <div className={styles.reset_form}>
            <div className={styles.title}>
              <h1>
                Reset <br></br>Your Password ?
              </h1>
              <p>Enter the new password and confirm the new password</p>
            </div>
            <div className={styles.form}>
              <form>
                <div className={styles.form_group}>
                  <input
                    type="password"
                    className=""
                    id="new_pass"
                    aria-describedby="emailHelp"
                    placeholder="Enter New Password"
                  />
                  <input
                    type="password"
                    className=""
                    id="confirm_pass"
                    aria-describedby="emailHelp"
                    placeholder="Confirm  New Password"
                  />
                </div>

                <button type="submit" className="">
                  Reset Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Forget;
