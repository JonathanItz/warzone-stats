import React from 'react'

const roundNumber = ( num ) => {
    return Math.round( ( num + Number.EPSILON ) * 100 ) / 100
}

export default function Results( { stats, username, platform } ) {
    return (
        <div className="stats-container">
            <div className="row user">
                <div className="username columns eight">
                    <h4>Stats for: { username }</h4>
                </div>
                <div className="platform columns four">
                    <h5>{ platform }</h5>
                </div>
            </div>

            <div className="row stats-row">
                <div className="stat-container columns four">
                    <div className="heading columns six">Wins</div>
                    <div className="stat columns six">{ stats.wins }</div>
                </div>
                <div className="stat-container columns four">
                    <div className="heading columns six">Top Five</div>
                    <div className="stat columns six">{ stats.topFive }</div>
                </div>
                <div className="stat-container columns four">
                    <div className="heading columns six">Top Ten</div>
                    <div className="stat columns six">{ stats.topTen }</div>
                </div>
            </div>

            <div className="row stats-row">
                <div className="stat-container columns four">
                    <div className="heading columns six">KD</div>
                    <div className="stat columns six">{ roundNumber( stats.kdRatio ) }</div>
                </div>
                <div className="stat-container columns four">
                    <div className="heading columns six">Kills</div>
                    <div className="stat columns six">{ stats.kills }</div>
                </div>
                <div className="stat-container columns four">
                    <div className="heading columns six">Deaths</div>
                    <div className="stat columns six">{ stats.deaths }</div>
                </div>
            </div>

            <div className="row stats-row">
                <div className="stat-container columns four">
                    <div className="heading columns six">Score</div>
                    <div className="stat columns six">{ stats.score }</div>
                </div>
                <div className="stat-container columns four">
                    <div className="heading columns six">Revives</div>
                    <div className="stat columns six">{ stats.revives }</div>
                </div>
                <div className="stat-container columns four">
                    <div className="heading columns six">Downs</div>
                    <div className="stat columns six">{ stats.downs }</div>
                </div>
            </div>

            <div className="row stats-row">
                <div className="stat-container columns four">
                    <div className="heading columns six">Score Per Minute</div>
                    <div className="stat columns six">{ roundNumber( stats.scorePerMinute ) }</div>
                </div>
                <div className="stat-container columns four">
                    <div className="heading columns six">Total Games</div>
                    <div className="stat columns six">{ stats.gamesPlayed }</div>
                </div>
                <div className="stat-container columns four">
                    <div className="heading columns six">Time Played</div>
                    <div className="stat columns six">{ stats.timePlayed }</div>
                </div>
            </div>

        </div>
    )
}
