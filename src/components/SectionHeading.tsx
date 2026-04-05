import { motion } from "framer-motion";

export const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-ocean-deep font-bold tracking-widest text-xs uppercase mb-2 block"
        >
            {subtitle}
        </motion.span>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
        >
            {title}
        </motion.h2>
    </div>
);