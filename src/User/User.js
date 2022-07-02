import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../img/login-right.png";
import styles from "./User.module.css";
import "./icon.css";
const User = () => {
  const data = [{ facebook_icon: "fab fa-facebook-f" }];
  return (
    <Fragment>
      <section className={styles.user}>
        <div className={styles.profile}>
          <div className={styles.img}>
            <img src="images/profile2.jpg" alt="image" />
          </div>
          <div className={styles.interact}>
            <div className={styles.name}>
              <h2>Mostafa Amer</h2>
            </div>
            <div className={styles.jop}>Modern Photographer</div>
            <div className={styles.buttons}>
              <button>Message</button>
              <button>Follow</button>
            </div>
            <div class="wrapper">
              <div class="button">
                <div class="icon">
                  <i class="fab fa-instagram"></i>
                </div>
                <span>Instagram</span>
              </div>

              <div class="button">
                <div class="icon">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <span>Facebook</span>
              </div>

              <div class="button">
                <div class="icon">
                  <i class="fab fa-twitter"></i>
                </div>
                <span>Twitter</span>
              </div>

              <div class="button">
                <div class="icon">
                  <i class="fab fa-linkedin"></i>
                </div>
                <span>LinkedIn</span>
              </div>

              <div class="button">
                <div class="icon">
                  <i class="fab fa-youtube"></i>
                </div>
                <span>YouTube</span>
              </div>

              <div class="button">
                <div class="icon">
                  <i class="fab fa-github"></i>
                </div>
                <span>Github</span>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.age}>
              <p>Age :</p>
              <span>30</span>
            </div>
            <div className={styles.email}>
              <p>Email :</p>
              <span>Examble@gmail.com</span>
            </div>
            <div className={styles.country}>
              <p>Country :</p>
              <span>Egypt</span>
            </div>
            <div className={styles.gender}>
              <p>Gender :</p>
              <span>Male</span>
            </div>
            <div className={styles.role}>
              <p>Role :</p>
              <span>Phorographer</span>
            </div>
            <div className={styles.favorite}>
              <p>Favorite :</p>
              <span>Dark</span>
            </div>
            <div className={styles.state}>
              <p>State :</p>
              <span>GZ</span>
            </div>
            <div className={styles.price}>
              <p>Price :</p>
              <span>$12 / hr</span>
            </div>
          </div>
        </div>
        <div className={styles.posts}>
          <div className={styles.followers}>
            <span>1235</span>
            <p>Followers</p>
          </div>
          <div className={styles.following}>
            <span>1235</span>
            <p>Following</p>
          </div>
          <div className={styles.images}>
            <span>1235</span>
            <p>Images</p>
          </div>
        </div>

        <div className={styles.cards_with_sort}>
          <div className={styles.sorted_by}>
            <div className="head">
              <h2>Enjoy The Collection</h2>
            </div>
            <div className="">
              <label for="time">SortedBY: </label>

              <select id="imgs">
                <option value="dark">Dark Pictures</option>
                <option value="light">Light Pictures</option>
              </select>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cards_item}>
              <div className={styles.images}>
                <img src="./images/shot2.jpg" />
              </div>
              <div class={styles.des}>Weeding dark image</div>
              <div className={styles.more}>
                <button>Show More</button>
              </div>
            </div>

            <div className={styles.cards_item}>
              <div class={styles.images}>
                <img src="./images/shot3.jpg" />
              </div>
              <div class={styles.des}>Weeding dark image</div>
              <div className={styles.more}>
                <button>Show More</button>
              </div>
            </div>
            <div className={styles.cards_item}>
              <div class={styles.images}>
                <img src="./images/shot2.jpg" />
              </div>
              <div class={styles.des}>Weeding dark image</div>
              <div className={styles.more}>
                <button>Show More</button>
              </div>
            </div>
            <div className={styles.cards_item}>
              <div class={styles.images}>
                <img src="./images/shot3.jpg" />
              </div>
              <div class={styles.des}>Weeding dark image</div>
              <div className={styles.more}>
                <button>Show More</button>
              </div>
            </div>
            <div className={styles.cards_item}>
              <div class={styles.images}>
                <img src="./images/shot2.jpg" />
              </div>
              <div class={styles.des}>Weeding dark image</div>
              <div className={styles.more}>
                <button>Show More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default User;
