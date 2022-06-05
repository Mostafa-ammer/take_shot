import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../img/login-right.png";
import styles from "./Forget.module.css";

const Forget = () => {
  return (
    <Fragment>
      <section className={styles.forget}>
        <div class={styles.block}>
          <div class={styles.forget_image}>
            <img src="/images/forget.jpg" alt="forget image" />
          </div>
          <div className={styles.forget_form}>
            <div className={styles.title}>
              <h1>
                Forget <br></br>Your Password ?
              </h1>
              <p>Enter the email address to reset password</p>
            </div>
            <div className={styles.form}>
              <form>
                <div className={styles.form_group}>
                  <input
                    type="email"
                    className=""
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email Adress"
                  />
                </div>

                <button type="submit" className="">
                  Send
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
