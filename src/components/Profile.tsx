import React from "react";
import "./Profile.css";


const Profile = () => {
    return (
        <div className="content">
            <div className="content-img">
            </div>
            <div className="wrapper-user">
                <div className="user-img">
                    <img src="https://www.shkolazhizni.ru/img/content/i233/233106_or.jpg" alt="cat"/>
                </div>
                <div className="user-info">
                    <h3 className="user-title">Diana B.</h3>

                    <div className="user-description">
                      <a className="item"><p>Date of Birth: 24 february</p></a>
                      <a className="item"><p>City: Minsk</p></a>
                      <a className="item"><p>Education: VSU'19</p></a>
                      <a className="item"> <p>Web Site: in process</p></a>
                    </div>
                </div>
            </div>
            <div>My posts
                <div>New post</div>
            </div>
            <div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
                <div>
                    Post 3
                </div>
            </div>
        </div>
    )
}

export default Profile;
