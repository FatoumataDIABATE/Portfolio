"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import {FaFilePdf} from "react-icons/fa";

type Article = {
    title: string;
    link: string;
    pubDate?: string;
    contentSnippet?: string;
    image?: string;
};

export default function Veille() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [error, setError] = useState<string | null>(null);
    const { ref } = useSectionInView("Veille");

    useEffect(() => {
        fetch("/api/veille")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setArticles(data);
                    setError(null);
                } else {
                    setArticles([]);
                    setError("Failed to load articles.");
                }
            })
            .catch(() => {
                setArticles([]);
                setError("Failed to load articles.");
            });
    }, []);

    return (
        <motion.section
            id="veille"
            ref={ref}
            className="mb-20 sm:mb-28 scroll-mt-28 w-full max-w-[58rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Veille Technologique</SectionHeading>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
                {articles.map((article, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="group sm:mb-8 last:mb-0"
                    >
                        <section className="h-full flex flex-col justify-between bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition border border-black/5 rounded-lg px-6 py-6 sm:px-8 sm:py-8">
                            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>

                            {article.pubDate && (
                                <p className="text-sm text-gray-500 dark:text-white/70 mb-2">
                                    {new Date(article.pubDate).toLocaleDateString("fr-FR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            )}

                            <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-4">
                                {article.contentSnippet}
                            </p>

                            <div className="mt-4 flex justify-center">
                                <a
                                    href={article.link}
                                    className="group bg-gray-950 text-white px-5 py-2 inline-flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border border-white/40"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="opacity-70 whitespace-nowrap">Lire l'article</span>

                                </a>
                            </div>
                        </section>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
