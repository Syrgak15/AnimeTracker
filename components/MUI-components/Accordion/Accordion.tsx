"use client"

import * as React from 'react';
import Accordion, {
    AccordionSlots,
    accordionClasses,
} from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
    const [expanded, setExpanded] = React.useState<number | false>(false);

    const handleChange =
        (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const faqData = [
        {
            question: "What is Anira Anime Tracker?",
            answer: "Anira Anime Tracker is a web application that helps users track the anime they watch, organize their favorites, and manage their personal watchlist in one place. It’s designed to make discovering and keeping up with anime simple and intuitive."
        },
        {
            question: "How can I track the anime I’m watching?",
            answer: "You can browse anime and add them to your personal collection. Once added, you can keep track of what you’ve watched and manage your list based on your preferences."
        },
        {
            question: "What features does Anira offer?",
            answer: "Anira provides features such as adding anime to favorites, managing a personal anime list, browsing and discovering anime, and a clean, responsive interface for easy navigation."
        },
        {
            question: "Why should I use Anira instead of other trackers?",
            answer: "Anira focuses on simplicity and user experience. It offers a clean interface, fast performance, and only the essential features needed to track and enjoy anime without unnecessary complexity."
        }
    ];

    return (
        <div style={{
            display: 'flex',
            gap: '25px',
            flexDirection: 'column',
        }}>
            {faqData.map((item, index) => (
                    <Accordion key={index}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                        slots={{ transition: Fade as AccordionSlots['transition'] }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={
                        [{
                            borderTopLeftRadius: 'none !important',
                            borderTopRightRadius: 'none !important',
                            padding: "10px",
                        },
                            expanded === index
                                ? {
                                    [`& .${accordionClasses.region}`]: {
                                        height: 'auto',
                                    },
                                    [`& .${accordionDetailsClasses.root}`]: {
                                        display: 'block',
                                    },
                                }
                                : {
                                    [`& .${accordionClasses.region}`]: {
                                        height: 0,
                                    },
                                    [`& .${accordionDetailsClasses.root}`]: {
                                        display: 'none',
                                    },
                                },
                        ]}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel-${index}-content`}
                            id={`panel-${index}-header`}
                        >
                            <Typography
                                sx={{
                                    color: 'var(--bg-color)',
                                    fontWeight: 'bold',
                                    fontFamily: 'var(--ffamily)',
                                }}
                            >
                                {item.question}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography
                                sx={{
                                    fontFamily: 'var(--ffamily)'
                                }}
                            >
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
        </div>
    );
}