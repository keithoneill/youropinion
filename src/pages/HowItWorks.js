import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function HowItWorks(){
    return(
        <Container>
            <Row>
                <Col style={styles.col}>
                <h1>Your Opinion</h1>
                <h2>How It Works</h2>
                <p style={styles.paragraph}>With today's current technology, news is more accessible than ever. 
                    From dedicated news outlets to social media, people have access to more news than ever. 
                    But, how reliable is the news? Few people ask that question. Most people tend to get their news from one source. 
                    People tend to stay with what they are most comfortable with. As we have seen in recent years, this can be a danger. 
                    If a majority of individuals get their news from one source, the news outlets have great power. 
                    They can influence their user base now more than ever. As Thomas Jefferson outlined, it is important to have an informed electorate.</p>
                <p style={styles.paragraph}>Your Opinion is web application that is 
                    intended to allow the user an easier way to develop their own opinion. 
                    Instead of having their opinion swayed by the news outlet they mostly use, Your Opinion will display 
                    news from multiple outlets at once. Not only that, Your Opinion will divide the news outlets between 
                    left and right leaning companies. The information will be displayed simply in a left and right column. 
                    This will allow the user to clearly see how the information is being presented to them and allow them to form their own opinion.</p>
                <p style={styles.paragraph}>Your Opinion will gather any searched topic from thousands of news sources through the internet. 
                    Then, each related article is sorted into columns based on the sources biased rating from <a href="https://mediabiasfactcheck.com/">Media Bias Fact Check</a>
                </p>
                </Col>
            </Row>
        </Container>
    )
}

export default HowItWorks

const styles={
    col:{
        color: '#F3F5F6',
        paddingTop: '2rem'
    },
    paragraph:{
        fontSize: '1.2rem'
    }
}