import "./styles.css"
export default function Contact() {
    return (
        <>

            <div class="contactPageWrapper">


                <div class="contentWrapper">
                    <div class="contactDataAndMap">
                        <div class="contactDataWrapper">

                            <a class="contactDataItemWrapper" href="https://yandex.ru/maps/-/CLunvB5Q">
                                <div class="contactDataItem">

                                    <div class="dataIconWrapper">
                                        <img class="dataIcon" src="/images/icons/geo.svg" />
                                    </div>

                                    <div class="dataInfo">
                                        <span class="dataTitle">Адрес</span>
                                        <span class="dataDesc">Казань, ул. Седова д. 2</span>
                                    </div>

                                </div>
                            </a>

                            <a class="contactDataItemWrapper" href="tel:+78432597991">
                                <div class="contactDataItem">

                                    <div class="dataIconWrapper">
                                        <img class="dataIcon" src="/images/icons/phone.svg" />
                                    </div>

                                    <div class="dataInfo">
                                        <span class="dataTitle">Телефоны</span>
                                        <span class="dataDesc">+7 843 259 79 91, 92</span>
                                    </div>

                                </div>
                            </a>

                            <a class="contactDataItemWrapper" href="mailto:info@argos-kzn.ru">
                                <div class="contactDataItem">

                                    <div class="dataIconWrapper">
                                        <img class="dataIcon" src="/images/icons/mail.svg" />
                                    </div>

                                    <div class="dataInfo">
                                        <span class="dataTitle">Почта</span>
                                        <span class="dataDesc">info@argos-kzn.ru</span>
                                    </div>

                                </div>
                            </a>

                            <a class="contactDataTimeWrapper" href="mailto:info@argos-kzn.ru">
                                <div class="contactDataItem">

                                    <div class="dataIconWrapper">
                                        <img class="dataIcon" src="/images/icons/time.svg" />
                                    </div>

                                    <div class="dataInfo">
                                        <span class="dataTitle">Время работы</span>
                                        <span class="dataDesc">Пн-Пт, 8 – 17</span>
                                    </div>

                                </div>
                            </a>

                        </div>

                        <div class="contactMapWrapper">
                            <iframe class="contactMap"
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A01dde1ec32ac14fda884139cbff17f7ce903edae93660110cc6ced84999e6a5e&amp;source=constructor"
                                width="500" height="320" frameborder="0"></iframe>
                        </div>
                    </div>

                    <div class="callArgosWrapper">
                        <a class="callArgos" href="tel:+78432597991">Связаться</a>
                    </div>
                </div>

            
            </div>
        </>
    )
}
