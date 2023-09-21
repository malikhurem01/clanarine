import { Button, Container, Table, Row, Col, Form } from "react-bootstrap";
import PageWrapperComponent from "../../PageWrapper/PageWrapperComponent";
import classes from "./RegularMemberships.module.css";
import { useEffect, useState } from "react";
import memberService from "../../../Services/memberService";
import FormModal from "../../FormModal/FormModal";

const RegularMemberships = () => {
  const [members, setMembers] = useState([]);
  const [showAddMember, setShowAddMember] = useState(false);

  const handleAddMemberClick = () => {
    setShowAddMember((prevState) => !prevState);
  };

  const handleFormSubmit = (data) => {
    memberService.addMember(data);
    const fetchedMembers = memberService.getMembers();
    setMembers(fetchedMembers);
    handleAddMemberClick();
  };

  useEffect(() => {
    const fetchedMembers = memberService.getMembers();
    setMembers(fetchedMembers);
  }, []);

  return (
    <PageWrapperComponent removeShadow={true} returnArrow={true}>
      {showAddMember && (
        <FormModal
          handleFormSubmit={handleFormSubmit}
          handleAddMemberClick={handleAddMemberClick}
        />
      )}
      <Container fluid>
        <div className={classes.membershipOptions}>
          <Row>
            <Col sm={4}>
              <Form.Select aria-label="Default select example">
                <option>Poredaj po:</option>
                <option value="1">Ime (A-Z)</option>
                <option value="2">Prezime (A-Z)</option>
                <option value="3">Članarina (najveća)</option>
                <option value="4">Članarina (najmanja)</option>
              </Form.Select>
            </Col>
            <Col sm={4}>
              <Button variant="primary" onClick={handleAddMemberClick}>
                Dodaj novog člana
              </Button>
            </Col>
          </Row>
        </div>

        <Row className="g-0">
          <Table striped>
            <thead>
              <tr>
                <th>Ev. broj</th>
                <th>Prezime</th>
                <th>Ime oca</th>
                <th>Ime</th>
                <th>Status</th>
                <th>Članarina (KM)</th>
                <th>Napomena</th>
                <th>Datum uplate</th>
                <th>Iznos uplate za 2023.</th>
                <th>Postavke</th>
              </tr>
              <tr>
                <th>#</th>
                <th>
                  <Form.Control type="text" placeholder="Prezime" />
                </th>
                <th>
                  <Form.Control type="text" placeholder="Ime oca" />
                </th>
                <th>
                  <Form.Control type="text" placeholder="Ime" />
                </th>
                <th>
                  <Form.Control type="text" placeholder="Status" />
                </th>

                <th>
                  <Form.Control type="number" placeholder="Iznos članarine" />
                </th>
                <th></th>
                <th>
                  <Form.Control type="date" placeholder="Datum uplate" />
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {members.map((element, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{element.name}</td>
                    <td>{element.fathersName}</td>
                    <td>{element.lastName}</td>
                    <td>{element.status}</td>
                    <th>{element.membershipFee}KM</th>
                    <th>{element.note}</th>
                    <th>{element.paymentDate}</th>
                    <th>{element.payment}KM</th>
                    <th>
                      <Row>
                        <Col>
                          <Button variant="primary" size="sm">
                            Informacije
                          </Button>
                        </Col>
                      </Row>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </PageWrapperComponent>
  );
};

export default RegularMemberships;
