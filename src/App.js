import React from 'react'
import Results from './Results'
import unirest from 'unirest'

class App extends React.Component {
    constructor( props ) {
        super( props )

        this.state = {
            error: false,
            errorMessage: '',
            hasSearched: false,
            username: '',
            platform: {
                xbl:    'XBOX',
                battle: 'PC',
                psn:    'Playstation'
            },
            stats: {}
        }

        this.searchStats = this.searchStats.bind( this )
    }

    searchStats( e ) {
        e.preventDefault()
        const username = e.target.gamertag.value,
            platform = e.target.platform.value

        if( username === '' ) {
            return this.setState( { error: true, hasSearched: false } )
        }

        const searchableUsername = username.replace( '#', '%2523' ) // Madman#1207

        var req = unirest("GET", `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${ searchableUsername }/${ platform }`);

        req.headers({
        	"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
        	"x-rapidapi-key": "nope",
        	"useQueryString": true
        });


        req.end( res => {
        	if ( res.body.error ) return this.setState( { errorMessage: 'An error occurred. Please double check your username is correct', hasSearched: false } )

            this.setState(
                {
                    stats: res.body.br,
                    hasSearched: true,
                    error: false ,
                    username,
                    platform: this.state.platform[ platform ]
                }
            )
        });
    }

    updateComponent() {
        const hasSearched = this.state.hasSearched

        if( hasSearched ) {
            return <Results stats={ this.state.stats } username={ this.state.username } platform={ this.state.platform } />
        }
        return <div style={{marginTop: '2rem'}}><h1>Warzone Stats</h1><p>Search your username and platform above</p><p className="error-message">{ this.state.errorMessage }</p></div>
    }

    render() {
        return (
            <>
                <header className="header">
                    <div className="header-container container">
                        <form onSubmit={ this.searchStats } className="row">
                            <div className="columns five search">
                                <input name="gamertag" className={ this.state.error ? 'error' : null } placeholder="Gamertag" />
                                <select name="platform">
                                    <option value="xbl">Xbox</option>
                                    <option value="battle">PC (Master Race)</option>
                                    <option value="psn">PSN (smh)</option>
                                </select>
                            </div>
                            <div className="columns seven submit-button">
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </header>
                <main>
                    <div className="body-container container">
                        { this.updateComponent() }
                    </div>
                </main>
            </>
        )
    }
}

export default App;
