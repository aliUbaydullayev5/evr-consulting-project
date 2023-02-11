import React from 'react'
import Root from "@/root";
import HomeBackImageUI from "@/UI/Consulting/homeBackImageUI";
import HomeSubTextAndImgUi from "@/UI/Consulting/homeSubTextAndImgUi";
import TwoImgCenterTextUI from "@/UI/Consulting/twoImgCenterTextUI";
import LatestProjectsComponent from "@/components/LatestProjectsComponent";

const Consulting = () => {
    return(
        <Root>
            <HomeBackImageUI />
            <HomeSubTextAndImgUi />
            <TwoImgCenterTextUI />
            <LatestProjectsComponent />
        </Root>
    )
}

export default Consulting