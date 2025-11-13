import "./header.css"
export default function Header() {
    return (
        <div className="headerWrapper">
            <div className="header">
                <div className="headerColLink socialCol">
                    <div className="headerColLinkIcons">
                        <div className="headerColLinkIcon">
                            <a className="headerColLinkIconItem" href="#">
                                <img src="/images/header/tg.svg" className="headerColLinkIconImg"/>
                                <span className="headerColLinkIconText">Наш телеграм</span>
                            </a>
                        </div>

                        <div className="headerColLinkIcon">
                            <a className="headerColLinkIconItem" href="#">
                                <img src="/images/header/vk.svg" className="headerColLinkIconImg"/>
                                <span className="headerColLinkIconText">Мы в ВК</span>
                            </a>
                        </div>
                    </div>
                    
                </div>


                <div className="headerLogoWrapper logoCol">
                    <div className="headerLogo">
                        <a className="headerColLinkItem" href="https://www.argos-kzn.ru/">
                            <img src="/images/header/logo.svg" className="headerLogoImg"/>
                            <span className="headerLogoSlogan">Современные системы безопасности</span>
                        </a>
                    </div> 
                </div>



                <div className="headerColLink aboutUsCol">
                    <div className="headerColLinkIcons">
                        <div className="headerColLinkIcon">
                            <a className="headerColLinkIconItem" href="#">                                
                                <img src="/images/header/home.svg" className="headerColLinkIconImg"/>
                                <span className="headerColLinkIconText">Казань, Седова 2</span>
                            </a>        
                        </div>

                        <div className="headerColLinkIcon">
                            <a className="headerColLinkIconItem" href="#">
                                <img src="/images/header/local.svg" className="headerColLinkIconImg"/>
                                <span className="headerColLinkIconText">Пн-Пт: 8 – 17</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menuWrapper">
                <div className="menu">
                    <div className="menuItem">
                        <div className="menuItemTitleWrapper">
                            <span className="menuItemTitle">Компания ●</span>
                        </div>

                        {/* <div className="submenuWrapper">
                            <div className="submenu">

                                <div className="submenuItemWrapper">
                                    <a className="submenuItemLink" href="#">О нас</a>
                                </div>

                            </div>
                        </div> */}


                    </div>

                    <div className="menuItem">
                        <div className="menuItemTitleWrapper">
                            <span className="menuItemTitle">Услуги для вас ● </span>
                        </div>

                        {/* <div className="submenuWrapper">
                            <div className="submenu">

                                <div className="submenuItemWrapper">
                                    <a className="submenuItemLink" href="#">Об услугах</a>
                                </div>

                                <div className="submenuItemWrapper">
                                    <a className="submenuItemLink" href="#">Видеонаблюдение</a>
                                </div>

                                <div className="submenuItemWrapper">
                                    <a className="submenuItemLink" href="#">Автоматизация парковок</a>
                                </div>

                                <div className="submenuItemWrapper">
                                    <a className="submenuItemLink" href="#">СКУД-системы контроля и управления доступом</a>
                                </div>

                                <div className="submenuItemWrapper">
                                    <a className="submenuItemLink" href="#">Ворота и автоматика</a>
                                </div>

                                <div className="submenuItemWrapper">
                                    <a className="submenuItemLink" href="#">Домофоны: применение и ремонт</a>
                                </div>

                                <div className="submenuItemWrapper">
                                    <a className="submenuItemLink" href="#">Видеодомофон - установка и ремонт</a>
                                </div>

                            </div>
                        </div> */}


                    </div>

                    <div className="menuItem">
                        <div className="menuItemTitleWrapper">
                            <span className="menuItemTitle">Акции</span>
                        </div>
                    </div>

                    <div className="menuItem">
                        <div className="menuItemTitleWrapper">
                            <span className="menuItemTitle">Контакты</span>
                        </div>
                    </div>

                    <div className="menuItem">
                        <div className="menuItemTitleWrapper">
                            <span className="menuItemTitle">Компания</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}