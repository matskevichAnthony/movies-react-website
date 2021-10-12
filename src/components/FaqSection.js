import React, { useState } from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any questions <span>FAQ</span></h2>
            <AnimateSharedLayout >
                <Toggle title="How do i start?">
                    <div className="question">
                        <div className="answer">
                            <p>lorem ipsum dolor sit amet</p>
                            <p>
                                lorem dolor sit amet kitar ligot xersd adipiscing, neque
                            </p>
                        </div>
                    </div>
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