import React from "react";
import { Card } from "react-bootstrap";



export default function Player({
    player: {
      playersPhotos,
      firstName,
      playersAge,
      equipName,
      playersNationality,
      teeshirtNumbers,
    },
  }) {
    return (
      <div className="payerCard" style={{ margin: "10px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={playersPhotos}
            style={{ height: "300px" }}
          />
          <Card.Body>
            <Card.Title>name: {firstName}</Card.Title>
            <Card.Text>age: {playersAge}</Card.Text>
            <Card.Text>equipe: {equipName}</Card.Text>
            <Card.Text>nationality: {playersNationality}</Card.Text>
            <Card.Text>teeshirtnu: {teeshirtNumbers}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  Player.defaultProps = {
    player: {
      playersPhotos: "no photo",
      firstName: "no photo",
      playersAge: "no photo",
      equipName: "no photo",
      playersNationality: "no photo",
      teeshirtNumbers: "no photo",
    },
  };