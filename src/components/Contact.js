import React, {useState} from 'react';
import { Card } from 'react-materialize';
import emailjs from 'emailjs-com'

const Contact = (props) => {
    const [contactName, setContactName] = useState('')
    const [contactMail, setContactMail] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [contactMsg, setContactMsg] = useState('')
    const [valid, setValid] = useState({name : null, mail : null, phone : null, msg : null})

    const handleSubmit = (evt) => {
        evt.preventDefault()

        let errors = {name : null, mail : null, phone : null, msg : null}

        if (contactName === '') {
            errors = {...errors, name: 'Hey! Who are you again?'}
        } else {
            errors = {...errors, name: false}
        }

        if (contactMail !== '' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactMail) ) {
            errors = {...errors, mail: 'I don\'t think that\'ts a valid email address...'}
        } else {
            errors = {...errors, mail: false}
        }

        if (contactPhone !== '' && (contactPhone.replace(/\D/g,'').length < 9 || contactPhone.replace(/\D/g,'').length > 10) && /^\d+$/.test(contactPhone) ) {
            errors = {...errors, phone: 'That\'s gonna be one heckuva long distance charge'}
        } else if (contactPhone.length) {
            errors = {...errors, phone: false}
        }

        if (contactMail === '' && (contactPhone === '' || valid.phone)) {
            errors = {...errors, mail: 'Yo! How do I get in touch with you?'}
        }

        if (contactMsg === '') {
            errors = {...errors, msg: 'Leave a message after the beep. BEEP!'}
        } else {
            errors = {...errors, msg: false}
        }

        if (Object.values(errors).some(x => (x !== null && x !== false))) {
            setValid(errors)
        } else {
            setValid({name : false, mail : false, phone : false, msg : false})
            emailjs.send("gmail", "template_gy3HrNKm", {"contactMail": contactMail, "contactName":contactName, "contactPhone": contactPhone,"contactMsg": contactMsg}, "user_G351SbNM2Y0bWfebUkR4o")
            .then(res => {
                window.alert('Message sent! I\'ll get back to you as soon as possible!')
                setContactName('')
                setContactMail('')
                setContactPhone('')
                setContactMsg('')
                setValid({name : null, mail : null, phone : null, msg : null})
            })
        }
        
        return false
    }

    return (
        <div 
        style={{
                margin : 0,
                padding : '15px',
                marginLeft : '300px',
                flexGrow : 1,
                height : '100vh',
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                overflowY : "hidden"
            }}
        id={props.id}
        >
            <Card
            actions={[
                <a key="1" href="/" onClick={handleSubmit}>Submit</a>,
            ]}
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Get in touch"
            style={{width : "50%"}}
            >
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className={valid.name === null ? '' : valid.name ? "invalid" : "valid" } value={contactName} onChange={evt => {setContactName(evt.target.value)}} />
                            <label htmlFor="icon_prefix">Name</label>
                            <span className="helper-text" data-error={valid.name}>{valid.name}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="icon_email" type="email" className={valid.mail === null ? '' : valid.mail ? "invalid" : "valid" } value={contactMail} onChange={evt => {setContactMail(evt.target.value)}}/>
                            <label htmlFor="icon_email">Email</label>
                            <span className="helper-text" data-error={valid.mail}>{valid.mail}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" className={valid.phone === null ? '' : valid.phone ? "invalid" : "valid" } value={contactPhone} onChange={evt => {setContactPhone(evt.target.value)}}/>
                            <label htmlFor="icon_telephone">Telephone</label>
                            <span className="helper-text" data-error={valid.phone}>{valid.phone}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">message</i>
                            <textarea id="message" className={"materialize-textarea " + (valid.msg === null ? '' : valid.msg ? "invalid" : "valid") } value={contactMsg} onChange={evt => {setContactMsg(evt.target.value)}}/>
                            <label htmlFor="message">What's up?</label>
                            <span className="helper-text" data-error={valid.msg}>{valid.msg}</span>
                        </div>
                    </div>
            </Card>
        </div>
    )
}



export default Contact