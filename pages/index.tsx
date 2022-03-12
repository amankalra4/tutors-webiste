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
import { useRouter } from "next/router";
import { IRefName } from "@src/components/navbar/constants";

type IArrayRef = {
    refName: IRefName;
    refValue: MutableRefObject<HTMLInputElement>;
};

export const RefContext = createContext<IArrayRef[]>([]);

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const apiData = props.cmsApiData;
    const seekAndBuildRef = useRef() as MutableRefObject<HTMLInputElement>;
    const productsRef = useRef() as MutableRefObject<HTMLInputElement>;
    const footerRef = useRef() as MutableRefObject<HTMLInputElement>;
    const arrayRef: IArrayRef[] = [
        {
            refName: "seekAndBuildRef",
            refValue: seekAndBuildRef
        },
        {
            refName: "productsRef",
            refValue: productsRef
        },
        {
            refName: "footerRef",
            refValue: footerRef
        }
    ];
    const x = arrayRef.find((el1) => el1.refName === "footerRef")?.refValue;
    const { push } = useRouter();

    const handleClick = (inp: MutableRefObject<HTMLInputElement> | undefined, isRefOrRoute: boolean | string) => {
        // kept === true because it can be string as well
        if (isRefOrRoute === true) {
            inp!.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            push(isRefOrRoute as string);
        }
    };

    return (
        <div>
            <RefContext.Provider value={arrayRef}>
                <Header handleClick={handleClick} />
                <TopContainer visionText={apiData?.vision_text!} />
                <div ref={seekAndBuildRef}>
                    <SeekAndBuild seekAndBuildData={apiData!} />
                </div>
                <div ref={productsRef}>
                    <Products productsData={apiData!} />
                </div>
                <div ref={footerRef}>
                    <Footer address={apiData?.address!} mobileNumber={apiData?.mobile_number!} email={apiData?.email_id!} />
                </div>
            </RefContext.Provider>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const { data } = await axios.get<getReferenceIDInterface>(cmsBaseURL);
        const { data: cmsApiData } = await axios.get<CMSDataRootObject>(getCMSDataURL(data.refs[0].ref));
        return {
            props: { cmsApiData: cmsApiData.results.find((el) => el.slugs[0] === "home-page")?.data }
        };
    } catch (err) {
        return {
            props: { cmsApiData: null }
        };
    }
}

export default Home;
