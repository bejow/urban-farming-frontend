import React, { Component } from 'react'
import styles from './ContactForm.module.css'

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            feedBackText: ""
        }
    }

    render() {
        const {title, t1, t2, title2, t3, onSubmit} = this.props
        return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{t1}</p>
            <p className={styles.text}>{t2}</p>
            <div className={styles.button}>Call us directly!</div>
            <textarea 
                placeholder= "You can also write us directly here…"
                className={styles.input}
                value={this.state.feedBackText}
                onChange={(event) => this.setState({feedBackText: event.target.value})}
            />
            <div className={styles.button} onClick={() => this.setState({feedBackText: ""})}>Send!</div>
            <h1 className={styles.title}>{title2}</h1>
            <p className={styles.text}>{t3}</p>
        </div>
        )
    }
}
