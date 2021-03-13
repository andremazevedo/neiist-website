import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const LandingPageSection = ({ title, body_text, button_text }) =>
  <section style={{
    height: "100vh",
    alignContent: "center"
  }}>
    <div style={{
      verticalAlign: "middle",
      color: "white",
      textAlign: "left",
      paddingLeft: "60px",
      paddingRight: "60px"
    }}>
      <h1 style={{
        fontSize: "3.5rem",
        fontWeight: "bold"
      }}>
        {title}
      </h1>
      <p style={{
        fontSize: "1.4rem",
        whiteSpace: "pre-wrap",
        lineHeight: "normal"
      }}>
        {body_text}
      </p>
      <Button color="primary">{button_text}</Button>
    </div>
  </section>

const LandingPage = () =>
  <>
    <NavBar />
    <div style={{ backgroundColor: "#1c2d39", display: "flex", justifyContent: "center" }}>
      <svg
        style={{
          width: "30vw",
          height: "auto"
        }}
        fill="white"
        viewBox="0 0 500 500">
        <path d="M190.78,330.2V239.46H117.59v39h33.94V287A43.78,43.78,0,0,1,137,294a48.19,48.19,0,0,1-15.82,1.5,45.54,45.54,0,0,1-15.47-3.93,44.6,44.6,0,0,1-13.5-9.35,45.85,45.85,0,0,1,0-65.1,44.19,44.19,0,0,1,15.23-10,46.45,46.45,0,0,1,34.64,0,44.19,44.19,0,0,1,15.23,10L185,189.36a82.78,82.78,0,0,0-28.17-18.7,85.63,85.63,0,0,0-64.18,0,82.78,82.78,0,0,0-28.17,18.7,81.15,81.15,0,0,0-18.58,28.17,87.66,87.66,0,0,0-6.12,32.09,86.78,86.78,0,0,0,6.12,32,81.43,81.43,0,0,0,18.58,28,82.78,82.78,0,0,0,28.17,18.7,86.33,86.33,0,0,0,32.09,6.23,88.69,88.69,0,0,0,13.51-1,71.06,71.06,0,0,0,13.27-3.34Z" /><polygon points="460.21 203.91 460.21 164.89 351.47 165.12 351.47 334.35 460.21 334.35 460.21 295.33 390.49 295.33 390.49 268.55 447.05 268.55 447.05 229.53 390.49 229.53 390.49 203.91 460.21 203.91" /><path d="M325.26,77.36h0A35.67,35.67,0,0,1,360.93,113v.68a13.71,13.71,0,0,0-9.46,13v31.51h39.25V126.74a13.72,13.72,0,0,0-9.18-12.93V113a56.28,56.28,0,0,0-56.28-56.28h0A56.29,56.29,0,0,0,269,113v52.52a88,88,0,0,0-18.39,5.11,82.78,82.78,0,0,0-28.17,18.7,83.67,83.67,0,0,0-18.36,27.36,86.63,86.63,0,0,0,0,65.11,86.23,86.23,0,0,0,18.36,27.59A81.43,81.43,0,0,0,250.46,328,88,88,0,0,0,269,333.05v47.78a43.82,43.82,0,0,1-43.82,43.83h0a43.83,43.83,0,0,1-43.83-43.83v-.68a13.69,13.69,0,0,0,9.46-13V337.07H151.53v30.06a13.7,13.7,0,0,0,9.18,12.92v.78a64.44,64.44,0,0,0,64.44,64.44h0a64.44,64.44,0,0,0,64.44-64.44v-47A86.16,86.16,0,0,0,314.53,328a81.73,81.73,0,0,0,27.93-18.58L315,281.71a43.83,43.83,0,0,1-15.24,10,46.93,46.93,0,0,1-17.31,3.35,46,46,0,0,1-17.2-3.35,44.24,44.24,0,0,1-15.13-10,48.2,48.2,0,0,1-9.92-14.89,44.27,44.27,0,0,1-3.47-17.43,45.15,45.15,0,0,1,3.47-17.55,47.86,47.86,0,0,1,9.92-15,44.41,44.41,0,0,1,15.13-10.05,46.22,46.22,0,0,1,17.2-3.35,47.13,47.13,0,0,1,17.31,3.35A44,44,0,0,1,315,216.84l27.47-27.48a83.08,83.08,0,0,0-28-18.7,85.73,85.73,0,0,0-24.82-5.92V113A35.67,35.67,0,0,1,325.26,77.36Zm38.47,63h1.07v-1.63a3.55,3.55,0,0,1,1.24-3l2.87-2.68c.86-.76.92-1.14.93-1.15v-5.72a3.46,3.46,0,0,1,1-6.68,3.57,3.57,0,0,1,2.7,1,3.84,3.84,0,0,1,.94,2.56,3.39,3.39,0,0,1-2.14,3.12v.71c0,1.23.34,1.49.34,1.49l.22,0,0,.11,3.08,2.93a3,3,0,0,1,1.22,2.62v2.36a1.66,1.66,0,0,1,.58.37,2.31,2.31,0,0,1,.2.24c.46.14.45.65.43,1.44a2.34,2.34,0,0,1-.72,1.71,2.53,2.53,0,0,1-1.75.62,2.29,2.29,0,0,1-1.12-4.22v-1.25a3.53,3.53,0,0,0-.32-1.92l-.13-.1-2.13-1.94v14.72h1.93l-3.15,5.37-3.15-5.3h1.85V135.57c-.81.75-1.81,1.68-2.11,2a1.42,1.42,0,0,0-.4.78v2h1.07V145h-4.59ZM178.52,353.5h-1.07v1.63a3.6,3.6,0,0,1-1.24,3l-2.87,2.67c-.86.77-.92,1.15-.92,1.15v5.73a3.45,3.45,0,0,1-1,6.67,3.54,3.54,0,0,1-2.7-1,3.84,3.84,0,0,1-.94-2.56,3.39,3.39,0,0,1,2.14-3.11V367c0-1.23-.34-1.48-.34-1.49l-.22,0,0-.11-3.08-2.93a3,3,0,0,1-1.22-2.61v-2.37a1.51,1.51,0,0,1-.57-.36,1.64,1.64,0,0,1-.21-.25c-.46-.14-.45-.65-.43-1.44a2.36,2.36,0,0,1,.72-1.71,2.53,2.53,0,0,1,1.75-.62,2.29,2.29,0,0,1,1.12,4.23v1.24a3.46,3.46,0,0,0,.32,1.92l.13.1L170,362.5V347.77H168l3.15-5.37,3.15,5.3h-1.85v10.59c.81-.75,1.81-1.68,2.11-2a1.47,1.47,0,0,0,.41-.77v-2h-1.07v-4.65h4.59Z" />
      </svg>
    </div >
    <div style={{ display: "flex", justifyContent: "space-evenly", padding: "10px" }}>
      <Card style={{ margin: "10px" }}>
        <Card.Body>
          <Card.Title>Thesis Master</Card.Title>
          <Card.Text>Prestes a escolher a tua tese de mestrado?</Card.Text>
          <Card.Text>O GCE criou um serviço que te permite ver quais as propostas de tese de mestrado, classificadas por área de especialização!</Card.Text>
          <Button as="a" href="/fixme" variant="primary">Visitar Thesis Master</Button>
        </Card.Body>
      </Card>
      <Card style={{ margin: "10px" }}>
        <Card.Body>
          <Card.Title>Hash Code</Card.Title>
          <Card.Text>A Google e o GCE trazem-te um desafio de programação!</Card.Text>
          <Card.Text>O Google Hash Code é um hackathon à escala global que te desafia a resolver um problema real em equipa!</Card.Text>
          <Button as="a" href="/hash-code" variant="primary">Sobre o Hash Code</Button>
        </Card.Body>
      </Card>
      <Card style={{ margin: "10px" }}>
        <Card.Body>
          <Card.Title>Blog</Card.Title>
          <Card.Text>Lê aqui todas as publicações dos nossos colaboradores e descobre o que te espera no mundo profissional.</Card.Text>
          <Card.Text>De alunos para alunos!</Card.Text>
          <Button as="a" href="/blog" variant="primary">Ver Todos os Artigos</Button>
        </Card.Body>
      </Card>
    </div >
    <Footer />
  </>

export default LandingPage
