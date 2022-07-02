import React, { Fragment } from "react";
//import { Link } from "react-router-dom";
import media from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <Fragment>
      <section className={media.fullscreen}>
        <div className={media.container}>
          <div className={media.title}>
            <h6>Social Media Info </h6>
            <p>Enter your social media links to facilitate connection</p>
          </div>
          <div className={media.form}>
            <form action="#">
              <label for="">Enter Instgtam Link* :</label>
              <input type="text" id="instgram" name="instgram" required />

              <label for="">Enter Facebook Link* :</label>
              <input type="text" id="Facebook" name="Facebook" required />
              <label for="">Enter Twitter Link :</label>
              <input type="text" id="Twitter" name="Twitter" />
              <label for="">Enter Linked Link :</label>
              <input type="text" id="Linked" name="Linked" />
              <label for="">Enter YouTupe Link* :</label>
              <input type="text" id="YouTupe" name="YouTupe" required />
              <input type="submit" value="Submit Now" />
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SocialMedia;
