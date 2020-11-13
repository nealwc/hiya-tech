import React from 'react';
import { ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import '../index.css';

function TabsBar(props) {

    return (
        <>
            <Row className='categories'>
                <Col>
                    <ButtonGroup defaultActiveKey="profile" id="categories" size='lg' variant='link' style={{ marginBottom: '45px'}}>
                        <Button
                            variant='link'
                            value=""
                            onClick={props.itemFilter}
                            >All
                        </Button>
                        <Button
                            variant='link'
                            value="Computers"
                            onClick={props.itemFilter}
                            >Computers
                        </Button>
                         <Button
                            variant='link'
                            value="Tablets/Phones"
                            onClick={props.itemFilter}
                            >Tablets/Phones
                        </Button>
                        <Button
                            variant='link'
                            value="Parts"
                            onClick={props.itemFilter}
                            >Parts
                        </Button>
                        <Button
                            variant='link'
                            value="Services"
                            onClick={props.itemFilter}
                            >Services
                        </Button>
                        <Button 
                            variant='link'
                            value="Other"
                            onClick={props.itemFilter}
                            >Other
                        </Button>
                </ButtonGroup>
            </Col>
        </Row>
    </>
    );
    //                 <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" style={{ marginBottom: '45px' }}>
    //                     <Tab
    //                         eventKey="all"
    //                         title="All">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="computers"
    //                         title="Computers"
    //                         type="button"
    //                         onClick={props.itemFilter}
    //                         value="Computers">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="tablets/phones"
    //                         title="Tablets/Phones">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="parts"
    //                         title="Parts">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="services"
    //                         title="Services">
    //                     </Tab>
    //                     <Tab
    //                         eventKey="other"
    //                         title="Other">
    //                     </Tab>
    //                 </Tabs>
    //             </Col>
    //         </Row>
    //     </>
    // );
}

export default TabsBar;