import { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import Helmet from '../../Components/Helmet/Helmet'
import Questions from '../../assests/Questions'
import '../../Styles/test.css'

const Test = () => {

  const [ currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [ answer, setAnswer ] = useState()
  const [ wrongAnswers, setWrongAnswers] = useState(0)
  const [ score, setScore] = useState(0)
  const [ skip, setSkip ] = useState(0)
  const [ text, setText ] = useState()
  const [isSkip, setIsSkip] = useState(false)

  const filterdProducts = Questions.filter((item) => item.subject === localStorage.getItem('sub'))
  console.log(filterdProducts);
  const leng = filterdProducts.length

  useEffect(() => {
    setAnswer(filterdProducts[currentQuestionIndex].answer)
  },[currentQuestionIndex])

  const handleOptionClick = (e) => {
    e.preventDefault()
    var selectedValue = e.target.innerHTML
    if(selectedValue.toLowerCase() === answer.toLowerCase()){
      setScore(score + 1)
      toast.success('Correct Answer.')
    }else{
      setWrongAnswers(wrongAnswers + 1)
      toast.error('Wrong Answer!')
    }

    if(currentQuestionIndex < leng - 1){
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handleSubmit = () => {
    localStorage.clear()
  }

  useEffect(() => {
    if(skip === currentQuestionIndex){
      setIsSkip(true)
    }else{
      setIsSkip(false)
    }
  })

  const numberofQuestions = leng
  const correctAnswers = score
  const numberofAnsweredQuestions = correctAnswers + wrongAnswers

  console.log(skip);

    const endGame = {
      "username": localStorage.getItem('email'),
      "subject": localStorage.getItem('sub'),
      "numberofQuestions": numberofQuestions,
      "correctAnswers": correctAnswers,
      "numberofAnsweredQuestions": numberofAnsweredQuestions,
      "score": score,
      "currentQuestionIndex":currentQuestionIndex,
      "wrongAnswers":wrongAnswers,
      "skip": skip,
      "text": text
    }

  return (
    <Helmet title='Test'>
        <div className='container'>
          <Row>
            <Col lg='8'>
              <div className='questions'>
                <div className='timer-container d-flex justify-content-between'>
                  <span className='left'>{currentQuestionIndex + 1} of {leng}</span>
                  <span className='right'>00:00<i class="ri-time-line"/></span>
                </div>
                <h5>{filterdProducts[currentQuestionIndex].question}</h5>
                <div className="options-container">
                  <p className="option" onClick={handleOptionClick}>{filterdProducts[currentQuestionIndex].optionA}</p>
                  <p className="option" onClick={handleOptionClick}>{filterdProducts[currentQuestionIndex].optionB}</p>
                </div>
                <div className="options-container">
                  <p className="option" onClick={handleOptionClick}>{filterdProducts[currentQuestionIndex].optionC}</p>
                  <p className="option" onClick={handleOptionClick}>{filterdProducts[currentQuestionIndex].optionD}</p>
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
                       {
                        isSkip ? (
                          <>
                           <button className='skip_btn' onClick={() => {
                          setSkip(skip + 1)
                        }}>Skip</button>
                          </>
                         ) : ( '' )
                       }
                        <Link to="/submit"  state={{data: endGame}}>
                          <button className='submit_btn' onClick={handleSubmit}>Submit</button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <button className='next_btn' onClick={() => {
                          setCurrentQuestionIndex(currentQuestionIndex + 1)
                        }}>Next</button>
                        <button className='skip_btn' onClick={() => {
                          setCurrentQuestionIndex(currentQuestionIndex + 1)
                          setSkip(skip + 1)
                        }}>Skip</button>
                      </>
                    )
                  }
                </div>
              </div>
            </Col>
            <Col lg='4'>
                  <textarea cols="64" rows="10" value={text} onChange={e => {setText(e.target.value)}} className='textvalue'/>
            </Col>
          </Row>
        </div>
    </Helmet>
  )
}

export default Test