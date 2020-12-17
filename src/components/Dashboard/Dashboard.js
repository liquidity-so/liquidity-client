import React, {Component} from 'react'
import SineWaveIcon from '../../assets/misc/sineWave-1.png'
import TokenService from '../../services/token.service';
import SearchWidget from '../SearchWidget/SearchWidget';
export default class Dashboard extends Component {
    render() {
        return(
            <>
              <SearchWidget/>
            </>
        )
    }
}
