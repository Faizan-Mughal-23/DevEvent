"use client"

import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
    const handleExploreClick = () => {
        posthog.capture("events_explored");
    };

    return (
        <div>
            <button className="mt-7 mx-auto" type="button" id="explore-btn" onClick={handleExploreClick}>
                <a href="#events">
                    Explore Events
                    <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
                </a>

            </button>
        </div>
    );
};

export default ExploreBtn;