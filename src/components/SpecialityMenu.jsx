import React from 'react'
import { assets, specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='Speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium '>Find by Speciality </h1>
        <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div>
            {specialityData.map((item, index) => (
                <Link key={index} to={`.doctors/${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            )) }
        </div>
    </div>
  )
}

export default SpecialityMenu
