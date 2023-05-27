import React, { useState, useEffect, useContext } from 'react';
import { useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DataContext from '../../DataContext';
import ContainerCSS from '../css/container.module.css';
import userCartBookCSS from './css/UserCartBook.module.css';


const CarDetail = () => {

  const { isAuthenticated } = useSelector(state=> state.auth);
  const { offices } =  useSelector((state)=> state.offices);
  const { cars, loading, error } = useSelector(state=> state.cars);

  // const { car } = useSelector(state=> state.car);
  const carContext = useContext(DataContext);
  const navigate = useNavigate()
  const params = useParams()
  const [car, setCar] = useState()
  const [selectRangeVal, setSelectRangeVal] = useState([]);
  const [selectCityVal, setSelectCityVal] = useState([]);

  // dsbhjkabjvsdkj
  function handleSelectChangeRange(e) {
    e.preventDefault()
    setSelectRangeVal(e.target.value.split(' ')[0]);
  }

  function handleSelectChangeCity(e) {
    e.preventDefault()
    setSelectCityVal(e.target.value)
  }


  function handleProceedForBooking(e, id, range, city, price){
    e.preventDefault()
    alert('Booked')
  }

  useEffect(()=>{
    const fetchCar = cars.filter((data)=>{
      if(params.id===data._id)
      return data
    })
    setCar(fetchCar[0])
  }, [])

  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      <div className={userCartBookCSS.userCarBookBook}>
        <div className={userCartBookCSS.userCarBookCartLeft}>
          {car? <><img src={car.carPicture[0].url} alt='Car Image'/></>:<><img src='' alt='Car Image'/></>}
        </div>
        <div className={userCartBookCSS.userCarBookCartRight}>
          {car? <h2>{car.carName}</h2>:<>-</>}
          <hr/>
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Company</p><h3>{car.carCompany}</h3></div>:<>-</>}
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Category & Seats</p><h3>{car.carCategory+", "+car.carSeatCapacity}</h3></div>:<>-</>}
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Engine & Model</p><h3>{car.carEngine+', '+car.carMileage}</h3></div>:<>-</>}
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Fuel & Transmission</p><h3>{car.carFuelType+', '+car.carTransmission}</h3></div>:<>-</>}
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Rental Price per km</p><h3>{car.rentalPriceCharge}</h3></div>:<>-</>}
          <div className={userCartBookCSS.cartBookingRightOption}>
            <label htmlFor="rentRange">Choose Range:</label>
            <select id="rentRange" onChange={handleSelectChangeRange} required>
              <option value={'0 km'} default>0 km</option>
              <option value={'100 km'}>100 km</option>
              <option value={'200 km'}>200 km</option>
              <option value={'300 km'}>300 km</option>
              <option value={'400 km'}>400 km</option>
              <option value={'500 km'}>500 km</option>
              <option value={'600 km'}>600 km</option>
              <option value={'700 km'}>700 km</option>
              <option value={'800 km'}>800 km</option>
              <option value={'900 km'}>900 km</option>
              <option value={'1000 km'}>1000 km</option>
            </select>&nbsp;&nbsp;&nbsp;

            <label htmlFor="RentalCity">Choose City:</label>
            <select id="RentalCity" onChange={handleSelectChangeCity} required>
              { offices
                ? 
                  <>
                  <option default>Cities...</option>
                  { offices.map((data)=>{
                    return (
                      <option key={data._id} value={data.city}>{data.city}</option>
                    )
                  }) }
                  </>
                : <></>
              }
            </select>
          </div>
          <div className={userCartBookCSS.cartBookingDetailRightPrice}>
            <div className={userCartBookCSS.cartBookingDetailRightTextArea}>
              <p>{car? <>{selectRangeVal * car.rentalPriceCharge +'₹'}</>:<>-</>}</p>
            </div>
            <div className={userCartBookCSS.cartBookingDetailRightButton}>
              <button onClick={(e)=>handleProceedForBooking(e, car._id, selectRangeVal, selectCityVal, car.rentalPrice)}>Book Now</button>
            </div>
          </div>
          <h5>Note: Car's per/km charge is applicable for number of km's (price/km) drove above selected range.</h5>
        </div>
      </div>
    </div>
  )
}

export default CarDetail