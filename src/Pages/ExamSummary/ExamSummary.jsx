import { Link, useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import Helmet from '../../Components/Helmet/Helmet'
import '../../Styles/exam.css'
import BarChart from '../BarChart/BarChart'


const ExamSummary = () => {
    
    
    const location = useLocation()
    const data = location.state?.data

    console.log(data);

    const score = (data.score / data.numberofQuestions) * 100
    const mark = data.score
    const numberofQuestions = data.numberofQuestions
    const numberofAnsweredQuestions = data.numberofAnsweredQuestions
    const correctAnswers = data.correctAnswers
    const wrongAnswers = data.wrongAnswers
    // const currentQuestionIndex = data.currentQuestionIndex
    const user = data.username
    const subject = data.subject
    const text = data.text
    const skip = data.skip

    let remark

    if(score <= 30){
        remark = 'You Need More Practice'
    }else if(score > 30 && score <= 50){
        remark = 'Better Luck Next Time'
    }else if(score > 50 && score <= 70){
        remark = 'Good work'
    }else if(score > 70 && score <= 90){
        remark = 'Great Work'
    }else{
        remark = 'Excellent'
    }

    return (
        <Helmet title='Result'>
            <Container>
                <Row>
                    <Col lg='8'>
                    <div className='result'>
                        <div className='container1'>
                            <p className='logo'><i class="ri-checkbox-circle-line"></i></p>
                            <span className="main-head">Exam Ended</span>
                        </div>
                        <div className='container2'>
                            <div className='head'>
                                <h1>Exam Result</h1>
                            </div>
                            <hr />
                            <div className="container3">
                                <h4>{remark}</h4>
                                <h2>Your Score: {score.toFixed(0)}&#37;</h2>
                                <div className='data'>
                                <span className="left">User:</span>
                                <span className="right">{user}</span><br/>
                                <span className="left">Subject:</span>
                                <span className="right">{subject}</span><br/>
                                <span className="left">Total Number of Questions:</span>
                                <span className="right">{numberofQuestions}</span><br/>
                                <span className="left">You Scored:</span>
                                <span className="right">{mark}</span><br/>
                                <span className="left">Questions Answered Correct :</span>
                                <span className="right">{correctAnswers}</span><br/>
                                <span className="left">Questions Answered Wrong:</span>
                                <span className="right">{wrongAnswers}</span><br/>
                                <span className="left">Number of Questions Answered:</span>
                                <span className="right">{numberofAnsweredQuestions}</span><br/>
                                <span className="left">Number of Questions Skipped:</span>
                                <span className="right">{skip}</span><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col lg='4' className='right_container'>
                        <Container>
                            <div className="text">
                                <h1>Your Note's</h1>
                                <hr />
                                <p className="rough_note">{text}</p>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg='12'>
                        <BarChart />
                        <Link to='/'><button className='try_btn'>Try Again</button></Link>
                    </Col>
                </Row>
            </Container>
        </Helmet>
      )
}

export default ExamSummary