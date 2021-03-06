import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import Gallery from "../components/Gallery"
import HeaderImg from "../components/HeaderImg"
import headerBg from "./../images/labExp/laboralExpBg.PNG"
import itSuppImg from "./../images/labExp/ciutadella.jpg"
import beablooImg from "./../images/labExp/beabloo-logo.png"
import trampoli from "./../images/labExp/trampoli.jpg"
import lessons from "./../images/labExp/lessons.PNG"

function LaboralExp() {
    const items = [
        {
            itemId: "beabloo-intern",
            title: "Software Developer Internship",
            subtitle: "2019 - 2020",
            description: (
                <Fragment>
                    <p>The internship was done at Beabloo (<a className="link" href="https://www.linkedin.com/company/beabloo/" target="_blank" rel="noreferrer">LinkedIn <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" /></a>)
                        during the third year of my bachelor degree.</p>
                    <p>I was responsible for receiving and solving the system issues the company users faced. If I could not solve the issue, I would escalate it to senior developers.</p>
                    <p>We used a ticket manager system and Jira to manage the issues. I also had to do Quality Assurance of the other developers of my team, as a first filter.</p>
                    <p>After my internship ended, I was hired as a Software Developer.</p>
                </Fragment>
            ),
            headImg: beablooImg
        },
        {
            itemId: "upf-it-support",
            title: "University IT Support",
            subtitle: "2018",
            description: (
                <Fragment>
                    <p>I worked as an IT support at my university, UPF. I was in charge of helping students with the printing system, installing programs, scanning, etc.
                        I also helped the professors with the computers, audio and projectors of their classes.</p>
                    <p>My collegues and I were also responsible for checking the state of the projectors in the University every three months.</p>
                </Fragment>
            ),
            headImg: itSuppImg
        },
        {
            itemId: "trampoline-coach",
            title: "Trampoline Gymnastics Coach",
            subtitle: "Since 2015",
            description: (
                <Fragment>
                    <p>After beeing a gymnast I was asked to work as a gymnastics coach. It has improved my communication skills, time management, and I have become more adaptable.</p>
                    <p>Every session is planned carefuly to imporve childrens skills and values.</p>
                </Fragment>
            ),
            headImg: trampoli
        },
        {
            itemId: "particular-lessons",
            title: "Particular lessons",
            subtitle: "2019-present",
            description: (
                <Fragment>
                    <p>Since 2019, I started giving particular lessons to those who need it. The fields that I have taught the most are: Microsoft Excel and maths.</p>
                    <p>I have used the platform Superprof, a website that connects tutors with students in need of extra training.</p>
                </Fragment>
            ),
            headImg: lessons
        }
    ]

    return (
        <div>
            <HeaderImg img={headerBg} title="Laboral Experience" subtitles={["Beabloo", "Particular Classes", "Gymnastics Coach"]} />
            <Container className="mt-4">
                <div className="text-center text-muted mb-5">
                    <p>Here, we will see my work experience, how I have started and where I have worked</p>
                </div>
                <Gallery items={items} />
            </Container>
        </div>
    )
}

export default LaboralExp