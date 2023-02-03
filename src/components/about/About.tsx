import Marquee from "react-fast-marquee"
import "./about.css"
function About(){
    return(
<div className="about" id="ABOUT">
    <h1 >Saylani Welfare Mass Training & Job Creation Program</h1>
    <Marquee speed={30}gradient={false} >
        <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/313412150_487690046725092_7358493197092744698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q6EDM04qRssAX-ZTw8d&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAAVQeK6xhPL7ZB91yLALti2cxGEke_MqKTTDc-q34aKg&oe=63E2BAAD" alt="" height={300} width={500}/>
        <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/328286875_547371567142235_7203037955879038981_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=D1eA4N80zf0AX-6j_Oe&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfADFXIqW3xMJSKeCZoneFtgr3Zh3iDY3jB34YvwOP3R8Q&oe=63E19470" alt="" height={300} width={500}/>
        <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/265079556_4201307363304577_8657249185693531749_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=MN3x2E2vn5MAX85kSa4&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCcoY1_VR97qt8yogM937cSfi1wNpiMHh8Lk6gokyLRBg&oe=63E10BCB" alt="" height={300} width={500}/>
    </Marquee>
    <p>Saylani Mass IT Training program is an institute who delivers Latest IT education (FREE OF COST) to the
         youth of country to make Pakistan technically strong and to promote Entrepreneurship and startup culture in Pakistan</p>
         <p>Saylani Mass Training Department is one of the Department which is running under Saylani
             Welfare Trust Management. This department is related to Saylani education Board.</p>
</div>
    )
}
export default About