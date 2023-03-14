import { Col } from 'reactstrap'


const QuestionCard = ({ item }) => {

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item"> 
        <div className="p-2 product_info">
          <span>{item.productName}</span>
          <span>{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span>{item.Desc}</span>
        </div>
      </div>
    </Col>
  )
}

export default QuestionCard