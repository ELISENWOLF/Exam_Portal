import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../../Components/Helmet/Helmet'
import question from '../../assests/Question'
import QuestionList from '../../Components/UI/QuestionList'

const Test = () => {

  const [productsData, setProductsData] = useState(question)

    useEffect(() => {
    const filterValue = localStorage.getItem("sub")
    if (filterValue === "history") {
      const filterdProducts = question.filter((item) => item.category === "history")
      setProductsData(filterdProducts)
    }
    if (filterValue === "arts") {
      const filterdProducts = question.filter((item) => item.category === "arts")
      setProductsData(filterdProducts)
    }
    if (filterValue === "physics") {
      const filterdProducts = question.filter((item) => item.category === "physics")
      setProductsData(filterdProducts)
    }

    console.log(filterValue);
    }, [])

  return (
    <Helmet title='Test'>
        <Container className='w-100'>
          <Row>
            <Col lg='8'>
              <QuestionList data={productsData} />
            </Col>
            <Col lg='4'>
              <textarea name="" id="" cols="30" rows="10" value=""/>
            </Col>
          </Row>
        </Container>
    </Helmet>
  )
}

export default Test