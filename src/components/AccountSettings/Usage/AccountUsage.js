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
        <div class="w-layout-grid settings-card-header">
        <div class="left-side">
        <h1 class="heading-7">Volume Usage</h1>
        </div>
        <div class="show-x-dropdown">
            <div class="counter_trigger">
            <div class="text-block-14 ligt">Last 30 days</div>
            <img src="../images/chevron-down_white.png" loading="lazy" width="20" height="20" alt="" class="image-40"/>
            </div>
            <div class="counter_content dfasf">
            <div class="div-block-83">
                <div class="inactive_time">
                <div class="text-block-38">Last 7 days</div>
                </div>
                <div class="inactive_time">
                <div class="text-block-37">Last day</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <img src={USAGE_IMG} 
        loading="lazy" sizes="100vw" 
        srcSet={`${USAGE_IMG_500} 500w`, `${USAGE_IMG_800} 800w`,
        `${USAGE_IMG_1080} 1080w`,`${USAGE_IMG_1600} 1600w`, `${USAGE_IMG} 2788w`}
        alt="" class="volume-usage-chart"/>
        <div class="w-layout-grid volume-searches-average-size-container">
            <div class="div-block-72">
            <div class="text-block-24">Volume</div>
            <div class="text-block-27">$532,121</div>
            </div>
            <div class="div-block-73">
            <div class="text-block-25">Searches(#)</div>
            <div class="text-block-28">1230</div>
            </div>
            <div>
            <div class="text-block-26">Average size</div>
            <div class="text-block-29">$7,000</div>
            </div>
        </div>
        <UsageTable/>
    </>
  )

}
