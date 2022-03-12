import { MutableRefObject, useRef } from "react";
import { useInViewport } from "react-in-viewport";

const useReactViewPort = () => {
    const viewPortRef = useRef() as MutableRefObject<HTMLInputElement>;
    const { inViewport, enterCount } = useInViewport(viewPortRef);
    const getStyles = () => {
        if (inViewport && enterCount === 1) {
            return { WebkitTransition: "opacity 2s ease-in-out" };
        } else if (!inViewport && enterCount < 1) {
            return { WebkitTransition: "none", opacity: "0" };
        } else {
            return {};
        }
    };
    return {
        getStyles,
        viewPortRef
    };
};

export default useReactViewPort;
