import { useState } from 'react';
import { motion } from 'framer-motion';

interface ExpandingCardProps {
    imageSrc: string;
    title: string;
    content: string;
  }

  const ExpandingCard: React.FC<ExpandingCardProps> = ({ imageSrc, title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded); 
    };

    return (
        <motion.div
            className="relative overflow-hidden"
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 300 }} // Adjust the height value as needed
            transition={{ duration: 0.5 }}
        >
            <div
                className="bg-cover bg-center h-60 md:h-80 lg:h-96"
                style={{ backgroundImage: `url(${imageSrc})` }}
                onClick={toggleExpanded}
            ></div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-black">{title}</h2>
                <p className={`mt-2 ${isExpanded ? 'block' : 'hidden'}`}>{content}</p>
            </div>
        </motion.div>
    );
};

export default ExpandingCard;
