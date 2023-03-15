import { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { toast } from 'react-toastify'

import Helmet from '../../Components/Helmet/Helmet'
import Questions from '../../assests/Questions'
import '../../Styles/test.css'
import { useNavigate } from 'react-router-dom'

const Test = () => {

  const [questionsData, setQuestionsData] = useState(Questions)
  const [ questions, setQuestions ] = useState()
  const [ currentQuestion, setCurrentQuestion ] = useState()
  const [ nextQuestion, setNextQuestion ] = useState()
  const [ previousQuestion, setPreviousQuestion ] = useState()
  const [ answer, setAnswer ] = useState('')
  const [ numberofQuestions, setNumberofQuestions ] = useState(0)
  const [ numberofAnsweredQuestions, setNumberofAnsweredQuestions] = useState(0)
  const [ currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [ score, setScore] = useState(0)
  const [ correctAnswers, setCorrectAnswers] = useState(0)
  const [ wrongAnswers, setWrongAnswers] = useState(0)
  const [ minutes, setMinutes] = useState('00')
  const [ seconds, setSeconds] = useState('00')

  const navigate = useNavigate()

  const filterdProducts = Questions.filter((item) => item.subject === localStorage.getItem('sub'))
    const leng = filterdProducts.length

  useEffect(() => {
    setAnswer(questionsData[currentQuestionIndex].answer)
    console.log('Answer',answer);
  })

  const handleOptionClick = (e) => {
    if(e.target.innerHTML.toLowerCase() === answer.toLowerCase()){
      setCorrectAnswers(correctAnswers + 1)
      setNumberofAnsweredQuestions(numberofAnsweredQuestions + 1)
      setScore(score + 1)
      toast.success('Correct Answer')
    }else{
      setWrongAnswers(wrongAnswers + 1)
      setNumberofAnsweredQuestions(numberofAnsweredQuestions + 1)
      toast.error('Wrong Answer')
    }
    if(currentQuestionIndex < leng -1){
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  console.log('Correct', correctAnswers);
  console.log('Wrong', wrongAnswers);
  console.log('Score', score);
  console.log('Number of Answered', numberofAnsweredQuestions);
  console.log('Index', currentQuestionIndex);

  useEffect(() => {
    const filterValue = localStorage.getItem("sub")
    if (filterValue) {
      const filterdProducts = Questions.filter((item) => item.subject === filterValue)
      setQuestionsData(filterdProducts)
    }
  }, [])

  return (
    <Helmet title='Test'>
        <div className='container'>
          <Row>
            <Col lg='8'>
              <div className='questions'>
                <div className='timer-container d-flex justify-content-between'>
                  <span className='left'>{currentQuestionIndex + 1} of {questionsData.length}</span>
                  <span className='right'>{minutes}:{seconds}<i class="ri-time-line"/></span>
                </div>
                <h5>{questionsData[currentQuestionIndex].question}</h5>
                <div className="options-container">
                  <p className="option" onClick={handleOptionClick}>{questionsData[currentQuestionIndex].optionA}</p>
                  <p className="option" onClick={handleOptionClick}>{questionsData[currentQuestionIndex].optionB}</p>
                </div>
                <div className="options-container">
                  <p className="option" onClick={handleOptionClick}>{questionsData[currentQuestionIndex].optionC}</p>
                  <p className="option" onClick={handleOptionClick}>{questionsData[currentQuestionIndex].optionD}</p>
                </div>
                <div className="button-container">
                  {
                    (currentQuestionIndex === 0) ? ('') : (
                      <>
                        <button className='prev_btn' onClick={() => {
                          setCurrentQuestionIndex(currentQuestionIndex - 1)
                        }}>Previous</button>
                      </>
                    )
                  }
                  {
                    (currentQuestionIndex === leng - 1) ? (
                      <>
                      <button className='submit_btn'>Submit</button>
                      </>
                    ) : (
                      <>
                        <button className='next_btn' onClick={() => {
                          setCurrentQuestionIndex(currentQuestionIndex + 1)
                        }}>Next</button>
                        <button className='skip_btn'>Skip</button>
                      </>
                    )
                  }
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <textarea name="" id="" cols="64" rows="10"/>
            </Col>
          </Row>
        </div>
    </Helmet>
  )
}

export default Test