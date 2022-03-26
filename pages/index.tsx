/* eslint-disable @next/next/no-img-element */
import { getReferenceIDInterface } from "@modules/interface/api";
import { cmsBaseURL, getCMSDataURL } from "@modules/constants";
import { CMSDataRootObject } from "@modules/interface/cms-api-data";
import axios from "axios";
import Header from "../src/components/header";
import TopContainer from "@components/top-container";
import { InferGetStaticPropsType } from "next";
import SeekAndBuild from "@components/seek-and-build";
import Products from "@components/products";
import Footer from "@components/footer";
import { createContext, MutableRefObject, useRef } from "react";
import { IRefName } from "@src/components/navbar/constants";
import { css } from "@emotion/css";
import useNavHandleClick from "@modules/use-handle-nav-click";
import MetaData from "@components/meta-data";

type IArrayRef = {
    refName: IRefName;
    refValue: MutableRefObject<HTMLInputElement>;
};

export const RefContext = createContext<IArrayRef[]>([]);

const circleImage = css`
    position: absolute;
    top: -560px;
    left: -250px;
    z-index: -1;
    transform: rotate(20deg);
    img {
        width: 48rem;
        transform: rotate(240deg);
    }
    @media (max-width: 767px) {
        top: -120px;
        left: 0;
        transform: rotate(0);
        img {
            width: 60%;
            transform: rotate(240deg);
        }
    }
`;

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const apiData = props.getData;
    const seekAndBuildRef = useRef() as MutableRefObject<HTMLInputElement>;
    const productsRef = useRef() as MutableRefObject<HTMLInputElement>;
    const arrayRef: IArrayRef[] = [
        {
            refName: "seekAndBuildRef",
            refValue: seekAndBuildRef
        },
        {
            refName: "productsRef",
            refValue: productsRef
        }
    ];
    const { handleClick } = useNavHandleClick();

    if (!apiData) {
        return <p>Error</p>;
    }

    return (
        <div>
            <MetaData title="Learn with Elite" description="To make the education and digital literacy affordable and available to all the remote, developed and underdeveloped regions of India." />
            <div className={circleImage}>
                <img src={apiData["sun-background"].url} alt={apiData["sun-background"].alt} />
            </div>
            <RefContext.Provider value={arrayRef}>
                <Header handleClick={handleClick} showWhite={false} currentPage="/" />
                <TopContainer visionText={apiData.vision_text} homeImage={apiData.home_page_image} />
                <div ref={seekAndBuildRef}>
                    <SeekAndBuild seekAndBuildData={apiData} />
                </div>
                <div ref={productsRef}>
                    <Products productsData={apiData} />
                </div>
                <Footer address={apiData.address} mobileNumber={apiData.mobile_number} email={apiData.email_id} />
            </RefContext.Provider>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const { data } = await axios.get<getReferenceIDInterface>(cmsBaseURL);
        const { data: cmsApiData } = await axios.get<CMSDataRootObject>(getCMSDataURL(data.refs[0].ref));
        return {
            props: { getData: cmsApiData.results.find((el) => el.slugs[0] === "home-page")?.data }
        };
    } catch (err) {
        return {
            props: { getData: null }
        };
    }
}

export default Home;
