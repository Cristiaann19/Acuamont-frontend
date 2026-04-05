import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fish } from 'lucide-react';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
            <div className="relative">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 border-4 border-ocean-soft border-t-ocean-deep rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Fish className="text-ocean-deep w-8 h-8" />
                </div>
            </div>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-2xl font-display font-bold tracking-widest text-ocean-deep"
            >
                ACUAMONT
            </motion.h2>
            <div className="mt-2 text-slate-400 text-sm animate-pulse">Sumergiéndote...</div>
        </motion.div>
    );
};

