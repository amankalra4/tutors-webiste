import { useRouter } from "next/router";
import { MutableRefObject } from "react";

const useNavHandleClick = () => {
    const { push } = useRouter();

    const handleClick = (inp: MutableRefObject<HTMLInputElement> | undefined, isRefOrRoute: boolean | string) => {
        if (typeof isRefOrRoute === "boolean") {
            inp!.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            push(isRefOrRoute);
        }
    };
    return {
        handleClick
    };
};

export default useNavHandleClick;
