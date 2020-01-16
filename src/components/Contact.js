import React from 'react';
import { Card, CardTitle, Icon  } from 'react-materialize';

const Contact = (props) => (
    <div 
    style={{
            margin : 0,
            padding : '15px',
            marginLeft : '300px',
            flexGrow : 1,
            height : '100vh',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
        }}
    id={props.id}
    >
        <Card
        actions={[
            <a key="1" href="#">Submit</a>,
        ]}
        className="blue-grey darken-1"
        closeIcon={<Icon>close</Icon>}
        revealIcon={<Icon>more_vert</Icon>}
        textClassName="white-text"
        title="Get in touch"
        style={{width : "50%"}}
        >
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" />
                        <label for="icon_prefix">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_email" type="email" className="validate" />
                        <label for="icon_email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" className="validate" />
                        <label for="icon_telephone">Telephone</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">message</i>
                        <textarea id="message" className="materialize-textarea" />
                        <label for="message">What's up?</label>
                    </div>
                </div>
        </Card>
        {/* <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" />
                        <label for="icon_prefix">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_email" type="email" className="validate" />
                        <label for="icon_email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" className="validate" />
                        <label for="icon_telephone">Telephone</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">message</i>
                        <textarea id="message" className="materialize-textarea" />
                        <label for="message">What's up?</label>
                    </div>
                </div>
            </form>
        </div> */}
    </div>
)

export default Contact