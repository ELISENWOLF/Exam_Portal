import QuestionCard from "./QuestionCard"


const QuestionList = ({ data }) => {
  return (
    <>
      {
        data?.map((item, index) => (
          <QuestionCard item={item} key={index} />
        ))
      }
    </>
  )
}

export default QuestionList