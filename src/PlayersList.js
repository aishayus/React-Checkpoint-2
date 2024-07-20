import React from 'react'
import './App.css'
// import Player from './Player'
import players from './players'

const PlayersList = ({name, team, nationality, jerseyNumber, age, img}) => {
    return (
        <>
            <div className='container'>
            {
                players.map((x) => {
                    return (
                        <div className='box'>

                            <div className='content'>

                                <div className='img-box'>
                                    <img src={x.img} alt={x.name}></img>
                                </div>
                                <div className='title'>
                                    <h1>{x.name}</h1>
                                    <h2>{x.age}</h2>
                                </div>
                                <div className='info'>
                                    <p>
                                        Nationality: {x.nationality}
                                    </p>
                                    <p>
                                        Team: {x.team}
                                    </p>
                                    <p>
                                        Jersey Number: #{x.jerseyNumber}
                                    </p>
                                </div>

                            </div>

                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default PlayersList
