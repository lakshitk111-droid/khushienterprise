import { motion } from 'framer-motion';

const ContactInfoCard = ({ icon: Icon, title, content, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col items-start md:items-center text-left md:text-center group h-full"
    >
      <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
      <div className="text-gray-500 leading-relaxed space-y-1">
        {content}
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;
