import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import ReasonForEviction from './ReasonForEviction'
import {inject, observer} from "mobx-react";
import {monthList, yearsList, monthsRentedList, additionalChargesList, includedUtilitiesList} from "../constants";


const UnitDetailForm = inject('store')(observer(class UnitDetailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numEvictionRows: 0,
    };
  }

  addEvictionRow = (e) => {
    e.preventDefault();
    var numEvictionRows = this.state.numEvictionRows;
    numEvictionRows += 1;
    this.setState({ numEvictionRows: numEvictionRows });
  }

  setNoEvictions = (e) => {
    e.preventDefault();
    this.props.store.setNoEvictions(this.props.index - 1);
  }

  renderEvictionRows() {
    var evictionRows = [];
    for (let i = 0; i < this.state.numEvictionRows; i++) {
        evictionRows.push(<ReasonForEviction
            handleChange={this.props.handleChange}
            unitIndex={this.props.index}
            evictionIndex={i+1}
        />);
    }
    return evictionRows;
  }

  render() {
    const { values } = this.props;
    const unitIndex = this.props.index;

    return (
      <React.Fragment>
        <Form className="formBody">
          <h4>Occupancy</h4>
          <div className="minText">
            <div className="grid3">
              <p>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-unitNumber`)}
                  defaultValue={values.unitNumber} />
                <Form.Label>Unit #</Form.Label>
              </p>              
              <p>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-bedrooms`)}
                  defaultValue={values.bedrooms}>
                  <option></option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6+</option>
                </Form.Control>
                <Form.Label># Bedrooms</Form.Label>
              </p>              
              <p>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-bathrooms`)}
                  defaultValue={values.bathrooms}>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </Form.Control>
                <Form.Label># Bathrooms</Form.Label>
              </p>              
            </div>
            <div className="grid4">
              <p>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-occupancyStatus`)}
                  defaultValue={values.occupancyStatus}>
                  <option></option>
                  <option>Manager/Owner unit</option>
                  <option>Occupied</option>
                  <option>Vacant</option>
                  <option>Other</option>
                </Form.Control>
                <Form.Label>Occupancy Status</Form.Label>                
              </p>
              <p className="showDesktop">
                {this.props.store.data[`unit-${unitIndex}-occupancyStatus`] === "Other" &&
                  <p>
                    <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-occupancyStatusDetails`)}
                      defaultValue={values.occupancyStatusOther} />
                    <Form.Label>Please describe occupancy status:</Form.Label>
                  </p>
                }
              </p>
              <p>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-monthOccupied`)}
                  defaultValue={values.monthOccupied}>
                  {monthList}
                </Form.Control>
                <Form.Label>Start month of occupancy</Form.Label>
              </p>
              <p>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-yearOccupied`)}
                  defaultValue={values.yearOccupied}>
                  {yearsList}
                </Form.Control>
                <Form.Label>Start year of occupancy</Form.Label>
              </p>
              <p>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-monthsRented`)}
                  defaultValue={values.monthsRented}>
                  {monthsRentedList}
                </Form.Control>
                <Form.Label># Months occupied last year</Form.Label>                
              </p>
            </div>
            <div>
              <p className="showMobile">
                {this.props.store.data[`unit-${unitIndex}-occupancyStatus`] === "Other" &&
                  <p>
                    <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-occupancyStatusDetails`)}
                      defaultValue={values.occupancyStatusOther} />
                    <Form.Label>Please describe occupancy status:</Form.Label>
                  </p>
                }
              </p>
            </div>
            <div className="grid4">
              <p>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-currentJanRent`)}
                  defaultValue={values.currentJanRent}>
                </Form.Control>
                <Form.Label>January rent amount for current year</Form.Label>                
              </p>
              <p>
                <Form.Control as="select" multiple onChange={this.props.handleChange(`unit-${unitIndex}-includedUtilities`)}>
                  {includedUtilitiesList}
                </Form.Control>
                <Form.Label>January Utilities included in the rent (Hold CTRL/CMD to select all that apply)</Form.Label>
              </p>
              <p>
                <Form.Control as="select" multiple onChange={this.props.handleChange(`unit-${unitIndex}-additionalCharges`)}>
                  {additionalChargesList}
                </Form.Control>
                <Form.Label>Additional charges from landlord, not included in rent (Hold CTRL/CMD to select all that apply)</Form.Label>
              </p>
              <p>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-totalAdditionalCharges`)}
                  defaultValue={values.totalAdditionalCharges}>
                </Form.Control>
                <Form.Label>Total additional charges</Form.Label>
              </p>
            </div>

            <h4>Rent Increases</h4>
            <div className="grid3">
              <p>
                <Form.Control type="date" onChange={this.props.handleChange(`unit-${unitIndex}-dateRentChanged`)}
                  defaultValue={values.dateRentChanged}>
                </Form.Control>
                <Form.Label>Date of last effective rent increase/decrease</Form.Label>                
              </p>
              <p>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-rentChangeAmount`)}
                  defaultValue={values.rentChangeAmount}>
                </Form.Control>
                <Form.Label>Rent amount for month prior to rent increase/decrease</Form.Label>
              </p>
              <p>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-currentRentAmount`)}
                  defaultValue={values.currentRentAmount}>
                </Form.Control>
                <Form.Label>Current rent amount</Form.Label>
              </p>
            </div>
          </div>

          <h4>Evictions</h4>
          <div className="">
                {this.props.store.hasEvictions[unitIndex-1] ? (
                  <div className={this.state.numEvictionRows === 0 ? "evictionButtonContainer" : "fullWidth"}>
                    {this.state.numEvictionRows === 0 ? (
                      <div>
                        <p>
                          Was there a tenancy termination in this unit in the prior calendar year?
                        </p>
                        <div className="buttonWrrapp">
                          <div className="buttonGrid">
                            <Button className="buttons buttonColor" onClick={this.addEvictionRow}>
                              <span>YES</span>
                            </Button>
                            <Button className="buttons buttonColor" onClick={this.setNoEvictions}>
                              <span>NO</span>
                            </Button>                          
                          </div>                          
                        </div>

                      </div>
                    ) : (
                        <div className="grid2">
                          <p>
                            {this.renderEvictionRows()}
                          </p>
                          <p>
                            <Button variant="link" size="sm" onClick={this.addEvictionRow}>+ Add More Tenancy Termination</Button>
                          </p>
                        </div>
                    )}
                  </div>
                ) : <p>No eviction data for this unit</p>}
          </div>
        </Form>
      </React.Fragment>
    )
  }
}));

export default UnitDetailForm