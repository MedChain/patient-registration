import React, { Component } from 'react'
import { Button, Form, Radio } from 'semantic-ui-react';
import './Personal.css';

export default class Personal extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }  
        return (
          <Form size="large" >
            <Form.Group inline >
                <label htmlFor='patientName'>Patient Name:</label>
                <Form.Input placeholder="Patient Name" id='patientName' name='patientName' width={6} value={this.props.patientName} onChange={this.props.handleChange}/>
                    
                <label htmlFor='social-security'>Social Security:</label>
                <Form.Input placeholder="xxx-xx-xxxx"  id='socialSecurity' name='socialSecurity' width={6} value={this.props.socialSecurity} onChange={this.props.handleChange}/>
            </Form.Group>

            <Form.Group inline>
                <Form.Input label='Date of Birth:' type='date' id='birthday' name='birthday' value={this.props.birthday} onChange={this.props.handleChange}/>
                <label htmlFor='sex'>Sex:</label>
                <Form.Field>
                    <Radio label='M' name='sex'  value={this.props.sex} onChange={this.props.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Radio label='F' name='sex' value={this.props.sex} onChange={this.props.handleChange}/>
                </Form.Field>

                <label htmlFor='maritalStatus'>Select one:</label>
                <Form.Field>
                    <Radio label='Married' name='maritalStatus' value={this.props.maritalStatus} onChange={this.props.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Radio label='Single' name='maritalStatus' value={this.props.maritalStatus} onChange={this.props.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Radio label='Divorced' name='maritalStatus' value={this.props.maritalStatus} onChange={this.props.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Radio label='Widow' name='maritaSstatus' value={this.props.maritalStatus} onChange={this.props.handleChange}/>
                </Form.Field>
            </Form.Group>

            <Form.Group inline>
                <Form.Input label='Address:' placeholder="Street"  id='address' width={8} value={this.props.address} onChange={this.props.handleChange}/>
                <Form.Input placeholder="City/State/Zip" id='address' width={8} value={this.props.address} onChange={this.props.handleChange}/>
            </Form.Group>

            <Form.Group inline>
                <Form.Input label='Phone:' placeholder='(xxx)-xxx-xxxx' name='phone number' width={8} value={this.props.phoneNumber} onChange={this.props.handleChange}/>
                <Form.Input label='Email:' width={8} name='email' value={this.props.email} onChange={this.props.handleChange}/>
            </Form.Group>

            <Form.Group inline>
                <label htmlFor='emailMessage'>Would you be interested in having communications sent to you via your e-mail address? (Example: appointment reminder)</label>
                <Form.Field>
                    <Radio label='Yes' name='emailMessage' value={this.props.emailMessage} onChange={this.props.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Radio label='No' name='emailMessage' value={this.props.emailMessage} onChange={this.props.handleChange}/>
                </Form.Field>
            </Form.Group>

            <Form.Group inline>
                <label htmlFor='employerName'>Employer Name:</label>
                <Form.Input  placeholder="Employer Name" name='employerName' width={6} value={this.props.employerName} onChange={this.props.handleChange}/>
                <label htmlFor='employerPhone'>Employer Phone:</label>
                <Form.Input  placeholder="(xxx)-xxx-xxxx" name='employerPhone' width={6} value={this.props.employerPhone} onChange={this.props.handleChange}/>
            </Form.Group>

            <Form.Group inline>
                <label htmlFor='employerAddress'>Employer Address:</label>
                <Form.Input name='employerAddress' placeholder='Employer Address' width={12} value={this.props.employerAddress} onChange={this.props.handleChange}/>
            </Form.Group>

            <Form.Group inline>
                <label htmlFor='physicianName'>Primary Care Physician:</label>
                <Form.Input placeholder='Name' name='physicianName' width={6} id='physicianName' value={this.props.physicianName} onChange={this.props.handleChange}/>
                <label htmlFor='copay'>Copay amount:</label>
                <Form.Input placeholder='$' width={4} name='copay' id='copay' value={this.props.copay} onChange={this.props.handleChange}/>
            </Form.Group>

            <Form.Field label='How did you hear about us?' control='textarea' rows='2' />
            
            {/* <Button primary>Save and Continue</Button> */}
          </Form>
        );
    }
}
