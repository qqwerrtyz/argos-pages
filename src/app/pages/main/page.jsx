import "./main.css"
export default function Main() {
    return (
        <>
            <div className="mainTitleWrapper">
                <div className="mainTitle">
                    <div className="mainTitleCol1">
                        <div className="titleAndSubtitle">
                            <h1 className="mainTitleTitle">
                                Сложные системы безопасности с простым <span className="mainTitleTitleLittlePath">человеческим отношением</span>
                            </h1>
                            <p className="mainTitleSubtitle">Решаем вашу задачу на 100%, потому что для нас это дело принципа, а не просто работа. Гарантия до 5 лет</p>
                        </div>

                        <div className="titleMainImageWrapper">
                            <img className="titleMainImage" src="/images/main/title.jpg"/>
                        </div>
                    </div>

                    <div className="mainTitleCol2">

                        <div className="mainTitleFeedbackWrapper">
                            <div className="mainTitleTgHeadlineWrapper">
                                <span className="mainTitleTgHeadline">Напишите свой вопрос и получите список всех решений</span>
                            </div>
                            
                            <div className="mainTitleQrTgWrapper">
                                <div className="mainTitleQrImageWrapper">
                                    <a href="https://t.me/ArgosContact"><img className="mainTitleQrImage" src="/images/another/qrTG.jpg"/></a>
                                </div>

                                <a className="mainTitleLinkToTg" href="https://t.me/ArgosContact">
                                    <img className="mainTitleIconTg" src="/images/another/tgYellow.svg"/> Написать в телеграм
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="whyRecomendedWrppaer">
                <div className="whyRecomended">

                    <div className="whyRecomendedHeadlineWrapper">
                        <span className="whyRecomendedHeadline">Почему 9 из 10 клиентов рекомендуют нас своим партнерам?</span>
                    </div>

                    <div className="whyRecomendedItems">

                        <div className="whyRecomendedItem">
                            <div className="whyRecomendedItemHeadlineWrapper">
                                <span className="whyRecomendedItemUnderHeadline">Экспертиза изнутри</span>
                                <span className="whyRecomendedtemHeadline">Основатель – практик с 14-летним опытом</span>
                            </div>

                            <div className="whyRecomendedtemDescWrapper">
                                <p className="whyRecomendedtemDesc">
                                    Наш директор сам прошел путь от монтажника до руководителя. Он и вся наша команда глубоко понимают каждый винтик в системе. Вы получаете не просто «услугу», а решение от людей, которые знают все технические нюансы
                                </p>
                            </div>
                        </div>

                        <div className="whyRecomendedItem">
                            <div className="whyRecomendedItemHeadlineWrapper">
                                <span className="whyRecomendedItemUnderHeadline">Работаем по совести</span>
                                <span className="whyRecomendedtemHeadline">Честность и ответственность - наш кодекс</span>
                            </div>

                            <div className="whyRecomendedtemDescWrapper">
                                <p className="whyRecomendedtemDesc">
                                    Для нас нет «мелких» договоренностей. Мы честны в сметах, пунктуальны в сроках и несем полную ответственность за каждый проект. Ваше спокойствие - наша репутация
                                </p>
                            </div>
                        </div>

                        <div className="whyRecomendedItem">
                            <div className="whyRecomendedItemHeadlineWrapper">
                                <span className="whyRecomendedItemUnderHeadline">Гибкость и инициатива</span>
                                <span className="whyRecomendedtemHeadline">Ищем решение, а не отговорки</span>
                            </div>

                            <div className="whyRecomendedtemDescWrapper">
                                <p className="whyRecomendedtemDesc">
                                    Стандартные задачи решают все. Мы же беремся за сложное и нестандартное. Наша команда готова жертвовать личным временем, чтобы найти выход и соблюсти ваши интересы
                                </p>
                            </div>
                        </div>

                        <div className="whyRecomendedItem">
                            <div className="whyRecomendedItemHeadlineWrapper">
                                <span className="whyRecomendedItemUnderHeadline">Гибкость и инициатива</span>
                                <span className="whyRecomendedtemHeadline">Ищем решение, а не отговорки</span>
                            </div>

                            <div className="whyRecomendedtemDescWrapper">
                                <p className="whyRecomendedtemDesc">
                                    Стандартные задачи решают все. Мы же беремся за сложное и нестандартное. Наша команда готова жертвовать личным временем, чтобы найти выход и соблюсти ваши интересы
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}