import React from 'react';
import './Badge.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName, IconLookup } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

export const Badge = (props: { url: string | undefined; icon: IconName | [IconPrefix, IconName] | IconLookup; }) => {
    library.add(fab);
    
    return (
        <a href={props.url}>
            <FontAwesomeIcon icon={props.icon} />
        </a>
    )
}

