import React from 'react';
import PropTypes from 'prop-types'; // ES6
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useForm from '../../hooks/use-form';
import styles from '../app.module.scss';


const ScreenPropertyForm = ({ initialValues, onSubmit }) => {
  const {
    handleSubmit,
    handleInputChange,
    inputs
  } = useForm(initialValues, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <Row className={styles.rowForm}>
        <Col xs={4} s={4} m={4} l={4} xl={4}>XS </Col>
        <Col xs={8} s={8} m={8} l={8} xl={8}>
          <input
            type="number"
            name="xs"
            className={styles.inputBox}
            onChange={handleInputChange}
            value={inputs.xs}
            required
          />
        </Col>
      </Row>
      <Row className={styles.rowForm}>
        <Col xs={4} s={4} m={4} l={4} xl={4}>S </Col>
        <Col xs={8} s={8} m={8} l={8} xl={8}>
          <input
            type="number"
            name="s"
            className={styles.inputBox}

            onChange={handleInputChange}
            value={inputs.s}
            required
          />
        </Col>
      </Row>
      <Row className={styles.rowForm}>
        <Col xs={4} s={4} m={4} l={4} xl={4}>M </Col>
        <Col xs={8} s={8} m={8} l={8} xl={8}>
          <input
            type="number"
            name="m"
            className={styles.inputBox}

            onChange={handleInputChange}
            value={inputs.m}
            required
          />
        </Col>
      </Row>
      <Row className={styles.rowForm}>
        <Col xs={4} s={4} m={4} l={4} xl={4}>M </Col>
        <Col xs={8} s={8} m={8} l={8} xl={8}>
          <input
            type="number"
            name="m"
            className={styles.inputBox}

            onChange={handleInputChange}
            value={inputs.m}
            required
          />
        </Col>
      </Row>
      <Row className={styles.rowForm}>
        <Col xs={4} s={4} m={4} l={4} xl={4}>L </Col>
        <Col xs={8} s={8} m={8} l={8} xl={8}>
          <input
            type="number"
            name="l"
            className={styles.inputBox}

            onChange={handleInputChange}
            value={inputs.l}
            required
          />
        </Col>
      </Row>
      <Row className={styles.rowForm}>
        <Col xs={4} s={4} m={4} l={4} xl={4}>XL </Col>
        <Col xs={8} s={8} m={8} l={8} xl={8}>
          <input
            type="number"
            name="xl"
            className={styles.inputBox}

            onChange={handleInputChange}
            value={inputs.xl}
            required
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button variant="outline-primary" size="sm" type="submit">Apply changes</Button>
      </Row>
    </form>
  );
};

ScreenPropertyForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object
};

export default ScreenPropertyForm;
