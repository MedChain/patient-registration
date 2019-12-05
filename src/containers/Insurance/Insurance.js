import React, { Component } from 'react'
import { Button, Form } from "semantic-ui-react";

export default class Insurance extends Component {
    render() {
        if (this.props.currentStep !== 3) {
          return null;
        }  
        return (
          <div>
            <Form size="large">
              <h3>Insurance Information</h3>
              <Form.Group inline>
                <label htmlFor="planName">Plan Name:</label>
                <Form.Input
                  placeholder="Plan Name"
                  id="planName"
                  name="planName"
                  width={6}
                  value={this.props.planName}
                  onChange={this.props.handleChange}
                />

                <label htmlFor="idNumber">I.D. Number:</label>
                <Form.Input
                  id="idNumber"
                  name="idNumber"
                  width={6}
                  value={this.props.idNumber}
                  onChange={this.props.handleChange}
                />
              </Form.Group>

              <Form.Group inline>
                <label htmlFor="insuranceAddress">Address:</label>
                <Form.Input
                  placeholder="Address"
                  id="insuranceAddress"
                  name="insuranceAddress"
                  width={6}
                  value={this.props.insuranceAddress}
                  onChange={this.props.handleChange}
                />

                <label htmlFor="groupNumber">Group Number:</label>
                <Form.Input
                  id="groupNumber"
                  name="groupNumber"
                  width={6}
                  value={this.props.groupNumber}
                  onChange={this.props.handleChange}
                />
              </Form.Group>

              <Form.Group inline>
                <label htmlFor="policyHolder">Policy Holder:</label>
                <Form.Input
                  placeholder="Policy Holder"
                  id="policyHolder"
                  name="policyHolder"
                  width={6}
                  value={this.props.policyHolder}
                  onChange={this.props.handleChange}
                />

                <label htmlFor="effectiveDate">Effective Date:</label>
                <Form.Input
                  type="date"
                  id="effectiveDate"
                  name="effectiveDate"
                  value={this.props.effectiveDate}
                  onChange={this.props.handleChange}
                />
              </Form.Group>

              <Form.Group inline>
                <label htmlFor="policyHolderSS">
                  Policy Holder Social Security:
                </label>
                <Form.Input
                  id="policyHolderSS"
                  name="policyHolderSS"
                  value={this.props.policyHolderSS}
                  onChange={this.props.handleChange}
                  width={6}
                />
              </Form.Group>

              <Form.Group inline>
                <label htmlFor="policyHolderDob">Policy Holder Birthday:</label>
                <Form.Input
                  type="date"
                  id="policyHolderDob"
                  name="policyHolderDob"
                  value={this.props.policyHolderDob}
                  onChange={this.props.handleChange}
                />
              </Form.Group>

              <Button primary>Submit</Button>
            </Form>
          </div>
        );
    }
}
