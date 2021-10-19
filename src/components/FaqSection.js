import React, { useState } from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any questions <span>FAQ</span></h2>
            <AnimateSharedLayout >
                <Toggle title="How do i start?">
                    <motion.div className="question" layout initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        exit={{ opacity: 0 }}>
                        <div className="answer">
                            <p>lorem ipsum dolor sit amet</p>
                            <p>
                                lorem dolor sit amet kitar ligot xersd adipiscing, neque
                            </p>
                        </div>
                    </motion.div>
                </Toggle>
                <Toggle title="Daily schedule">
                    <div className="question">
                        <div className="answer">
                            <p>lorem ipsum dolor sit amet</p>
                            <p>
                                lorem dolor sit amet kitar ligot xersd adipiscing, neque
                            </p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="Payment methods">
                    <div className="question">
                        <div className="answer">
                            <p>lorem ipsum dolor sit amet</p>
                            <p>
                                lorem dolor sit amet kitar ligot xersd adipiscing, neque
                            </p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="What products do u offer">
                    <div className="question">
                        <div className="answer">
                            <p>lorem ipsum dolor sit amet</p>
                            <p>
                                lorem dolor sit amet kitar ligot xersd adipiscing, neque
                            </p>
                        </div>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display:block;
    overflow: hidden;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight:lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor:pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
        padding:1rem 0rem;
        }
    }

`;

export default FaqSection;