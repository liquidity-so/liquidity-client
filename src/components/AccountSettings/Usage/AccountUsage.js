import React from 'react';
import UsageTable from './UsageTable';
import USAGE_IMG from '../../../assets/misc/UsageChart.png'
import USAGE_IMG_500 from '../../../assets/misc/UsageChart-p-500.png';
import USAGE_IMG_800 from '../../../assets/misc/UsageChart-p-800.png';
import USAGE_IMG_1080 from '../../../assets/misc/UsageChart-p-1080.png';
import USAGE_IMG_1600 from '../../../assets/misc/UsageChart-p-1600.png';



export default function AccountUsage(props) {
    return (
        <>
        <div className="w-layout-grid settings-card-header">
        <div className="left-side">
        <h1 className="heading-7">Volume Usage</h1>
        </div>
        <div className="show-x-dropdown">
            <div className="counter_trigger">
            <div className="text-block-14 ligt">Last 30 days</div>
            <img src="../images/chevron-down_white.png" loading="lazy" width="20" height="20" alt="" className="image-40"/>
            </div>
            <div className="counter_content dfasf">
            <div className="div-block-83">
                <div className="inactive_time">
                <div className="text-block-38">Last 7 days</div>
                </div>
                <div className="inactive_time">
                <div className="text-block-37">Last day</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <img src={USAGE_IMG} 
        loading="lazy" sizes="100vw" 
        srcSet={`${USAGE_IMG_500} 500w`, `${USAGE_IMG_800} 800w`,
        `${USAGE_IMG_1080} 1080w`,`${USAGE_IMG_1600} 1600w`, `${USAGE_IMG} 2788w`}
        alt="" className="volume-usage-chart"/>
        <div className="w-layout-grid volume-searches-average-size-container">
            <div className="div-block-72">
            <div className="text-block-24">Volume</div>
            <div className="text-block-27">$532,121</div>
            </div>
            <div className="div-block-73">
            <div className="text-block-25">Searches(#)</div>
            <div className="text-block-28">1230</div>
            </div>
            <div>
            <div className="text-block-26">Average size</div>
            <div className="text-block-29">$7,000</div>
            </div>
        </div>
        <UsageTable/>
    </>
  )

}
