import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../img/login-right.png";
import styles from "./Update.module.css";

const Update = () => {
  return (
    <Fragment>
      <section className={styles.update}>
        <div class={styles.block}>
          <div class={styles.update_image}>
            <img src="/images/update.jpg" alt="update image" />
          </div>
          <div className={styles.update_form}>
            <div className={styles.title}>
              <h1>
                Update <br></br>Your Password ?
              </h1>
              <p>Enter the old password and then the new password</p>
            </div>
            <div className={styles.form}>
              <form>
                <div className={styles.form_group}>
                  <input
                    type="password"
                    className=""
                    id="old_pass"
                    aria-describedby="emailHelp"
                    placeholder="Enter Old Password"
                  />
                  <input
                    type="password"
                    className=""
                    id="new_pass"
                    aria-describedby="emailHelp"
                    placeholder="Confirm  New Password"
                  />
                </div>

                <button type="submit" className="">
                  Update Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Update;
