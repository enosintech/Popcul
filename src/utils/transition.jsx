import { motion } from "framer-motion";

export const homeTransition = (Component) => {
    return () => (
        <>
            <Component />
            <motion.div
                className="show-home"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
            </motion.div>
            <motion.div 
                className="leave-home"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    )
}

export const upTransition = (Component) => {

    return () => (
        <>
            <Component />
            <motion.div 
                className="slide-in"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
            <motion.div 
                className="slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    )
}

export const leftTransition = (Component) => {
    return () => (
        <>
            <Component />
            <motion.div
                className="slide-left"
                initial={{scaleX: 0}}
                animate={{scaleX: 0}}
                exit={{scaleX: 1}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
            <motion.div
                className="slide-right"
                initial={{scaleX: 1}}
                animate={{scaleX: 0}}
                exit={{scaleX: 0}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    )
}