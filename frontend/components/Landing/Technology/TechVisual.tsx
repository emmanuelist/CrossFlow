import { Technology } from "@/types/technology";
import { motion } from "framer-motion";
import { ArrowRightLeft, Shield, Smartphone } from "lucide-react";

interface TechVisualProps {
    tech: Technology;
}

const TechVisual: React.FC<TechVisualProps> = ({ tech }) => (
    <div className="w-full md:w-1/3 flex items-center justify-center">
        <motion.div
            className={`relative w-52 h-52 rounded-full bg-gradient-to-br ${tech.color} p-10 flex items-center justify-center`}
            initial={{ opacity: 0, rotate: 15 }}
            animate={{
                opacity: 1,
                rotate: 0,
                boxShadow: [
                    `0 0 20px 0 rgba(0,0,0,0.1)`,
                    `0 0 60px 0 rgba(0,0,0,0.2)`,
                    `0 0 20px 0 rgba(0,0,0,0.1)`
                ]
            }}
            transition={{ duration: 0.8 }}
        >
            {/* Tech logo with animated background */}
            <div className="absolute inset-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <motion.div
                    className="text-white text-6xl font-bold relative z-10 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    {tech.id === "bridge-protocol" && <ArrowRightLeft className="h-12 w-12 text-white" />}
                    {tech.id === "fiat-ramp" && <span className="text-white text-5xl font-bold">$</span>}
                    {tech.id === "security-layer" && <Shield className="h-12 w-12 text-white" />}
                    {tech.id === "mobile-access" && <Smartphone className="h-12 w-12 text-white" />}
                </motion.div>

                {/* Background pattern animation */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
                    style={{
                        backgroundSize: '10px 10px',
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)'
                    }}
                />
            </div>

            {/* Animated outer ring */}
            <motion.div
                className="absolute -inset-2 rounded-full border-2 border-white/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                {/* Decorative knobs on the ring */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: '50%',
                            top: `${i % 2 === 0 ? '-3px' : 'calc(100% - 3px)'}`,
                            transform: `translateX(-50%) rotate(${i * 45}deg) translateY(${i % 2 === 0 ? '-' : ''}calc(50% - 5px)) rotate(${-i * 45}deg)`,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    </div>
);

export default TechVisual;