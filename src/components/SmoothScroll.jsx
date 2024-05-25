import { ReactLenis } from  "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {
    return (
        <ReactLenis root options={{lerp: 0.1, duration: 0.5, smoothTouch: true}}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;