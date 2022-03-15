import Score from "./Score";


const Students = (props) => {
  return ( 
    <>
      Name: {props.student.name}
      Bio: {props.student.bio}
          {props.student.scores.map(score =>
          <Score key={score.score} score={score.score} date={score.date}/>
        )}
    </>
  );
}

export default Students;