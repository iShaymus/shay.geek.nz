import React from 'react'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight.js'

function About() {
    return (
        <div>
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

