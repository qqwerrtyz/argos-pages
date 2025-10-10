import "./skud.css"

export default function Skud() {
    return (
        <div className="skudWrapper">
            <div className="skud">

                <div className="skudTitleWrapper">
                    <div className="skudTitle">

                        <h1 className="skudTitleHeadline">Эффективный учет рабочего времени</h1>
                        <p className="skudTitleDesc">
                            Независимо от размера компании, учет рабочего времени является неотъемлемой 
                            частью успешного управления. Законодательство также требует от 
                            работодателя вести контроль за временем, которое сотрудники проводят на работе
                        </p>

                        <div className="skudTitleBtns">
                            <a className="skudTitleBtn skudTitleBtnTG" href="#">
                                Написать в <img src="/images/another/tgWhite.svg" className="skudTitleBtnIcon skudTitleBtnIconTG"/> ТГ
                            </a>

                            <a className="skudTitleBtn skudTitleBtnPhone" href="#">
                                <img src="/images/another/phoneYellow.svg" className="skudTitleBtnIcon skudTitleBtnIconPhone"/> Позвонить
                            </a>
                        </div>
                    </div>
                </div>


                <div className="skudAboutUsWrapper">
                    <div className="skudAboutUs">

                        <div className="uslugiHeadlineWrapper">
                            <span className="uslugiHeadline">О нас</span>
                        </div>

                        <div className="skudAboutUsColumns">
                            <div className="skudAboutUsColumn1">

                                <div className="skudAboutUsAdventegesWrapper">
                                    <div className="skudAboutUsAdventege">
                                        <img src="/images/another/xp.svg" className="skudAboutUsIcon"/>
                                        <span className="skudAboutUsTitle">+10 лет опыта</span>
                                    </div>

                                    <div className="skudAboutUsAdventege">
                                        <img src="/images/another/projects.svg" className="skudAboutUsIcon"/>
                                        <span className="skudAboutUsTitle">+500 закрытых проектов</span>
                                    </div>

                                    <div className="skudAboutUsAdventege">
                                        <img src="/images/another/warranty.svg" className="skudAboutUsIcon"/>
                                        <span className="skudAboutUsTitle">1 год гарантии</span>
                                    </div>


                                </div>
                                
                            </div>


                            <div className="skudAboutUsColumn2">
                                <div className="skudAboutUsShorDescWrapper">
                                    <p className="skudAboutUsShorDesc">Мы предлагаем современные и надежные решения для учета рабочего времени, которые помогут вам:</p>

                                    <ul className="skudAboutUsShorDescList">
                                        <li className="skudAboutUsShorDescListItem">Оптимизировать рабочий процесс</li>
                                        <li className="skudAboutUsShorDescListItem">Повысить производственную дисциплину</li>
                                        <li className="skudAboutUsShorDescListItem">Избежать лишних затрат и ошибок в расчетах</li>
                                    </ul>
                             
                                    
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="skudComponentsSystemWrapper">
                    <div className="skudComponentsSystem">
                        <div className="uslugiHeadlineWrapper">
                            <span className="uslugiHeadline">Из чего состоит система?</span>
                        </div>

                        <div className="skudComponentsItems">
                            <div className="skudComponentsItem">
                                <img src="/images/skud/schitivatel.svg" className="skudComponentsItemIcon"/>
                                <span className="skudComponentsItemTitle">Считыватель</span>
                            </div>

                            <div className="skudComponentsItem">
                                <img src="/images/skud/kontroller.svg" className="skudComponentsItemIcon"/>
                                <span className="skudComponentsItemTitle">Контроллер</span>
                            </div>

                            <div className="skudComponentsItem">
                                <img src="/images/skud/provoda.svg" className="skudComponentsItemIcon"/>
                                <span className="skudComponentsItemTitle">Передеча данных</span>
                            </div>

                            <div className="skudComponentsItem">
                                <img src="/images/skud/docs.svg" className="skudComponentsItemIcon"/>
                                <span className="skudComponentsItemTitle">Отчеты</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="intiteTGWrapper">
                    <div className="intiteTG">

                        <div className="intiteTGHeadlineWrapper">
                            <span className="intiteTGHeadline">Нет времени разбираться? Доверьте это нам!</span>
                            <p className="inviteTGDescr">Наш практический опыт помогает избежать типичных ошибок и гарантирует корректную раб
                                оту системы. Кроме того, монтаж специалистами даёт вам дополнительные преимущества по гарантийному 
                                обслуживанию
                            </p>
                        </div>


                        <div className="intiteTGScanWrapper">
                            <div className="inviteTGLinkWrapper">
                                <a className="inviteTGLink" href="https://t.me/Qqwerrtyz">Кликните, чтобы написать в TG</a>
                            </div>

                            <div className="intiteTGQRWrapper">
                                <img className="intiteTGQR" src="/images/another/qrTG.jpg"/>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="skudPrice">
                    <div className="skudPriceWrapper">

                        <div className="skudPriceColumn1">
                            <div className="uslugiHeadlineWrapper">
                                <span className="uslugiHeadline">Наш прайс</span>
                            </div>

                            <div className="skudPriceTarifs">
                                <div className="skudPriceTarif skudPriceTarifBasis">
                                    <div className="skudPriceTarifInfo">
                                        <span className="skudPriceTarifTitle">Установка 1 турникета</span>
                                        <p className="skudPriceTarifPrice">от <strong> 10,000 </strong> руб</p>

                                        <div className="skudPriceTarifDescWrapper">
                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Доставка и комплектация оборудования</span>
                                            </div>

                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Монтаж фундамента и крепление турникета</span>
                                            </div>

                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Электропитание, подключение и ИБП</span>
                                            </div>

                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Установка контроллера и считывателя</span>
                                            </div>

                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Пусконаладка, тестирование и обучение</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skudPriceTarifBtns">
                                        <a className="skudPriceTarifBtn skudPriceTarifBtnTG" href="#">
                                            Написать в <img className="skudPriceTarifBtnIcon skudPriceTarifBtnIconTG" src="/images/another/tgWhite.svg"/> тг
                                        </a>

                                        <a className="skudPriceTarifBtn skudPriceTarifBtnPhone" href="#">
                                            <img className="skudPriceTarifBtnIcon skudPriceTarifBtnIconPhone" src="/images/another/phoneYellow.svg"/> Позвонить
                                        </a>
                                    </div>
                                    
                                </div>

                                <div className="skudPriceTarif skudPriceTarifBasis">
                                    <div className="skudPriceTarifInfo">
                                        <span className="skudPriceTarifTitle">Установка системы СКУД</span>
                                        <p className="skudPriceTarifPrice">от <strong> 20,000 </strong> руб</p>

                                        <div className="skudPriceTarifDescWrapper">
                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Закупка и проверка оборудования</span>
                                            </div>

                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Устройство оснований и крепление турникетов</span>
                                            </div>

                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Прокладка кабелей и питание</span>
                                            </div>

                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Монтаж контроллеров и считывателей</span>
                                            </div>

                                            <div className="skudPriceTarifDescItem">
                                                <img src="/images/skud/chek.svg" className="skudPriceTarifDescItemCheck"/>
                                                <span className="skudPriceTarifDescItemTitle">Настройка ПО, тестирование, обучение</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skudPriceTarifBtns">
                                        <a className="skudPriceTarifBtn skudPriceTarifBtnTG" href="#">
                                            Написать в <img className="skudPriceTarifBtnIcon skudPriceTarifBtnIconTG" src="/images/another/tgWhite.svg"/> тг
                                        </a>

                                        <a className="skudPriceTarifBtn skudPriceTarifBtnPhone" href="#">
                                            <img className="skudPriceTarifBtnIcon skudPriceTarifBtnIconPhone" src="/images/another/phoneYellow.svg"/> Позвонить
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="skudPriceColumn2">
                            <div className="skudPriceServiceWrapper">

                                <div className="skudPriceService">
                                    <div className="skudPriceServiceHeadlineWrapper">
                                        <span className="skudPriceServiceHeadline">Обслуживание системы СКУД</span>
                                        <span className="skudPriceServicePrice">от <strong> 4,900 </strong>руб</span>
                                    </div>

                                    <div className="skudPriceServiceDescItems">
                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Плановое ТО и диагностика предотвращают простои</span>
                                        </div>

                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Смазка и обслуживание механики продлевают срок службы</span>
                                        </div>

                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Обновление ПО и прошивок повышает безопасность</span>
                                        </div>

                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Экстренный выезд инженера — быстрый ремонт</span>
                                        </div>

                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Проверка электропитания и ИБП предотвращает простои</span>
                                        </div>

                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Тесты интеграции СКУД, видеонаблюдения и ПО</span>
                                        </div>

                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Антикоррозийная обработка для уличных турникетов и шлагбаумов</span>
                                        </div>

                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Запасные части и расходники всегда в наличии</span>
                                        </div>

                                        <div className="skudPriceServiceDescItemWrapper">
                                            <img src="/images/skud/chek.svg" className="skudPriceServiceDescItemCheck"/>
                                            <span className="skudPriceServiceDescItem">Отчётность и журнал событий для анализа и оптимизации</span>
                                        </div>
                                    </div>

                                    <div className="skudPriceTarifBtns">
                                        <a className="skudPriceTarifBtn skudPriceTarifBtnTG" href="#">
                                            Написать в <img className="skudPriceTarifBtnIcon skudPriceTarifBtnIconTG" src="/images/another/tgWhite.svg"/> тг
                                        </a>

                                        <a className="skudPriceTarifBtn skudPriceTarifBtnPhone" href="#">
                                            <img className="skudPriceTarifBtnIcon skudPriceTarifBtnIconPhone" src="/images/another/phoneYellow.svg"/> Позвонить
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}