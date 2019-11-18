import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import moment from "moment";
import axios from "axios";
import { Animated } from "react-animated-css";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import CommentInput from "./client/common/CommentInput";
import TextInput from "./client/common/TextInput";
import Checkbox from "./client/common/Checkbox";
const phoneRegExp = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i;

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nv-s nv-s--c">
          <ul className="nv-s-l">
            <li className="nv-s-l-i">
              <a className=" nv-s-l-b" href="https://johnfleurimond.com">
                Fleurimond
              </a>
            </li>

            <li className="nv-s-l-i">
              <a
                className="nv-s-l-a nv-s-l-a--active"
                href="https://johnfleurimond.com"
                title="Report a Problem"
              >
                Fleurimond
              </a>
            </li>
            <li className="nv-s-l-i">
              <a
                href="https://github.com/JOHNFLEURIMOND"
                title="Github"
                className="nv-s-l-a"
              >
                Github
              </a>
            </li>
            <li className="nv-s-l-i">
              <a
                href="https://twitter.com/tcodemonger"
                title="Twitter"
                className="nv-s-l-a"
              >
                Twitter
              </a>
            </li>
            <li className="nv-s-l-i">
              <a
                href="https://www.linkedin.com/in/john-fleurimond/"
                className="nv-s-l-a"
                title="Linked"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
        <Jumbotron>
          <div className="mn">
            <div className="b b--b">
              <div className="str  str--r">
                <div className="str-c">
                  <div className="str-t">John Fleurimond</div>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs="3" />
            <Col />
            <Col xs="auto">
              <div className="b b-c p-a700">
                <Formik
                  initialValues={{
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    address: '',
                    unit: '',
                    state: '',
                    city: '',
                    zip: '',
                    phone: '',
                    email: '',
                    confirmEmail: '',
                    typeOfDegree: '',
                    degreeAttained: '',
                    educationalInstitution: '',
                    otherInformation: '',
                    comments: '',
                  }}
                  validationSchema={yup.object().shape({
                    firstName: yup
                      .string()
                      .required("Your First Name Is Required!")
                      .min(2, "Your First Name Needs To Be Valid"),
                    lastName: yup
                      .string()
                      .required("Your Last Name Is Required!")
                      .min(2, "Your Last Name Needs To Be Valid"),
                    email: yup
                      .string()
                      .email()
                      .required("Your Email Is Required!"),
                    confirmEmail: yup
                      .string()
                      .email()
                      .required("Your Confirm Email Is Required!")
                      .oneOf(
                        [yup.ref("email", undefined)],
                        "Make Sure Emails Match!"
                      ),
                    StreetAddress: yup
                      .string()
                      .min(2, "Your Address Needs To Be Valid"),
                    unit: yup.string().min(1),
                    city: yup
                      .string()
                      .required("Your City Name Is Required!")
                      .min(3),
                    state: yup
                      .string()
                      .required("Your State Name Is Required!"),
                    phone: yup
                    .string()
                      .matches(phoneRegExp, 'Your Phone Number Is Not Valid').required("Your State Name Is Required!"),
                    zip: yup
                      .string()
                      .required("Zip Code Is Required")
                      .matches(
                        new RegExp(/^\d{5}$/),
                        "Zip Codes Contains 5 Digits"
                      ),
                    typeOfDegree: yup
                      .string()
                      .required("Type of Degree Is Required!")
                      .min(2, "Type of Degree Needs To Be Valid"),
                    degreeAttained: yup
                      .string()
                      .required("Degree Attained Is Required!")
                      .min(2, "Degree Attained Needs To Be Valid"),
                    educationalInstitution: yup
                      .string()
                      .required("EducationalInstitution Is Required!")
                      .min(2, "Educational Institution Needs To Be Valid"),
                    otherInformation: yup
                      .string()
                      .min(2, "Other Information Needs To Be Valid"),
                    comments: yup.string().required()
                  })}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      axios
                        .post("http://localhost:8080/api/form", values, actions) // no try/catch here
                        .then(response => {
                          console.log(response);
                        })
                        .catch(error => {
                          console.log(error.response);
                        });
                      console.log({ values, actions });
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 400);
                  }}
                  render={({
                    isSubmitting,
                    handleSubmit,
                    values,
                    handleChange,
                    errors,
                    touched,
                    handleBlur,
                    dirty,
                    handleReset
                  }) => (
                    <Animated
                      animationInDelay={0}
                      animationIn="slideInUp"
                      animationOut="slideOutDown"
                      isVisible
                    >
                      <div className="mn p-a700">
                        <div className="b b-c p-a700">
                          <div className="str">
                            <div className="str-c">
                              <h1 className="ta-c p-h200 t--intro">Email Me</h1>
                            </div>
                          </div>

                          <div className="b b-c p-a700"></div>
                          <form
                            action="http://localhost:8080/api/form"
                            method="POST"
                            onSubmit={handleSubmit}
                          >
                            <div className="g">
                              <div className="sel">
                                <label
                                  htmlFor={`FeedbackForm-${this.props.name}`}
                                  className="txt-l txt-l--sm"
                                >
                                  Prefix{" "}
                                </label>
                                <div
                                  className="sel-c sel-c--thin"
                                  style={{
                                    marginRight: 14
                                  }}
                                >
                                  <select className="sel-f sel-f--thin">
                                    <option>Mr</option>
                                    <option>Mrs</option>
                                    <option>Miss</option>
                                    <option>Mx</option>
                                  </select>
                                </div>
                              </div>
                              <div className="g--3 m-b300">
                                <TextInput
                                  title="First Name"
                                  name="firstName"
                                  placeholder="First Name"
                                  value={values.firstName}
                                  onChange={handleChange}
                                  error={touched.firstName && errors.firstName}
                                  onBlur={handleBlur}
                                  required
                                />
                              </div>
                              <div className="g--1 m-b300">
                                <TextInput
                                  title="Initial"
                                  name="middleName"
                                  placeholder="Middle Initial"
                                  value={values.middleName}
                                  onChange={handleChange}
                                  error={
                                    touched.middleName && errors.middleName
                                  }
                                  onBlur={handleBlur}
                                />
                              </div>
                              <div className="g--6 m-b300">
                                <TextInput
                                  title="Last Name"
                                  name="lastName"
                                  placeholder="Last Name"
                                  value={values.lastName}
                                  onChange={handleChange}
                                  error={touched.lastName && errors.lastName}
                                  onBlur={handleBlur}
                                  required
                                />
                              </div>
                            </div>
                            <div className="g">
                              <div className="g--9 m-b300">
                                <TextInput
                                  title="Street Address"
                                  name="StreetAddress"
                                  placeholder="Street Address"
                                  value={values.address}
                                  onChange={handleChange}
                                  error={touched.address && errors.address}
                                  onBlur={handleBlur}
                                  required
                                />
                              </div>
                              <div className="g--3 m-b300">
                                <TextInput
                                  title="Unit"
                                  name="unit"
                                  placeholder="Unit or Apartment #"
                                  value={values.unit}
                                  onChange={handleChange}
                                  error={touched.unit && errors.unit}
                                  onBlur={handleBlur}
                                />
                              </div>
                            </div>
                            <div className="g">
                              <div className="g--7 m-b300">
                                <TextInput
                                  title="City"
                                  name="city"
                                  placeholder="City"
                                  value={values.city}
                                  onChange={handleChange}
                                  error={touched.city && errors.city}
                                  onBlur={handleBlur}
                                  required
                                />
                              </div>
                              <div className="g--2 m-b300">
                                <TextInput
                                  title="State"
                                  name="state"
                                  placeholder="State"
                                  value={values.state}
                                  onChange={handleChange}
                                  error={touched.state && errors.state}
                                  onBlur={handleBlur}
                                  required
                                />
                              </div>
                              <div className="g--3 m-b300">
                                <TextInput
                                  title="Zip"
                                  name="zip"
                                  placeholder="Zip Code"
                                  value={values.zip}
                                  onChange={handleChange}
                                  error={touched.zip && errors.zip}
                                  onBlur={handleBlur}
                                  required
                                />
                              </div>
                            </div>
                            <TextInput
                              title="Phone"
                              name="phone"
                              placeholder="Phone Number"
                              value={values.phone}
                              onChange={handleChange}
                              error={touched.phone && errors.phone}
                              onBlur={handleBlur}
                            />
                            <TextInput
                              title="Email"
                              name="email"
                              placeholder="Email"
                              value={values.email}
                              onChange={handleChange}
                              error={touched.email && errors.email}
                              required
                              onBlur={handleBlur}
                            />
                            <TextInput
                              title="Confirm Email"
                              name="confirmEmail"
                              placeholder="Confirm Email"
                              value={values.confirmEmail}
                              onChange={handleChange}
                              error={
                                touched.confirmEmail && errors.confirmEmail
                              }
                              onBlur={handleBlur}
                              required
                            />
                            <hr className="hr hr--sq" />
                            <TextInput
                              title="Type of Degree"
                              name="typeOfDegree"
                              placeholder="Type of Degree"
                              value={values.typeOfDegree}
                              onChange={handleChange}
                              error={
                                touched.typeOfDegree && errors.typeOfDegree
                              }
                              onBlur={handleBlur}
                            />
                            <TextInput
                              title="Degree Attained"
                              name="degreeAttained"
                              placeholder="Degree Attained"
                              value={values.degreeAttained}
                              onChange={handleChange}
                              error={
                                touched.degreeAttained && errors.degreeAttained
                              }
                              onBlur={handleBlur}
                            />
                            <TextInput
                              title="Educational Institution"
                              name="educationalInstitution"
                              placeholder="Educational Institution"
                              value={values.educationalInstitution}
                              onChange={handleChange}
                              error={
                                touched.educationalInstitution &&
                                errors.educationalInstitution
                              }
                              onBlur={handleBlur}
                            />
                            <TextInput
                              title="Other Information"
                              name="otherInformation"
                              placeholder="Other Information"
                              value={values.otherInformation}
                              onChange={handleChange}
                              error={
                                touched.otherInformation &&
                                errors.otherInformation
                              }
                              onBlur={handleBlur}
                            />
                            <label
                              htmlFor={`FeedbackForm-${this.props.name}`}
                              className="txt-l txt-l--sm"
                            >
                              Love{" "}
                            </label>
                            <Checkbox />

                            <label
                              htmlFor={`FeedbackForm-${this.props.name}`}
                              className="txt-l txt-l--sm"
                            >
                              Like{" "}
                            </label>
                            <Checkbox />

                            <label
                              htmlFor={`FeedbackForm-${this.props.name}`}
                              className="txt-l txt-l--sm"
                            >
                              Dislike{" "}
                            </label>
                            <Checkbox />

                            <label
                              htmlFor={`FeedbackForm-${this.props.name}`}
                              className="txt-l txt-l--sm"
                            >
                              Throw It Away{" "}
                            </label>
                            <Checkbox />
                            <hr className="hr hr--sq" />
                            <h2 className="ta-c p-h200 t--intro">
                              Please note it might take 1-3 days to respond
                              back. Please still fill this form out and I will
                              get back to you ASAP!
                            </h2>

                            <hr className="hr hr--sq" />
                            <CommentInput
                              name="comments"
                              placeholder="Other Comments You Would Like Us to Know."
                              value={values.comments}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />

                            <div className="b">
                              <div className="m-v400 m-h200">
                                <button
                                  disabled={!dirty || isSubmitting}
                                  onClick={values.handleSubmit}
                                  type="submit"
                                  className="btn btn--c btn--br"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Animated>
                  )}
                />
              </div>
            </Col>
            <Col xs="3" />
          </Row>
        </Container>
        <div className="mn">
          <div className="b b--b b--fw">
            <div className="b-c">
              <div className="sh sh--w">
                <h2 className="sh-title">{moment().format("llll")}</h2>
              </div>
            </div>
          </div>
        </div>
        <footer className="ft">
          <div className="ft-c">
            <ul className="ft-ll ft-ll--r">
              <li className="ft-ll-i">
                <a
                  href="http://www.cityofboston.gov/311/"
                  className="ft-ll-a lnk--yellow"
                >
                  <span className="ft-ll">Made With Love From </span>
                  <span className="tablet--hidden"> - </span>Boston,Ma{" "}
                </a>
              </li>
            </ul>
            <ul className="ft-ll">
              <li className="ft-ll-i">
                <a href="https://johnfleurimond.com" className="ft-ll-a">
                  John Fleurimond
                </a>
              </li>
              <li className="ft-ll-i">
                <a href="https://twitter.com/tcodemonger" className="ft-ll-a">
                  Twitter
                </a>
              </li>
              <li className="ft-ll-i">
                <a href="https://github.com/JOHNFLEURIMOND" className="ft-ll-a">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
