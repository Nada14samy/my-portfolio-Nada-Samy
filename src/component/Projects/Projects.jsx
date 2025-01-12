import { Container , Row , Col, Card ,Tab ,Tabs  } from "react-bootstrap";
import {ProjectsDataStatic , ProjectsDataJS , ProjectsDataReact , AllProjectData} from "../../component/Projects/ProjectsData";
import "./Projects.css";

import { useTranslation } from "react-i18next";

const Projects = () => {
    const {t} = useTranslation();
    
    const showSkillsAll = AllProjectData.map((item)=>{
        return(
            <Col md={4} key={item.id}>
                <Card style={{ width: '100%' , backgroundColor: 'transparent', height: "100%",border: "1px solid gray", display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body style={{ flex: 1 }}>
                        <Card.Title>{item.NameProject}</Card.Title>
                        <Card.Text>
                             {t(item.discription)}
                        </Card.Text>
                        <Card.Text >
                            <strong>{t("technologiesTitle")}</strong>
                            <ul className="tech-project">
                                {item.tech.map((tech, index) => (
                                    <li key={index}>{t(`technologies.${tech}`)}</li>
                                ))}
                            </ul>
                        </Card.Text>
                        <a className="link-card" target="_blank" href={item.link}>{t("viewProject")}</a>
                    </Card.Body>
                </Card>
            </Col>
        )
    });

  return (
    <>
        <section className="projects" id="project">
            <Container>
            <Tabs
                defaultActiveKey="all"
                transition={false}
                id="noanim-tab-example"
                className="mb-5"
                >
                    <Tab eventKey="all" title={t("all")}>
                        <Row>
                            {showSkillsAll}
                        </Row>
                    </Tab>
                    <Tab eventKey="react" title={t("react")}>
                        <Row>
                            {ProjectsDataReact.map((item)=>{
        return(
            <Col md={4} key={item.id}>
                <Card style={{ width: '100%' , backgroundColor: 'transparent', height: "100%",border: "1px solid gray", display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body style={{ flex: 1 }}>
                        <Card.Title>{item.NameProject}</Card.Title>
                        <Card.Text>
                             {t(item.discription)}
                        </Card.Text>
                        <Card.Text >
                            <strong>{t("technologiesTitle")}</strong>
                            <ul className="tech-project">
                                {item.tech.map((tech, index) => (
                                    <li key={index}>{t(`technologies.${tech}`)}</li>
                                ))}
                            </ul>
                        </Card.Text>
                        <a className="link-card" target="_blank" href={item.link}>{t("viewProject")}</a>
                    </Card.Body>
                </Card>
            </Col>
        )
    })}
                        </Row>
                    </Tab>
                    <Tab eventKey="javascript" title={t("js")}>
                        <Row>
                           no data
                        </Row>
                    </Tab>
                    <Tab eventKey="static" title={t("staticTemplate")}>
                        <Row>
                            {
                                ProjectsDataStatic.map((item)=>{
                                    return(
                                        <Col md={4} key={item.id}>
                                            <Card style={{ width: '100%' , backgroundColor: 'transparent', height: "100%",border: "1px solid gray", display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                                                <Card.Img variant="top" src={item.image} />
                                                <Card.Body style={{ flex: 1 }}>
                                                    <Card.Title>{item.NameProject}</Card.Title>
                                                    <Card.Text>
                                                         {t(item.discription)}
                                                    </Card.Text>
                                                    <Card.Text >
                                                        <strong>{t("technologiesTitle")}</strong>
                                                        <ul className="tech-project">
                                                            {item.tech.map((tech, index) => (
                                                                <li key={index}>{t(`technologies.${tech}`)}</li>
                                                            ))}
                                                        </ul>
                                                    </Card.Text>
                                                    <a className="link-card" target="_blank" href={item.link}>{t("viewProject")}</a>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Tab>
            </Tabs>
            </Container>
        </section>
    </>
  )
}

export default Projects;