import { useState } from 'react';
import './App.css';
import star from './images/icon-star.svg';
import thanks from './images/illustration-thank-you.svg';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Items, setItems] = useState("");
  
  const Button = ({number}) => {
    return <button onClick={() => setItems(number)} className='w-10 tablet:px-7 flex justify-center items-center bg-gray-700 text-LightGrey font-medium rounded-full aspect-square hover:bg-Orange focus:bg-gray-400 duration-150'>{number}</button>
  }

  const Rating = () => {
    return (
      <div className="w-[85%] min-h-[40vh] max-w-[410px] tablet:w-[30%] bg-DarkBlue px-6 py-6 rounded-2xl">
        <div className='w-10 flex justify-center items-center bg-gray-700 rounded-full aspect-square'>
          <img className='p-2' src={star} alt="star logo" />
        </div>
        <h2 className='text-[25px] text-White font-medium py-4'>How did we do?</h2>
        <p className='text-[14px] text-LightGrey'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        
        <ul className='text-gray-200 flex flex-row justify-between py-6'>
          <li><Button number={1} /></li>
          <li><Button number={2} /></li>
          <li><Button number={3} /></li>
          <li><Button number={4} /></li>
          <li><Button number={5} /></li>
        </ul>

        <div>
          <button onClick={() => setIsSubmitted(true)} className='w-[100%] py-3 font-semibold tracking-wider bg-Orange rounded-full cursor-pointer hover:bg-White'>SUBMIT</button>
        </div>
  
      </div>
    )
  }
  
  const Thankyou = ({Items}) => {
    return (
      <div className="w-[85%] min-h-[40vh] max-w-[410px] tablet:w-[30%] bg-DarkBlue px-6 py-6 rounded-2xl flex flex-col justidy-center items-center">
        <img className='py-3' src={thanks} alt="image" />
        <div className="bg-gray-700 flex justify-center items-center rounded-full px-3 py-1 my-3">
          <p className="text-[14px] text-Orange">You selected {Items} out of 5</p>
        </div>
        <h2 className="text-[25px] text-White py-3">Thank you!</h2>
        <p className="text-LightGrey text-center text-[14px]">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
  }

  return (
    <div className="App w-[100%] h-[100vh] flex justify-center items-center font-Overpass">
      {!isSubmitted && <Rating />}
      {isSubmitted && <Thankyou Items={Items} />}
    </div>
  );
}

export default App;
