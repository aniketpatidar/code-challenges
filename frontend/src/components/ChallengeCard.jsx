import DefaultImage from '../assets/undraw_learning_sketching_nd4f.svg';
import { Link } from 'react-router-dom';

const ChallengeCard = ({ challenge }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const dateText = () => {
    const startDate = new Date(challenge.start_date)
    const endDate = new Date(challenge.end_date)
    const currentDate = new Date()
    if (currentDate < startDate) {
      return `Starts on ${formatDate(startDate)}`
    } else if (currentDate > endDate) {
      return `Ended on ${formatDate(endDate)}`
    } else {
      return `Ends on ${formatDate(endDate)}`
    }
  }
  return (
    <Link to={`/challenge/${challenge.id}`}>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
        <img src={challenge.image || DefaultImage} alt={challenge.title} />
        <div className="p-4 mt-4">
          <h3 className='text-medium font-bold line-clamp-1 text-elipsis line-clamp-1'>
            {challenge.title}
          </h3>
          <p className='text-sm'>{dateText()}</p>
        </div>
      </div>
    </Link>
  );
}
export default ChallengeCard
