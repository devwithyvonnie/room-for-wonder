import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Buttons";
import NewsletterModal from "../components/ui/NewsletterModal";

function getFaqs(openNewsletter) {
  return [
    {
      q: "Does it cost more to book my vacation with Room for Wonder Travel Co.?",
      a: "For most vacations, there is no additional planning fee to work with Room for Wonder Travel Co. Travel agents are compensated by our travel supplier partners after you travel, so the cost of your vacation is generally the same whether you book directly or allow us to take care of the details for you. When you book with Room for Wonder, you'll receive personalized recommendations, help with the planning details, important reminders along the way, and a travel professional in your corner before, during, and after your vacation. Some services or more complex travel arrangements may require an additional fee. If a fee applies to your trip, you'll always know before we begin.",
    },
    {
      q: "Why should I use a travel agent instead of booking directly?",
      a: "You absolutely can book a vacation on your own, but booking the reservation is only one part of planning a great trip. Working with Room for Wonder connects you with a professional who knows the destinations and travel products you're considering and can help you make sense of all the options. Instead of spending hours researching resorts, room categories, tickets, dining, cruises, and other details, you'll receive personalized recommendations based on your family, priorities, budget, and the experience you want to have. Your travel agent will help you understand your choices, keep track of important details and deadlines, and take care of many of the planning tasks along the way. You still make the decisions. You just don't have to do all the work behind them.",
    },
    {
      q: "Will I still have control over my vacation plans?",
      a: "Absolutely. Your vacation should feel like your vacation. Your Room for Wonder travel agent will provide recommendations, explain your options, and take care of the planning details you would rather have off your plate, but the final decisions are always yours. You can be as involved in the planning process as you'd like. Some clients enjoy choosing restaurants and activities themselves, while others would rather have their travel agent narrow down the options and make recommendations. We'll tailor the planning experience to what works best for you. Our goal is to take the work out of planning without taking the fun or control away from you.",
    },
    {
      q: "What destinations and types of vacations can you help me plan?",
      a: (
        <>
          Room for Wonder Travel Co. currently specializes in Disney and Universal
          vacations, including Walt Disney World Resort, Disneyland Resort, Disney
          Cruise Line, Aulani, A Disney Resort & Spa, Disney's Vero Beach Resort,
          Disney's Hilton Head Island Resort, Adventures by Disney, National
          Geographic Expeditions, Universal Orlando Resort, Universal Studios
          Hollywood, and Universal Kids Resort, with more destinations coming
          soon!{" "}
          <button
            type="button"
            onClick={openNewsletter}
            className="text-coral-deep underline"
          >
            Subscribe to our email newsletter
          </button>{" "}
          for updates as we expand. Not sure which destination is right for your
          family? That's okay, too. Tell us about your travel party, budget,
          interests, and what you want from your vacation, and your travel agent
          can help narrow down the possibilities and recommend options that fit.
        </>
      ),
    },
    {
      q: "How early should I contact you about my vacation?",
      a: "It's never too early to start the conversation! Reaching out early can give you the best selection of available resorts, staterooms, room categories, and other vacation options, along with more time to plan and make payments before your trip. You don't need to have every detail figured out before contacting us. If you're considering a vacation but aren't sure about your exact dates, where to stay, or even which destination is the best fit, your travel agent can help you work through those decisions. Planning something on shorter notice? Reach out anyway! We'll be happy to explore what's still available and help you make the most of the time you have.",
    },
    {
      q: "Can you help if I already know exactly what I want to book?",
      a: "Absolutely! You don't have to need help choosing a destination or resort to benefit from working with Room for Wonder. If you've already done the research and know exactly what you want, your travel agent can take care of the booking and help manage the details from there. Once your vacation is booked, you'll still have a travel agent in your corner to keep track of important deadlines, answer questions, watch for applicable promotions, and support you before, during, and after your trip.",
    },
    {
      q: "Can you help if I've already booked my vacation?",
      a: "Possibly! If you recently booked your vacation directly with the travel supplier, your reservation may still be eligible to be transferred to Room for Wonder Travel Co. In many cases, reservations booked within the last 30 days can be transferred without changing your existing vacation plans or pricing. Once transferred, your Room for Wonder travel agent can provide planning assistance and support throughout the rest of your vacation experience. Transfer policies and deadlines vary by travel supplier, so reach out as soon as possible with your reservation information. We'll determine whether your booking is eligible and help you with the next steps.",
    },
    {
      q: "Do I have to pay for my entire vacation at once?",
      a: "No! Most vacation packages can be reserved with a deposit, with the remaining balance due at a later date determined by the travel supplier. Room for Wonder also offers complimentary payment plans to make budgeting for your vacation easier. You can choose a monthly or biweekly payment schedule and select the day that works best for you. Your travel agent will help you stay on track so your vacation is paid in full by the required final payment date. Deposit amounts, final payment dates, and payment policies vary by destination and travel supplier. Your travel agent will provide the applicable details with your vacation quote, and those terms will be confirmed at the time of booking.",
    },
    {
      q: "What happens if a better promotion becomes available after I book?",
      a: "Booking early doesn't necessarily mean missing out on a promotion that comes along later. After you book, your Room for Wonder travel agent will monitor for applicable promotions that may become available for your vacation. If a new offer could save you money or provide better value, your travel agent will check whether your reservation is eligible and work with the travel supplier to apply the promotion to your reservation when possible. Promotions are subject to availability and eligibility requirements, so they can't always be applied to an existing reservation. But you won't have to keep checking for new offers on your own. We'll be watching for you.",
    },
    {
      q: "What kind of help will I receive after my vacation is booked?",
      a: "Once your vacation is booked, your Room for Wonder travel agent will continue working with you throughout the planning process. We'll keep track of important dates and deadlines, provide destination-specific information and planning resources, answer questions as they come up, and help you prepare for your trip. Depending on your vacation, your travel agent can also assist with planning details such as dining, activities, special experiences, and other reservations. As your travel dates approach, we'll make sure you have the information you need to feel prepared and confident. And our support doesn't stop when your vacation begins. If something comes up while you're traveling, you'll have a travel agent you can reach out to for help navigating the situation.",
    },
    {
      q: "Can you help with dining reservations, activities, and other reservation details?",
      a: "Absolutely! Your Room for Wonder travel agent can help with much more than your initial vacation reservation. Depending on your destination, your planning services may include assistance with dining reservations, special experiences, activities, theme park planning, and other details that can make your vacation even more memorable. Your travel agent will let you know about important booking windows and help you understand which experiences may be a good fit for your family. When applicable, we can also assist with making reservations on your behalf so you don't have to keep track of every date and deadline yourself. The planning services available vary by destination and type of vacation, and your travel agent will explain what's included for your specific trip.",
    },
    {
      q: "Do you offer travel protection?",
      a: "Yes. Travel protection is available for your vacation, and your Room for Wonder travel agent will provide information about available options so you can decide whether coverage is right for you. Travel protection may help protect your vacation investment when certain unexpected circumstances affect your plans. Coverage, costs, limitations, and exclusions vary by plan, so we encourage you to review the policy details carefully before making your decision. If you choose not to purchase travel protection when you book, additional opportunities to add coverage may be available depending on your vacation and the plan selected. Your travel agent can explain the applicable deadlines and options.",
    },
    {
      q: "How do I get started?",
      a: (
        <>
          Getting started is easy! Complete our{" "}
          <Link to="/request-a-quote" className="text-coral-deep underline">
            Plan Your Vacation With Us
          </Link>{" "}
          form and tell us a little about your travel party, what you're
          considering, and what matters most for your vacation. You don't need to
          have every detail figured out before reaching out. After we receive your
          request, a Room for Wonder travel agent will be in touch to learn more
          about your plans and walk you through the next steps. From there, we'll
          help narrow down the options and create personalized recommendations
          designed around your family, priorities, and budget.
        </>
      ),
    },
  ];
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-ink/15 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-5 text-left font-display text-lg text-ink hover:bg-orchid/5 transition-colors"
      >
        {item.q}
        <span
          className={`text-plum text-2xl transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 font-body text-ink">{item.a}</div>
        </div>
      </div>
    </div>
  );
}

function FAQs() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const faqs = getFaqs(() => setNewsletterOpen(true));

  const faqCategories = [
    { label: "Getting Started", questions: [faqs[0], faqs[1], faqs[2], faqs[3]] },
    { label: "Planning Your Trip", questions: [faqs[4], faqs[5], faqs[6]] },
    { label: "Payments & Booking", questions: [faqs[7], faqs[8]] },
    { label: "After You Book", questions: [faqs[9], faqs[10], faqs[11], faqs[12]] },
  ];

  function toggle(question) {
    setOpenQuestion(openQuestion === question ? null : question);
  }

  return (
    <div className="px-8 py-20 max-w-3xl mx-auto">
      <p className="font-script text-4xl text-coral-deep mb-2">Good to Know</p>
      <h1 className="font-display text-5xl text-ink mb-12">FAQs</h1>

      <div className="space-y-12">
        {faqCategories.map((category) => (
          <div key={category.label}>
            <p className="font-script text-3xl text-plum mb-4">{category.label}</p>
            <div className="space-y-4">
              {category.questions.map((item) => (
                <FaqItem
                  key={item.q}
                  item={item}
                  isOpen={openQuestion === item.q}
                  onToggle={() => toggle(item.q)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-plum rounded-3xl px-8 py-12 text-center mt-16">
        <h2 className="font-display text-3xl text-offwhite mb-6">
          Still have questions? Let's talk.
        </h2>
        <Link to="/request-a-quote">
          <Button variant="primary">Request a Quote</Button>
        </Link>
      </div>

      <NewsletterModal open={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
    </div>
  );
}

export default FAQs;