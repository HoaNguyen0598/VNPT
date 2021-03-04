import React, { useEffect } from 'react';
import { getLocalStore } from '../../../../functions/Utils'
import { userAction } from 'store/action'
import { useDispatch, useSelector } from 'react-redux';
import Popover from 'components/base/Popover'
import { PAGES_URL } from 'contant';
import { Link } from 'react-router-dom';

const Profile = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(userAction.loadUserProfile());
    // }, [])
    // const userProfile = useSelector((state) => state.userReducer.userProfile);
    // const user = userProfile.success ? userProfile.data : [];
    const user = {};
    return (
        <div className="user-profile ">
            {/* {userProfile.success && */}
            <div className="avartar ">
                <div className="dropdown sub-dropdown">
                    <button className="profile-pic rounded-circle position-relative"
                        type="button"
                        style={{ backgroundImage: `url(${user.avatar})` }}
                    >
                        <span className="badge rounded-circle badge-success profile-dd text-center ">
                            <i className="fa fa-angle-down text-white" />
                        </span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/">
                            <i className="fa fa-circle " /> Admin
                        </a>
                    </div>
                </div>
            </div>
            {/* } */}
            <div className="profile ">
                <p className="name ">{user.full_name}</p>
                <p className="position ">{user.position_role_name}</p>
                <div className="actions">
                    <div className="item dropdown">
                        <a className="actions_item">
                            <i className="icon las la-bell" />
                            <i className="badge-noti" id="user_count_notifications">9+</i>
                        </a>
                        <div className="dropdown-menu mailbox" style={{ transform: 'translate3d(20px, 60px, 0px) !important' }}>
                            <ul className="list-style-none">
                                <li>
                                    <div className="drop-title">
                                        <h5 className="title uni_text_6d30ab ml-2">New Messages</h5>
                                    </div>
                                </li>
                                <li>
                                    <a className="all_messages">
                                        <strong className="uni_text_6d30ab">View All</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item dropdown">
                        <Popover
                            children={
                                <div className="actions_item" style={{ cursor: 'pointer' }}>
                                    <i className="icon las la-cog" />
                                </div>
                            }
                            content={
                                <div>
                                    <p>
                                        <Link to={PAGES_URL.users_profile} style={{ color: '#6c757d' }}>
                                            <i className="las la-user-alt uni_text_6d30ab mr-2 fs-17" />
                                        Profile
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to='' style={{ color: '#6c757d' }}>
                                            <i className="las la-bell uni_text_6d30ab mr-2 fs-17" />
                                            Notification
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to={PAGES_URL.change_password} style={{ color: '#6c757d' }}>
                                            <i className="las la-exclamation-circle uni_text_6d30ab mr-2 fs-17" />
                                            Change Password
                                        </Link>
                                    </p>
                                </div>
                            }
                            placement={'bottomLeft'}
                        />
                    </div>
                    <div className="item dropdown">
                        <a className="actions_item" href="/xxx" role="button" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                            <i className="icon lar la-comment-alt" />
                            <i className="badge-noti" id="count_noti">0</i>
                        </a>
                        <div className="dropdown-menu chatbox" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(30px, 55px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                            <div className="drop-title uni_text_6d30ab">
                                <h5 className="title uni_text_6d30ab ml-2">New Messages</h5>
                            </div>
                            <ul className="list-style-none" id="popup_chat_notification">
                            </ul>
                            <div className="all_messages">
                                <a href="/xxx">
                                    <strong className="uni_text_6d30ab">View All</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile;