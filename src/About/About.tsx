import React from 'react'
import PropTypes from 'prop-types'
import me from './shay.jpg';
import Highlight from 'react-highlight.js'

function About() {
    return (
        <div>
            <img src={me} className="profilePic" alt="shay"/>
            <Highlight language={'swift'} >
{`if isFire {
    Firefighter()
} else if goodWeather {
    Photographer()
} else {
    Code(allTheThings)
}`}
            </Highlight>
        </div>
    )
}

About.propTypes = {

}

export default About

