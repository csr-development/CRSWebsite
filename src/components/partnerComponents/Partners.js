import React from 'react'
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import i1 from '../../images/partners/redbull.jpg';
import i2 from '../../images/partners/bigChief.jpg';
import i3 from '../../images/partners/hershey.jpg';
import i4 from '../../images/partners/Fiance.jpg';
import i5 from '../../images/partners/northstar.jpg';
import i6 from '../../images/partners/moisson.jpg';
import i7 from '../../images/partners/CaNeda.jpg';
import i8 from '../../images/partners/fourmi.jpg';
import i9 from '../../images/partners/orca.jpg';
import i10 from '../../images/partners/atBay.jpg';
import { SignalCellularConnectedNoInternet3Bar } from '@material-ui/icons';

export default function Partners() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#a00", padding: "30px" }}>
                Our Official Partners</h1>
            <div className="slider" style={{ width: "90%" }}>
                <div className="slide-track">
                    <div className="slide">
                        <img src={i1} alt='redbull' />
                    </div>
                    <div className="slide">
                        <img src={i2} alt='bigChief'/>
                    </div>
                    <div className="slide">
                        <img src={i3} alt='hershey'/>
                    </div>
                    <div className="slide">
                        <img src={i4} alt='fiance'/>
                    </div>
                    <div className="slide">
                        <img src={i5} alt='northstar'/>
                    </div>
                    <div className="slide">
                        <img src={i6} alt='moisson'/>
                    </div>
                    <div className="slide">
                        <img src={i7} alt='CaNeda' />
                    </div>
                    <div className="slide">
                        <img src={i8} alt='fourmi'/>
                    </div>
                    <div className="slide">
                        <img src={i9} alt='orca' />
                    </div>
                    <div className="slide">
                        <img src={i10} alt='altBay' />
                    </div>
                </div>
            </div>
        </div>
    )
}
