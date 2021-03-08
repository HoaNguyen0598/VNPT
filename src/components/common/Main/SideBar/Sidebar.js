import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { SIDEBAR_MENU_DATA, NOT_MENU_URL } from 'contant';
import Profile from './Profile';

const SideBar = (props) => {
    const { handleHover } = props;
    const [activeSidebar, setActiveSidebar] = useState();
    const { t: translate } = useTranslation('menu');
    const location = useLocation();
    const ref = useRef();

    //  Run first time
    useEffect(() => {
        // TODO: Refactor later when has multi menuitem
        const currentPathname = location.pathname;
        if (currentPathname && currentPathname !== '/') {
            if (currentPathname.split('/').length) {
                const mainPath = currentPathname.split('/')[1];
                const firstParrentActive = [...SIDEBAR_MENU_DATA].find(item => item.children ? item.children.find((ele) => ele.url && ele.url.includes(mainPath)) : false);
                if (firstParrentActive) {
                    setActiveSidebar(firstParrentActive.id);
                }
            }
        }
    }, [])

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                const icon_open = document.getElementById('icon_open');
                let showSideBarClass = document.getElementsByClassName('show-sidebar');
                if (showSideBarClass.length > 0 && icon_open !== null) {
                    console.log({ icon_open });
                    icon_open.setAttribute('id', 'icon_close');
                    showSideBarClass[0].classList.remove("show-sidebar");
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const onMenuClick = (_e, id) => {
        setActiveSidebar(id);
    }
    return (
        <aside
            ref={ref}
            className="left-sidebar "
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}>
            {/* <Profile /> */}
            {/* Sidebar scroll*/}
            <div className="Header_logo">
                <a href="">
                    <img className="Header_logo-img" src="https://ekyc.vnpt.vn/admin-dashboard/assets/img/logo_ekyc.svg" />
                </a>
            </div>
            <div className="scroll-sidebar ">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {
                            SIDEBAR_MENU_DATA.map((mi, index) => (
                                <li key={index} className={`sidebar-item ${mi.children && mi.id === activeSidebar ? 'active' : ''}`}>
                                    {mi.children ?
                                        <>
                                            <a
                                                className={`sidebar-link ${mi.children ? 'has-arrow' : ''}`} onClick={(e) => onMenuClick(e, mi.id)}
                                            >
                                                <i className={`fas ${mi.iconName}`} />
                                                <span className="hide-menu"> {translate(mi.label)} </span>
                                            </a>
                                            <ul className="collapse first-level base-level-line">
                                                {
                                                    mi.children.map((mic, index) => (
                                                        <li key={index} className="sidebar-item">
                                                            <NavLink className="sidebar-link" to={mic.url}>
                                                                <i className={`las ${mic.iconName}`} />
                                                                <span className="hide-menu">{translate(mic.label)}</span>
                                                            </NavLink>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </> :
                                        <NavLink
                                            exact={mi.url === '/'}
                                            className={`sidebar-link ${mi.children ? 'has-arrow' : ''}`} to={mi.url} onClick={(e) => onMenuClick(e, mi.id)}
                                        >
                                            <i className={`las ${mi.iconName}`} />
                                            <span className="hide-menu"> {translate(mi.label)} </span>
                                        </NavLink>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </aside >
    )
}

export default SideBar;