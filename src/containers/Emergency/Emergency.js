import React, { Component } from 'react'
import { Button, Form } from "semantic-ui-react";

export default class Emergency extends Component {
  constructor(props) {
        super(props)
        this.state = {
          emergencyContact: "",
          emergencyAddress: "",
          emergencyCell: "",
          emergencyWork: "",
          relationship: ""
        };
  }
    render() {
        return (
          <div>
            <Form size="large">
              <h3>Emergency Contact Information</h3>
              <Form.Group inline>
                <label htmlFor="emergencyContact">Contact Name:</label>
                <Form.Input
                  placeholder="Emergency Contact Name"
                  id="emergencyContact"
                  name="emergencyContact"
                  width={6}
                />

                <label htmlFor="emergencyAddress">Address:</label>
                <Form.Input
                  id="emergencyAddress"
                  name="emergencyAddress"
                  width={6}
                />
              </Form.Group>

              <Form.Group inline>
                <label htmlFor="emergencyCell">Cell Phone:</label>
                <Form.Input
                  placeholder="Emergency Cell Phone"
                  id="emergencyCell"
                  name="emergencyCell"
                  width={6}
                />

                <label htmlFor="emergencyWork">Work Phone:</label>
                <Form.Input id="emergencyWork" name="emergencyWork" width={6} />
              </Form.Group>

              <Form.Group inline>
                <label htmlFor="relationship">Relationship:</label>
                <Form.Input id="relationship" name="relationship" width={8} />
              </Form.Group>
              <Button primary>Submit</Button>
            </Form>
          </div>
        );
    }
}
