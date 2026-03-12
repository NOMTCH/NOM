import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

import { ContactCardProps } from "@/components/contact/types";

export const ContactCard = ({ heading, children }: ContactCardProps) => (
  <motion.div
    className="max-w-5xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Card className="border-none shadow-2xl bg-white/95 dark:bg-black/70 backdrop-blur-md">
      <CardBody className="p-8 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-2xl text-foreground-700 dark:text-foreground-400 font-medium">{heading}</h1>
        </div>
        {children}
      </CardBody>
    </Card>
  </motion.div>
);
