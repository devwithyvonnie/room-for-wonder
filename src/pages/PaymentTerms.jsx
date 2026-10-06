function PaymentTerms() {
    const sections = [
      {
        title: '1. Authorization to Process Payment',
        body: "By submitting a payment authorization, the cardholder authorizes Room for Wonder Travel Co., LLC to use the payment information provided to process the specific authorized amount with the applicable travel supplier. The authorization applies only to the payment amount identified in the authorization request.",
      },
      {
        title: '2. Payment Processing',
        body: "Travel payments are processed by the applicable travel supplier or through an approved secure booking/payment system. Submitting an authorization does not mean the card has been charged or that payment has been accepted. Payment is complete only after it has been successfully processed and accepted.",
      },
      {
        title: '3. Supplier Terms & Cancellation Policy',
        body: "Payments made toward a travel reservation are subject to the applicable travel supplier's terms and conditions, including its deposit, final-payment, change, cancellation, and refund policies. The client is responsible for reviewing and accepting the terms applicable to the reservation.",
      },
      {
        title: '4. Accuracy of Payment Information',
        body: "The cardholder is responsible for providing accurate payment information and ensuring that sufficient funds or available credit exist for the authorized transaction. If a payment cannot be processed, Room for Wonder will notify the client when reasonably possible so alternative arrangements can be made.",
      },
      {
        title: '5. Refunds',
        body: "Any refund associated with a supplier payment is subject to the applicable supplier's eligibility requirements, policies, and processing timelines. Room for Wonder does not control the timing of refunds issued by travel suppliers or financial institutions.",
      },
      {
        title: '6. Secure Handling of Payment Information',
        body: "Payment information should be submitted only through the secure authorization process provided by Room for Wonder or directly to the applicable travel supplier. Clients should not send complete credit-card information by ordinary email, text message, or social-media message.",
      },
      {
        title: '7. Acceptance',
        body: "By submitting the payment authorization and acknowledging these Terms & Conditions, the cardholder confirms that they have reviewed the payment details, authorize the stated payment, and agree to these Payment Authorization Terms & Conditions and the applicable travel supplier's terms and conditions.",
      },
    ];
  
    return (
      <div className="px-8 py-20 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-ink mb-2">
          Client Payment Authorization Terms & Conditions
        </h1>
        <div className="h-px bg-plum/30 mb-10" />
  
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl text-plum mb-2">{section.title}</h2>
              <p className="font-body text-ink">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default PaymentTerms;