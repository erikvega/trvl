import React from 'react'
import Card from './Card'
import './Cards.css'
 
 function Cards() {
     return (
         <div className='cards'>
             <h1>Check Out These Epic Destinations!</h1>
             <div className='cards__container'>
                 <div className='cards__wrapper'>
                     <ul className='cards__items'>
                        <Card 
                            src='images/img-6.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <Card 
                            src='images/img-4.jpg'
                            text='Feel the rush of Tokyo and Shibuya Crossing'
                            label='Adventure'
                            path='/services'
                        />
                     </ul>
                     <ul className='cards__items'>
                        <Card 
                            src='images/img-3.jpg'
                            text='Play tennis in the most secluded areas in the world'
                            label='Luxury'
                            path='/services'
                        />
                        <Card 
                            src='images/img-2.jpg'
                            text='Experience a guided deep sea fishing excursion'
                            label='Adventure'
                            path='/services'
                        />
                        <Card 
                            src='images/img-1.jpg'
                            text='Travel through the islands of Bali on a private cruise'
                            label='Luxury'
                            path='/services'
                        />
                     </ul>
                 </div>
             </div>
         </div>
     )
 }
 
 export default Cards
 