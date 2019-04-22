import React from 'react';
import { FeedbackBox } from '../components/FeedbackBox';
import { ContactForm } from '../components/ContactForm';

export default class OverviewScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            starRating: 3
        }
    }

    onStarClick = (starRating) => {
        this.setState({
            starRating
        })
    }

    render(){
        return(
            <div className='contentContainer'>
                <FeedbackBox numStars={5} value={this.state.starRating} onStarClick={this.onStarClick}/>
                <ContactForm
                    title="Do you need help or an advice?"
                    t1="Contact us at any time – we’re happy to help you with any questions, insecurities, delights, thoughts and concerns!"
                    t2="Or just phone us up, we’re here for you at any time."
                    title2="Need a refill?"
                    t3="Just give us a call and it’s at yours within one day! We don’t want you to have to wait for your tasty greens :-)"
                    onSubmit={() => console.log("submit")}
                />
            </div>
        )
    }
}