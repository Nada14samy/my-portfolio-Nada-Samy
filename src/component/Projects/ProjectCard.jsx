import { Card, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ item }) => {
    const { t } = useTranslation();
    console.log(item.id)
    return (
        <Col md={4} key={item.id}>
            <Card style={{ width: '100%', backgroundColor: 'transparent', height: "100%", border: "1px solid gray", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
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
    );
};

export default ProjectCard;
