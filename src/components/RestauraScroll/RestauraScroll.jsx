import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RestauraScroll() {
    const { key: pathname } = useLocation();
    const location = useLocation()

    useEffect(() => {
        console.log(location)
        window.scrollTo(0, 0);
    }, [pathname])
}
