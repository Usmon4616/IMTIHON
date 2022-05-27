import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>сортироват</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h4>Сортировать результаты по</h4>
                        <input type="text" placeholder='Популярные фильмы' />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}
