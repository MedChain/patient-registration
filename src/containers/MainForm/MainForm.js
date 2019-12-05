import React, { Component } from 'react'
import Personal from '../Personal/Personal';
import Emergency from '../Emergency/Emergency';
import Insurance from '../Insurance/Insurance';
import { Button, Form } from "semantic-ui-react";
import './MainForm.css'

export default class form extends Component {
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
            copay: '',
            emergencyContact: '',
            emergencyAddress: '',
            emergencyCell: '',
            emergencyWork: '',
            relationship: '',
            planName: '',
            idNumber: '',
            insuranceAddress: '',
            groupNumber: '',
            policyHolder: '',
            effectiveDate: '',
            policyHolderSS: '',
            policyHolderDob: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    } 

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });   
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            patientName,
            socialSecurity,
            birthday,
            sex,
            maritalStatus,
            address,
            phoneNumber,
            email,
            emailMessage,
            employerName,
            employerPhone,
            employerAddress,
            physicianName,
            copay,
            emergencyContact,
            emergencyAddress,
            emergencyCell,
            emergencyWork,
            relationship,
            planName,
            idNumber,
            insuranceAddress,
            groupNumber,
            policyHolder,
            effectiveDate,
            policyHolderSS,
            policyHolderDob
        } = this.state;
        alert(`Your registration detail: 
        PatientName: ${patientName} 
        SocialSecurity: ${socialSecurity} 
        Birthday: ${birthday}
        Sex: ${sex}
        Marital Status: ${maritalStatus}
        Address: ${address}
        Phone Number: ${phoneNumber}
        Email: ${email}
        Email Message: ${emailMessage}
        Employer Name: ${employerName}
        Employer Phone Number: ${employerPhone}
        Employer Address: ${employerAddress}
        Physician's Name: ${physicianName}
        Copay: ${copay}
        Emergency Contact: ${emergencyContact}
        Emergency Contact Address: ${emergencyAddress}
        Emergency Contact Cell #: ${emergencyCell}
        Emergency Contact Work #: ${emergencyWork}
        Relationship Status: ${relationship}
        Plan Name: ${planName}
        Id Nnumber: ${idNumber}
        Insurance Address: ${insuranceAddress}
        Group Number: ${groupNumber}
        policyHolder: ${relationship}
        Relationship Status: ${relationship}
        Policy Holder: ${policyHolder}
        Effective Date: ${effectiveDate}
        Policy Holder Social Securty: ${policyHolderSS}
        Policy Holder Birthday: ${policyHolderDob}
        `);
    }

    _next = () => {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3: currentStep + 1
        this.setState({
        currentStep: currentStep
        })
    }
    
    _prev = () => {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1: currentStep - 1
        this.setState({
        currentStep: currentStep
        })
    }

    get previousButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if(currentStep !== 1){
            return (
            <Button 
                secondary
                className="btn btn-secondary" 
                type="button" onClick={this._prev}>
            Previous
            </Button>
            )
        }
        // ...else return nothing
        return null;
    }

    get nextButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if(currentStep < 3){
            return (
            <Button
                primary
                className="btn btn-primary float-right" 
                type="button" 
                onClick={this._next}>
            Next
            </Button>        
            )
        }
        // ...else render nothing
        return null;
    }
    render() {
        return (
          <div className="main-form">
            <h1>Patient Registration Form</h1>
            <p>Step {this.state.currentStep}</p>
            <Form onSubmit={this.handleSubmit}>
              <Personal
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                patientName={this.state.patientName}
                socialSecurity={this.state.socialSecurity}
                birthday={this.state.birthday}
                sex={this.state.sex}
                maritalStatus={this.state.maritalStatus}
                address={this.state.address}
                phoneNumber={this.state.phoneNumber}
                email={this.state.email}
                emailMessage={this.state.emailMessage}
                employerName={this.state.employerName}
                employerPhone={this.state.employerPhone}
                employerAddress={this.state.employerAddress}
                physicianName={this.state.physicianName}
                copay={this.state.copay}
              />

              <Emergency
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                emergencyContact={this.state.emergencyContact}
                emergencyAddress={this.state.emergencyAddress}
                emergencyCell={this.state.emergencyCell}
                emergencyWork={this.state.emergencyWork}
                relationship={this.state.relationship}
              />

              <Insurance
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                planName={this.state.planName}
                idNumber={this.state.idNumber}
                insuranceAddress={this.state.insuranceAddress}
                groupNumber={this.state.groupNumber}
                policyHolder={this.state.policyHolder}
                effectiveDate={this.state.effectiveDate}
                policyHolderSS={this.state.policyHolderSS}
                policyHolderDob={this.state.policyHolderDob}
              />

              {this.previousButton}
              {this.nextButton}
            </Form>
          </div>
        );
    }
}
