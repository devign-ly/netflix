import React from 'react';
import Accordion, {
  AccordionTitle,
  AccordionFrame,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from '../components/accordion';
import OptForm, { OptFormInput, OptFormButton, OptFormBreak, OptFormText } from '../components/opt-form';
import faqsData from '../fixtures/faqs';
import { SignUpForm } from '../components/form';

export function FaqsContainer() {
  return (
    <Accordion>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      <AccordionFrame>
        {faqsData.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionHeader>{item.header}</AccordionHeader>
            <AccordionBody>{item.body}</AccordionBody>
          </AccordionItem>
        ))}
      </AccordionFrame>

      <SignUpForm></SignUpForm>
    </Accordion>
  );
}
