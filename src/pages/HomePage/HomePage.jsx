import React from "react";
import './HomePage.css'

function abrirmenu(){
    document.getElementById("menu").style.height = "110px";
    
    setTimeout(function(){
    document.getElementById("menu").style.height = "";}
    ,2000);
}

const HomePage = () => {
    return (
        <>
        <nav>

<img src='/img/logo.svg' alt="logo"/>

<a href="https://femcoders.factoriaf5.org/">DOWNLOAD</a>
<div className="botonnav" onClick={abrirmenu}>EXTRA</div>
<div className="botonnav">SCREEN</div>
<div className="botonnav">FEATURES</div>
<div className="botonnav">DESCRIPTION</div>

<div id="menu" >
<div>ARTICLE DETAILS</div>
<div>TERMS CONDITIONS</div>
<div>PRIVACY POLICY</div>
</div>
</nav>

<header>

    <img id="triangulo" src="/img/decorative-green-diamond.svg" alt="foto"/>
    <img id="redonda" src="/img/decorative-yellow-circle.svg" alt="foto"/>

    <br/><br/>
    <h1>Mobile App Landing Page</h1>
    <h2 className="haches2">Start focusing on your goals and get more things done with Sync mobile application. It's
        the first app to harness the power of social connections to help you stay focused and get
        organized
        </h2>
        <br/>
    <div id="botonheader1"><img className="cl" src="/img/a.png" alt="foto"/>DOWNLOAD</div>
    <div><img className="cl" src="/img/g.png" alt="foto"/>DOWNLOAD</div>
    <br/><br/><br/>
    <img id="jocoso" src="/img/decorative-blue-circle.svg" alt="foto"/>
    <img src="/img/header-iphone.png" alt="foto"/>
</header>


<section id="s1">
    <article id="s1a1">
        <img src="/img/grupo-de-chat.png" alt="foto"/>
        <p>Identify Goals</p>
    </article>
    <article>
        <img src="/img/codificacion.png" alt="foto"/>
        <p>Situation Analysis</p>
    </article>
    <article>
        <img src="/img/ajuste.png" alt="foto"/>
        <p>Tasks Settings</p>
    </article>
    <article>
        <img src="/img/bocadillo.png" alt="foto"/>
        <p>Social Interaction</p>
    </article>
    <article id="s1a5">
        <img src="/img/cohete.png" alt="foto"/>
        <p>Get Things Done</p>
    </article>
</section>

<section className="sg">
    <img src="/img/description-1-app.png" alt="foto"/>
    <article>
        <h2>Organize Your Time
            And Start Getting
            Results</h2>
        <p id="sg1p">Sync is the first mobile app on the market to harness the
            power of social connections to help you stop procrastinating
            and start getting things done. Give it a try and see the
            changes right away</p>
            <ul id="cuadradas">
                <li>Analyse and evaluate your current status and productivity</li><br/>
                <li>Begin monitoring your day to day routine with Sync app</li><br/>
                <li>See the improved results in no more than a couple of
                    weeks</li><br/>
            </ul>
        <div className="botonarticle">LIGHTBOX</div>
    </article>
</section>

<section id="sg2" className="sg">
    <article>
    <div id="cajitasazules">
        <div id="ca1" className="cc5">Schedule</div>
        <div id="ca2">Tracking</div>
        <br/>
        <div id="ca3" className="cc5">Organize</div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
        <p>Schedule tasks to keep track of their completion. Sync
            provides multiple scheduling options including alarms and
            reminders.</p>
        <ul id="realizada">
            <li>You can always add new tasks or change the settings of
                    existing ones in your calendar view or the app control
                    panel
            </li><br/>
            <li>It's easy to stay focused on your most important daily
                    activities that will get you closer to meeting your goals</li><br/>
            <li>Use phone reminders to free up your long term memory
                    Which will reduce stress and make you more productive</li><br/>
        </ul>
        <div className="botonarticle" id="ba1">TERMS</div>
        <div className="botonarticle" id="ba2">PRIVACY</div>
    </article>
    <img src="/img/description-2-app.png" alt="foto"/>
</section>

<section id="blanca">Special Features</section>
<br/><br/>
<section className="estrellitas">
    <h2>User Testimonials</h2>
    <br/>
    <article className="cea1">
        <img className="pestrella" src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <br/>
        <br/>
        <hr/>
        <p className="pgris">I love using Sync for my personal
            development needs. lt meets all my
            requirements and it actually helps a lot
            with focusing skill.
            </p>
        <p className="pnegrita">Rick Jones - Designer
        </p>
    </article>
    <article>
        <img className="pestrella" src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <br/>
        <br/>
        <hr/>
        <p className="pgris">After trying out a large number of
            personal coaching apps | decided to give
            sync a try and what a wonderful surprise
            it was.
            </p>
        <p className="pnegrita">Lynda Marquez - Developer</p>
    </article>
    <article className="cea3">
        <img className="pestrella" src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <br/>
        <br/>
        <hr/>
        <p className="pgris">Never dreamed | could learn so fast how
            to focus on my personal goals and
            improve my life to levels | never thought
            possible.
            </p>
        <p className="pnegrita">Jay Frisco - Marketer
        </p>
    </article>
</section>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div id="formal">
    <div>
        <img id="formalin" src="/img/customer-logo-1.png" alt="foto"/>
        <img src="/img/customer-logo-2.png" alt="foto"/>
        <img src="/img/customer-logo-3.png" alt="foto"/>
        <img src="/img/customer-logo-4.png" alt="foto"/>
    </div>
    <div>
        <img id="formalu" src="/img/customer-logo-5.png" alt="foto"/>
    </div>
</div>
<br/><br/>
<section className="estrellitas">
    <article className="cea1">
        <img className="pestrella" src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <br/>
        <br/>
        <hr/>
        <p className="pgris">I got so much value from using Sync in
            my daily life for which | am very grateful
            and would recommend it to everybody</p>
        <p className="pnegrita">Frank Gibson - Manager
        </p>
    </article>
    <article>
        <img className="pestrella" src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <br/>
        <br/>
        <hr/>
        <p className="pgris">If you have great goals but can't figure
            out a way to keep focused then you
            should definitely give Sync a try and see
            the results</p>
        <p className="pnegrita">Rita Longmile - Designer</p>
    </article>
    <article>
        <img className="pestrella" src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <img src="/img/estrella.png" alt="foto"/>
        <br/>
        <br/>
        <hr/>
        <p className="pgris">!'ve been looking for a great organizer
            app for such a long time but now |! am
            really happy that 1 found Sync. It's beeen
            working great
            </p>
        <p className="pnegrita">Jones Smith - Developer
        </p>
    </article>
</section>

<section id="s2">
    <article id="s2a1">
        <img src="/img/grupo-de-chat.png" alt="foto"/>
        <p className="s2p1">231</p>
        <p className="s2p2">Happy Users</p>
    </article>
    <article>
        <img src="/img/codificacion.png" alt="foto"/>
        <p className="s2p1">385</p>
        <p  className="s2p2">Issues Solved</p>
    </article>
    <article>
        <img src="/img/ajuste.png" alt="foto"/>
        <p className="s2p1">159</p>
        <p  className="s2p2">Good Reviews</p>
    </article>
    <article>
        <img src="/img/bocadillo.png" alt="foto"/>
        <p className="s2p1">127</p>
        <p  className="s2p2">Case Studies</p>
    </article>
    <article>
        <img src="/img/cohete.png" alt="foto"/>
        <p className="s2p1">211</p>
        <p  className="s2p2">Orders Received</p>
    </article>
</section>

<div id="espejo">

    <img id="reflejin" src="/img/download-iphone.png" alt="foto"/>
    <img id="jocosin" src="/img/decorative-blue-circle.svg" alt="foto"/>

    <h2 className="haches2">Do you feel like you're wasting time with small stuff instead of working towards your goals? Start
        using Sync to organize your time and get a grip on your personal development
        </h2>
    <br/>
    <div id="botonespejo1"><img className="cl" src="/img/a.png" alt="foto"/>DOWNLOAD</div>
    <div><img className="cl" src="/img/g.png" alt="foto"/>DOWNLOAD</div>

</div>

<div id="raya"></div>

<footer>
    <div>
        <h3>Contact Info</h3>
        <p>22 Innovation Street, CA, US</p>
        <p>officeOsyncmobile.com</p>
        <p>+44 376 945 23</p>
    </div>
    <div>
        <h3>Value Links</h3>
        <p>Terms 8: Conditions</p>
        <p>Privacy Policy</p>
        <p>Article Details</p>
    </div>
    <div>
        <h3>Other Apps</h3>
        <p>Scientific Calculator</p>
        <p>Advanced Timer</p>
        <p>Music Store</p>
    </div>

    <div id="final">
        <img src="/img/f.png" alt="foto"/>
        <img src="/img/t.png" alt="foto"/>
        <img src="/img/p.png" alt="foto"/>
        <img src="/img/i.png" alt="foto"/>
    </div>
</footer>

<p id="copi">Copyright 2020 Inovatik - All rights reserved</p>  
        </>
    )
}

export default HomePage;