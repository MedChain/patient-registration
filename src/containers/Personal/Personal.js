import React, { Component } from 'react'
import { Button, Form, Radio } from 'semantic-ui-react';
import './Personal.css';

export default class Personal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1, // default is step 1
            patientName: '',
            socialSecurity: '',
            birthday: '',
            sex: '',
            maritalStatus: '',
            address: '',
            phoneNumber: '',
            email: '',
            emailMessage: '',
            employerName: '',
            employerPhone: '',
            employerAddress: '',
            physicianName: '',
            copay: ''
        }
    }
    render() {
        
        return (
          <Form size="large">
            <h3>Personal Information</h3>
            <Form.Group inline>
              <label htmlFor="patientName">Patient Name:</label>
              <Form.Input
                placeholder="Patient Name"
                id="patientName"
                name="patientName"
                width={6}
              />

              <label htmlFor="social-security">Social Security:</label>
              <Form.Input
                placeholder="xxx-xx-xxxx"
                id="socialSecurity"
                name="socialSecurity"
                width={6}
              />
            </Form.Group>
            <Form.Group inline>
              <Form.Input
                label="Date of Birth:"
                type="date"
                id="birthday"
                name="birthday"
              />
              <label htmlFor="sex">Sex:</label>
              <Form.Field>
                <Radio label="M" name="sex" />
              </Form.Field>
              <Form.Field>
                <Radio label="F" name="sex" />
              </Form.Field>

              <label htmlFor="maritalStatus">Select one:</label>
              <Form.Field>
                <Radio label="Married" name="maritalStatus" />
              </Form.Field>
              <Form.Field>
                <Radio label="Single" name="maritalStatus" />
              </Form.Field>
              <Form.Field>
                <Radio label="Divorced" name="maritalStatus" />
              </Form.Field>
              <Form.Field>
                <Radio label="Widow" name="maritaSstatus" />
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <Form.Input
                label="Address:"
                placeholder="Street"
                id="address"
                width={8}
              />
              <Form.Input placeholder="City/State/Zip" id="address" width={8} />
            </Form.Group>
            <Form.Group inline>
              <Form.Input
                label="Phone:"
                placeholder="(xxx)-xxx-xxxx"
                name="phone number"
                width={8}
              />
              <Form.Input label="Email:" width={8} name="email" />
            </Form.Group>
            <Form.Group inline>
              <label htmlFor="emailMessage">
                Would you be interested in having communications sent to you via
                your e-mail address? (Example: appointment reminder)
              </label>
              <Form.Field>
                <Radio label="Yes" name="emailMessage" />
              </Form.Field>
              <Form.Field>
                <Radio label="No" name="emailMessage" />
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <label htmlFor="employerName">Employer Name:</label>
              <Form.Input
                placeholder="Employer Name"
                name="employerName"
                width={6}
              />
              <label htmlFor="employerPhone">Employer Phone:</label>
              <Form.Input
                placeholder="(xxx)-xxx-xxxx"
                name="employerPhone"
                width={6}
              />
            </Form.Group>
            <Form.Group inline>
              <label htmlFor="employerAddress">Employer Address:</label>
              <Form.Input
                name="employerAddress"
                placeholder="Employer Address"
                width={12}
              />
            </Form.Group>
            <Form.Group inline>
              <label htmlFor="physicianName">Primary Care Physician:</label>
              <Form.Input
                placeholder="Name"
                name="physicianName"
                width={6}
                id="physicianName"
              />
              <label htmlFor="copay">Copay amount:</label>
              <Form.Input placeholder="$" width={4} name="copay" id="copay" />
            </Form.Group>
            <Form.Field
              label="How did you hear about us?"
              control="textarea"
              rows="2"
            />
            <Button primary>Submit</Button>
          </Form>
        );
    }
}
