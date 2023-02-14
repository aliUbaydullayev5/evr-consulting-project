import React from 'react'
import Root from "@/root";
import HomeBackImageUI from "@/UI/consulting/HomeBackImageUI";
import HomeSubTextAndImgUi from "@/UI/consulting/HomeSubTextAndImgUi";
import TwoImgCenterTextUI from "@/UI/consulting/TwoImgCenterTextUI";
import LatestProjectsComponent from "@/components/consulting/LatestProjectsComponent";

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